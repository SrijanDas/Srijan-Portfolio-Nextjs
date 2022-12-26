import { Experience } from "../typings"
import axios from "axios"

const fetchExperience = async() => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    const data = await res.data
    const experience: Experience[] = data.experience

    return experience

}

export default fetchExperience