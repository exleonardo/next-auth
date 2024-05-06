import { connectDatabase } from '@/helpers/db-util'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectDatabase()

  client.db()
}
