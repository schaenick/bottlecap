import { Color } from "../types/color";
import { ColorUpdate } from "../types/color";

const API_URL = "https://api.bottlecap.klingfer.de/colors"

export async function getColors(): Promise<Color[]>
{
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
    }
export async function updateColor(id: number, update: ColorUpdate): Promise<Color> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(update)
    })
    const data = await response.json()
    return data
}