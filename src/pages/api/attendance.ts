import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prismaClient'; // Import the singleton instance of PrismaClient

// API handler function to process the POST request
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    try {
        const { uin, event } = req.body;

        // Validate input
        if (!event || typeof event !== 'string' || !uin || typeof uin !== 'string') {
            res.status(400).json({ message: "Invalid input: 'uin' and 'event' are required and must be strings." });
            return;
        }

        const eventKey = event.toUpperCase();

        const user = await prisma.users.findUnique({
            where: { UIN: uin }
        });

        if (user && user[eventKey]) {
            // User already marked for this event
            res.status(200).json({ message: "Your attendance has already been marked!" });
            return;
        }

        if (user) {
            await prisma.users.update({
                where: { UIN: uin },
                data: { [eventKey]: 1 }
            });
        } else {
            await prisma.users.create({
                data: { UIN: uin, [eventKey]: 1 }
            });
        }

        res.status(200).json({ message: "Attendance marked!" });
    } catch (error) {
        console.error("Error in POST /api/attendance:", error);
        res.status(500).json({ message: "Error processing request", details: error instanceof Error ? error.message : 'Unknown error' });
    }
}
