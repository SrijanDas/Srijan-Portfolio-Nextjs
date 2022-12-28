import { Experience } from "../typings"
import axios from "../config/axios"

const fetchExperience = async() => {
    // const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    try {
        const res = await axios.get(`/api/getExperience`)
        const data = res.data
        const experience: Experience[] = data.experience

        return experience
    } catch (error) {
        console.log(error)
        return []
        
    }
    

}

export default fetchExperience