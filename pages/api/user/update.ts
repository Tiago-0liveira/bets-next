import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/db'
import IError from "../../../@types/interfaces/ResponseError"
import { User } from '.prisma/client'
import IResUser from '../../../@types/interfaces/ResponseUser'


export default async (req: NextApiRequest, res: NextApiResponse<IResUser | IError>) => {
    if (req.method === "PUT") {
        const data: User = await prisma.user.update({
            where: { id: req.body.where.id },
            data: req.body.data
        });
        res.status(200).json({ user: data })
    } else {
        res.status(400).json({ error: "Method Not Allowed" })
    }
}