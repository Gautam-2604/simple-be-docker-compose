import express from "express"
import { PrismaClient } from "@prisma/client/extension";

const app= express();
const prismaClient = new PrismaClient()

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/",async(req,res)=>{
    await prismaClient.user.create({
        data:{
        username:Math.random().toString(),
        password: Math.random().toString()
        }
    })
    res.send("Hello World Post")
})

app.listen(3000)