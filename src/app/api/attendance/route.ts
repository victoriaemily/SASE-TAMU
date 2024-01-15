import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const client = new PrismaClient();

export const POST = async (request: NextRequest) => {
    const {uin, event} = await request.json()

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
                [event]: 1,
            }
        })
    }else{
        const response = await client.users.create({
            data: {
                UIN: uin,
                [event]: 1,
            }
        })
    }

    return new Response(JSON.stringify({
        message: "User creation failed"
    }), {
        status: 500
    })

}