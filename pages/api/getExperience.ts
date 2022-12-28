import type {NextApiRequest, NextApiResponse} from "next"
import {groq} from "next-sanity"
import { sanityClient } from "../../config/sanity"
import { Experience } from "../../typings"

const query = groq`*[_type == "experience"] | order(dateStarted desc){
  ...,
  technologies[] ->
}`

type Data = {
    experience : Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    try {
      const experience: Experience[] = await sanityClient.fetch(query)
      res.status(200).json({ experience })
      
    } catch (error) {
      res.status(200).json({ experience: [] })
    }
   
  }
  