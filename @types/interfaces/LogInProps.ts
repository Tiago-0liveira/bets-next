import { User } from "@prisma/client"

export default interface ILogInProps {
    users: User[]
}