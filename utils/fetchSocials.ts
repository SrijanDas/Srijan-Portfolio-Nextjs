import axios from "../config/axios"
import { Social } from "../typings"

const fetchSocials = async() => {
    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    // const data = await res.json()
    const res = await axios.get(`/api/getSocials`)

    const data = res.data

    const socials: Social[] = data.socials

    return socials
        
    } catch (error) {
        console.log(error)
        return []
        
    }

}

export default fetchSocials