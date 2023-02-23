import { NextApiRequest, NextApiResponse } from 'next';
import { CompulsaryQuarterData } from '@/data/data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(CompulsaryQuarterData);
}