import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {

      const { name } = req.query

      const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const result = await response.json();

        const resp = {
            id: result.id,
            name: result.name,
            image: result.sprites.other.dream_world.front_default,
            ability1: result.abilities[0].ability,
            ability2: result.abilities[1].ability,
            hp: result.stats[0].base_stat,
            attack: result.stats[1].base_stat,
            defense: result.stats[2].base_stat
        }

        res.status(200).json(resp);
      }

      fetchData();

    } else {
      res.status(405).json({error: `Method ${req.method} not allowed`})
    }
  } catch (err) {
    res.status(500).json({error: err})
  }
  
}