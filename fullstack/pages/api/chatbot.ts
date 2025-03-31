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

    console.log("Received fields:", fields);
    console.log("Received files:", files);

    try {
      const query = Array.isArray(fields.query) ? fields.query[0] : fields.query;
      if (!query || typeof query !== "string") {
        console.error("Invalid query:", query);
    try {
      const query = Array.isArray(fields.query) ? fields.query[0] : fields.query;
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query must be a non-empty string." });
      }

      const fileArray = files.files ? (Array.isArray(files.files) ? files.files : [files.files]) : [];
      const fileContents: string[] = [];
      for (const file of fileArray) {
        if (file && file.filepath) {
          const content = await fs.readFile(file.filepath, "utf-8");
          fileContents.push(content);
        }
      }

      if (fileContents.length > 0) {
        const uploadResponse = await fetch("http://localhost:5001/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ files: fileContents }),
        });

        if (!uploadResponse.ok) {
          console.error("File upload failed:", await uploadResponse.text());
          return res.status(500).json({ error: "Failed to upload files to Python backend." });
        }
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);

      try {
        const queryResponse = await fetch("http://localhost:5001/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!queryResponse.ok) {
          console.error("Query failed:", await queryResponse.text());
          return res.status(500).json({ error: "Failed to process query with Python backend." });
        }

        const data = await queryResponse.json();
        console.log("Python backend data:", JSON.stringify(data, null, 2)); // Debugging

        if (!data || !Array.isArray(data)) {
          console.error("Invalid Python backend response structure:", data);
          return res.status(500).json({ error: "Invalid response from Python backend." });
        }

        return res.status(200).json({ response: data });
      } catch (error) {
        if (error.name === "AbortError") {
          console.error("Query request timed out.");
          return res.status(408).json({ error: "Query request timed out." });
        }
        console.error("Unexpected error:", error);
        return res.status(500).json({ error: "Unexpected error during query processing." });
      }
    } catch (error) {
      console.error("Error in handler:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  });
}
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
