import { Color } from "../types/color";

const API_URL = "https://api.bottlecap.klingfer.de/colors"

export async function getColors(): Promise<Color[]>
{
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
    }