import { Color } from "../types/color";

const API_URL = "http://localhost:8001/colors"

export async function getColors(): Promise<Color[]>
{
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
    }