import { Router } from 'express'
import argon2 from 'argon2'
import { Prisma, PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.post('/signup', async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        const passwordHash = await argon2.hash(password)
        
        const newUser = await prisma.user.create({
            user: {
                fullName,
                email,
                password: passwordHash
            }
        })

        res.status(201).json({message: "Successful User Creation", userId: newUser.id})
    } 
    catch (e) {
        res.status(500).json({error: "Sign Up Error Occurred", message: e})
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({
            where: email
        })

        if (!user) {
            return res.status(401).json({error: "Invalid Email or Password"})
        }

        const isPassword = await argon2.verify(password, user.password)

        if (!isPassword) {
            return res.status(401).json({error: "Invalid Email or Password"})
        }
    }
    catch (e) {

    }
})

export default router;