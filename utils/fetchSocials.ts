import { Social } from "../typings"
import axios from "axios"


const fetchSocials = async() => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    const data = await res.data
    const socials: Social[] = data.socials

    return socials

}

export default fetchSocials