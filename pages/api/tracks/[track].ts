import { NextApiRequest, NextApiResponse } from 'next';
import { TracksData } from '@/data/data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = TracksData.find((val) => val.id === req.query.track)
    const filteredData = data?.quarters.find((val) => val.id === Number(req.query.quarter))
    res.status(200).json({ trackName: data?.name, data: filteredData });
}