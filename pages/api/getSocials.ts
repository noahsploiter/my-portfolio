import type { NextApiRequest, NextApiResponse } from "next";
import { Social } from './../../typings.d';
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";


const query = groq`
    *[_type == "social"]
`;

type Data = {
    socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socials: Social[] = await sanityClient.fetch(query);

    res.status(200).json({ socials })
  }
  