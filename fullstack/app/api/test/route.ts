import { NextResponse } from "next/server";
import clientPromise from "@/config/database/mongodb";
// Database Conectivity test
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("colossus_ai");

    // Test connection by fetching a collection
    const testCollection = db.collection("test");
    const testData = await testCollection.find({}).toArray();

    return NextResponse.json({
      success: true,
      message: "Connected to MongoDB successfully!",
      data: testData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Connection failed." },
      { status: 500 }
    );
  }
}
