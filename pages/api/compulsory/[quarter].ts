import { NextApiRequest, NextApiResponse } from 'next';
import { CompulsaryQuarterData } from '@/data/data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const filteredData = CompulsaryQuarterData.find((val) => val.id === Number(req.query.quarter))
    res.status(200).json(filteredData);
}