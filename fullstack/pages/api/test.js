import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise; // Connect to MongoDB
    const db = client.db("colossus_ai"); // Replace with your desired database name

    // Test connection by fetching a collection (or creating one if it doesn't exist)
    const testCollection = db.collection("test");
    const testData = await testCollection.find({}).toArray();

    res.status(200).json({
      success: true,
      message: "Connected to MongoDB successfully!",
      data: testData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Connection failed." });
  }
}
