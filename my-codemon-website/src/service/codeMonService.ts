//? Importera typen av CodeMon, den är samma som i din backend i Intellij
import type { CodeMon } from "../types/codemon"; 

// Hämtar vilken url den ska till via .env filen som ligger i rooten
const API_URL = import.meta.env.VITE_API_URL 

export async function getAllTheCodeMons(): Promise<CodeMon []> {
    const response = await fetch (`${API_URL}/codemons/`)

    // En check bara för att jag fick fel tidigare med att det saknades saker i .env filen 
    if (!API_URL){
        throw new Error ("Saknar VITE_API_URL i .env.local");
    } 


    // En till check som ska kasta ett error om något går fel när den ska hämtas 
    if (!response.ok){
        throw new Error ("Något gick fel när CodeMons skulle hämtas")
    }

    const data: CodeMon[] = await response.json()

    return data
}