import { User } from "@prisma/client"

export default interface IuserAll {
    users: User[]
}