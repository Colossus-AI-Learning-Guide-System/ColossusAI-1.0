// import { NextResponse } from "next/server";
// import { sendFeedbackEmail } from "@/lib/utils/email";

// export async function POST(request: Request) {
//   try {
//     const feedback = await request.json();

//     const client = await clientPromise;
//     const db = client.db("colossus_ai");

//     await db.collection("feedback").insertOne({
//       ...feedback,
//       createdAt: new Date(),
//     });

//     await sendFeedbackEmail(feedback);

//     return NextResponse.json({ message: "Feedback submitted successfully" });
//   } catch (error) {
//     console.error("Feedback submission error:", error);
//     return NextResponse.json(
//       { message: "Failed to submit feedback" },
//       { status: 500 }
//     );
//   }
// }