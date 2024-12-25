import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { query } = req.body;

    // Simulate GPT model interaction
    try {
        const mockResponse = `Response for: ${query}`; // Replace this with GPT API integration
        res.status(200).json({ message: mockResponse });
    } catch (error) {
        res.status(500).json({ error: "Failed to process query" });
    }
}