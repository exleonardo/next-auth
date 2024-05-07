import { hashPassword } from '@/helpers/auth'
import { connectDatabase } from '@/helpers/db-util'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body
  const { email, password } = data

  if (req.method === 'POST') {
    if (
      !email.includes('@') ||
      !password ||
      password.trim().length < 7 ||
      !email ||
      email.trim() === ''
    ) {
      res
        .status(422)
        .json({ message: 'Invalid input - password should be at least 7 characters long.' })

      return
    }

    const client = await connectDatabase()
    const db = client.db()
    const hashedPassword = await hashPassword(password)

    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
    })

    res.status(201).json({ message: 'Created user!' })
  }
}
