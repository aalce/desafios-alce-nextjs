import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      let result = {};

      const { limit } = req.query

      const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const {results} = await response.json();

        result = results;

        res.status(200).json({result});
      }

      fetchData();

    } else {
      res.status(405).json({error: `Method ${req.method} not allowed`})
    }
  } catch (err) {
    res.status(500).json({error: err})
  }
  
}