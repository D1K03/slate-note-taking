import { Router } from 'express'
import * as argon2 from 'argon2'
import { PrismaClient } from '@prisma/client'
import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const authRouter = Router()
const prisma = new PrismaClient()

interface UserCredentials {
    fullName?: string
    email: string
    password: string
}

authRouter.post('/signup', async (req: Request, res: Response) => {
    try {
        const { fullName, email, password }: UserCredentials = req.body

        if (!fullName || !email || !password) {
            return res.status(400).json({message: 'Missing Required Fields'})
        }
        
        const passwordHash = await argon2.hash(password)

        const newUser = await prisma.user.create({
            data: {
                fullName,
                email,
                password: passwordHash,

            },
        })

        res.status(201).json({ message: 'Successful User Creation', userId: newUser.id })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: 'Sign Up Error Occurred', message: e })
    }
})

authRouter.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password }: UserCredentials = req.body

        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return res.status(401).json({ error: 'Invalid Email or Password' })
        }

        const isPassword: boolean = await argon2.verify(user.password, password)

        if (!isPassword) {
            return res.status(401).json({ error: 'Invalid Email or Password' })
        }

        const token = jwt.sign(
            {userId: user.id, role: user.role},
            process.env.JWT_SECRET as string,
            {expiresIn: '1h'})
            
        res.json({token, userId: user.id})
    } catch (e) {
        console.error(e)
        res.status(500).json({error: 'Login Credentials Not Found', message: e})
    }
})

export default authRouter
