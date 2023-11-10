import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
    switch(req.method) {
        case "POST": 
            res.status(200).json({ message: "POST method called" });
            break;
        case "GET":
            res.status(200).json({ message: "GET method called" });
            break;
    }
}