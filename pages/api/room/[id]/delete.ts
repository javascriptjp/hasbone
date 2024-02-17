import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string,
    rooms: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.status(200).json({ message: `${req.query.id}`, rooms: 0 })
}
