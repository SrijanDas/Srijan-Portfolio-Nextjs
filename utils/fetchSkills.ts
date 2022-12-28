import axios from "../config/axios"
import { Skill } from "../typings"

const fetchSkills = async() => {
    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    // const data = await res.json()
    const res = await axios.get(`/api/getSkills`)

    const data = res.data

    const skills: Skill[] = data.skills

    return skills
        
    } catch (error) {
        console.log(error)
        return []
    }

}

export default fetchSkills