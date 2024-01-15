import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prismaClient'; // import the singleton instance

import { NextRequest } from 'next/server';

const client = prisma;

export const POST = async (request: NextRequest) => {
    const {uin, event} = await request.json()

    const eventKey = event.toUpperCase();

    const user = await client.users.findUnique({
        where: {
            UIN: uin
        }
    })

    if (user){
        const response = await client.users.update({
            where:{
                UIN: uin,
            },
            data: {
                [eventKey]: 1,
            }
        })
    }else{
        const response = await client.users.create({
            data: {
                UIN: uin,
                [eventKey]: 1,
            }
        })
    }

    return new Response(JSON.stringify({
        message: "User creation failed"
    }), {
        status: 500
    })

}