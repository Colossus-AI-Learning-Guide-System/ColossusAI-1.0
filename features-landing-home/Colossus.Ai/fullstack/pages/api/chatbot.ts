import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Formidable error:", err);
      return res.status(500).json({ error: "Failed to parse the form data." });
    }

    try {
      const query = Array.isArray(fields.query) ? fields.query[0] : fields.query;
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query must be a non-empty string." });
      }

      const fileArray = files.files ? (Array.isArray(files.files) ? files.files : [files.files]) : [];
      const fileBuffers: Buffer[] = [];
      for (const file of fileArray) {
        if (file && file.filepath) {
          const buffer = await fs.readFile(file.filepath); // Read file as binary data
          fileBuffers.push(buffer);
        }
      }

      console.log("Sending files to Python backend:", fileBuffers); // Log files being sent

      // Upload files to Python backend
      const uploadResponse = await fetch("http://127.0.0.1:5001/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ files: fileBuffers.map(buffer => buffer.toString("base64")) }), // Send as base64
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        console.error("File upload failed:", errorText);
        return res.status(500).json({ error: "Failed to upload files to Python backend." });
      }

      // Send query to Python backend
      const queryResponse = await fetch("http://127.0.0.1:5001/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!queryResponse.ok) {
        const errorText = await queryResponse.text();
        console.error("Query failed:", errorText);
        return res.status(500).json({ error: "Failed to process query with Python backend." });
      }

      const data = await queryResponse.json();
      return res.status(200).json({ response: data });
    } catch (error) {
      console.error("Error in handler:", error);
      return res.status(500).json({ error: "Internal server error." });
    }
  });
}