import { Router } from 'express'
import * as argon2 from 'argon2'
import { Prisma, PrismaClient } from '@prisma/client'
import type { Request, Response } from 'express'

const router = Router()
const prisma = new PrismaClient()

interface UserCredentials {
    fullName?: string
    email: string
    password: string
}

router.post('/signup', async (req: Request, res: Response) => {
    try {
        const { fullName, email, password }: UserCredentials = req.body
        const passwordHash = await argon2.hash(password)

        const newUser = await prisma.user.create({
            user: {
                fullName,
                email,
                password: passwordHash,
            },
        })

        res.status(201).json({ message: 'Successful User Creation', userId: newUser.id })
    } catch (e) {
        res.status(500).json({ error: 'Sign Up Error Occurred', message: e })
    }
})

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password }: UserCredentials = req.body

        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return res.status(401).json({ error: 'Invalid Email or Password' })
        }

        const isPassword: boolean = await argon2.verify(password, user.password)

        if (!isPassword) {
            return res.status(401).json({ error: 'Invalid Email or Password' })
        }
    } catch (e) {
        res.status(500).json({error: 'Login Credentials Not Found', message: e})
    }
})

export default router
