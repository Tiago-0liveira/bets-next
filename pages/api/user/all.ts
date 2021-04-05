import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/db'
import IuserAll from '../../../@types/interfaces/user-all'
import TUsers from '../../../@types/types/users'
import IError from "../../../@types/interfaces/ResponseError"


export default async (req: NextApiRequest, res: NextApiResponse<IuserAll | IError>) => {
    if (req.method === "GET") {
        const data: TUsers = await prisma.user.findMany();
        res.status(200).json({ users: data })
    } else {
        res.status(400).json({ error: "Method Not Allowed" })
    }
}