import dotenv from 'dotenv';
import express from 'express';
import {  PrismaClient } from '@prisma/client/extension';

const app =express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`user api check`)
})