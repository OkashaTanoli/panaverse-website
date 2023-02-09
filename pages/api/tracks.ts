import { NextApiRequest, NextApiResponse } from 'next';
import { TracksData } from '@/data/data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(JSON.stringify(TracksData));
}