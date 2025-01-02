// import type { NextApiRequest, NextApiResponse } from "next";
// import { User } from "@/lib/models/user.model";
// import { LoginRequest, AuthResponse } from "@/lib/type/auth.types";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import clientPromise from "@/lib/mongodb";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<AuthResponse>
// ) {
//   if (req.method !== "POST") {
//     return res
//       .status(405)
//       .json({ success: false, message: "Method not allowed" });
//   }

//   try {
//     await clientPromise;
//     const { emailOrUsername, password }: LoginRequest = req.body;

//     if (!emailOrUsername || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // Find user
//     const user = await User.findOne({
//       $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
//     });

//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Verify password
//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const token = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET || "fallback-secret",
//       { expiresIn: "24h" }
//     );

//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// }
