import type { NextApiRequest, NextApiResponse } from "next";
import { PageInfo } from './../../typings.d';
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";


const query = groq`
    *[_type == "PageInfo"][0]
`;

type Data = {
    pageInfo: PageInfo;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const pageInfo: PageInfo = await sanityClient.fetch(query);
    
    res.status(200).json({ pageInfo })
    
}