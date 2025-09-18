import { useEffect, useState } from "react"
import type { CodeMon } from "./types/codemon"
import { getAllTheCodeMons } from "./service/codeMonService"

function App() {
  const [mons, setCodeMons] = useState<CodeMon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // UseState för att hålla koll på vilket kort som ska visas först
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        // Testar att hämta all data
        const data = await getAllTheCodeMons()
        setCodeMons(data)
        setError(null)
        setCurrentIndex(0)
        
      } 
      catch (err) {
        console.error("Fel vid hämtning:", err)
        setError("Kunde inte hitta en CodeMon...")
      } 
      finally {
        setLoading(false)
      }
    }

    // Hämtar sedan datan
    fetchData()
  }, [])

  // Funktion för att gå till nästa CodeMon
  // Sätter UseState +1 för varje gång man klickar
  function goToNextCodeMon() {
  setCurrentIndex((prev) => prev + 1)
  }

  // Sätter UseState -1 för varje gång man klickar
  function goToPreviousCodeMon() {
  setCurrentIndex((prev) => prev - 1)
  }

  const CodeMon = mons[currentIndex]

  return (
    <div className="app-container">
      <h1 className="title">CodeMon</h1>

      {/* Denna laddar upp där korten på CodeMons hamnar */}
      <div className="codemon-card">
        {loading && <p>Laddar...</p>}
        {error && <p>Error... vid hämtningen. Kom ej åt databasen</p>}
        {!loading && !error && CodeMon && (
          <>
            <img
              src={`/images/${CodeMon.name}.png`}
              onError={(e) => {
                e.currentTarget.src = "/images/ErrorGettingImage.png"
              }}
              alt={CodeMon.name}
              className="codemon-image"
            />
            <h2 className="Codemon-Name">{CodeMon.name}</h2>
            <h2 className="Codemon-Type">{CodeMon.type}</h2>
            <h2 className="Codemon-CreatedAt">Attack Damage: {CodeMon.attackdmg}</h2>
            <h2 className="Codemon-CreatedAt">Health Points: {CodeMon.hp}</h2>

          </>
        )}
      </div>
      
      {/* För knapparna längst ner */}
      <div className="button-group">
        
         {/* Knapp för att gå till föregående CodeMon */}
         {/* disabled = currentIndex, innebär att den kommer att vara grå om index är 0 */}
        <button onClick={goToPreviousCodeMon} disabled={currentIndex === 0}>Föregående</button>
        <button onClick={goToNextCodeMon} disabled={currentIndex === mons.length - 1}>Nästa</button>
      </div>
    </div>
  )
}

export default App
