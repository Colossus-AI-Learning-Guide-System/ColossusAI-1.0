import clientPromise from "../../lib/db";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Colossus.ai"); // Replace with your actual database name
    const collection = db.collection("Colosuss"); // Replace with your collection name

    if (req.method === "GET") {
      const data = await collection.find({}).toArray();
      res.status(200).json({ success: true, data });
    } else {
      res.status(405).json({ success: false, message: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
