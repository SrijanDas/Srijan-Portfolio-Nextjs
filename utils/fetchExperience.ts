import { Experience } from "../typings"

const fetchExperience = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    const data = await res.json()
    const experience: Experience[] = data.experience

    return experience

}

export default fetchExperience