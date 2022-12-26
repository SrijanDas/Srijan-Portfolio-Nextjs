import { Skill } from "../typings"
import axios from "axios"

const fetchSkills = async() => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    const data = await res.data
    const skills: Skill[] = data.skills

    return skills

}

export default fetchSkills