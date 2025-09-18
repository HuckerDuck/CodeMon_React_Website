//? Importera typen av CodeMon, den är samma som i din backend i Intellij
import type { CodeMon } from "../types/codemon"; 

const API_URL = import.meta.env.VITE_API_URL 

export async function getAllTheCodeMons(): Promise<CodeMon []> {
    const response = await fetch (`${API_URL}/codemons/`)
    if (!API_URL){
        throw new Error ("Saknar VITE_API_URL i .env.local");
    } 

    if (!response.ok){
        throw new Error ("Något gick fel när CodeMons skulle hämtas")
    }

    const data: CodeMon[] = await response.json()

    return data
}