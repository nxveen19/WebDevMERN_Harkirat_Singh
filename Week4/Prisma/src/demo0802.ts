import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"]
});
//similar to import mongoose 
// mongoose.connect()

// i can import prisma.user ot todos automatically and can update/delete/create etx
async function insertUser(email:string, firstName: string, lastName: string, password: string, phone: string) {
// instead of writing INSERT INTO users VALUES ....
    const res = await prisma.user.create({
        //data u need to put in
        data: {
            email,
            firstName,
            lastName,
            password,
            phone
        },
        //data u need to select
        select: {
            id: true,
            email: true,
            firstName: true
        }
    })
    console.log(res)
}
//updateParams is an obj which can be used as an arg
interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser(username:string, {
    firstName, lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: {email: username},
        data: {
            firstName,
            lastName
        }
    })
    console.log(res)
}

//insertUser("pandey@gmail.com", "password", "naveen", "pandey", "9082223606")
updateUser("naveen@gmail.com", {
    firstName: "akash",
    lastName: "mishra"
})