"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const prisma = new client_1.PrismaClient({
    log: ["query", "info", "warn", "error"]
});
//similar to import mongoose 
// mongoose.connect()
// i can import prisma.user ot todos automatically and can update/delete/create etx
function insertUser(email, firstName, lastName, password, phone) {
    return __awaiter(this, void 0, void 0, function* () {
        // instead of writing INSERT INTO users VALUES ....
        const res = yield prisma.user.create({
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
        });
        console.log(res);
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { email: username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
//insertUser("pandey@gmail.com", "password", "naveen", "pandey", "9082223606")
updateUser("naveen@gmail.com", {
    firstName: "akash",
    lastName: "mishra"
});
