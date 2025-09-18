import { useEffect, useState } from "react"
import type { CodeMon } from "./types/codemon"
import { getAllTheCodeMons } from "./service/codeMonService"

function App() {
  const [mons, setCodeMons] = useState<CodeMon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllTheCodeMons()
        setCodeMons(data)
        setError(null)
      } 
      catch (err) {
        console.error("Fel vid hämtning:", err)
        setError("Kunde inte hitta en CodeMon...")
      } 
      finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const first = mons[0]

  return (
    <div className="app-container">
      <h1 className="title">CodeMonHemsida</h1>

      {/* Denna laddar upp där korten på CodeMons hamnar */}
      <div className="codemon-card">
        {loading && <p>Laddar...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && first && (
          <>
            <img
              src={`/images/${first.name}.png`}
              onError={(e) => {
                e.currentTarget.src = "/images/DEFAULT.png"
              }}
              alt={first.name}
              className="codemon-image"
            />
            <h2 className="codemon-name">{first.name}</h2>
          </>
        )}
      </div>
      
      {/* För knapparna längst ner */}
      <div className="button-group">
        <button disabled>Föregående</button>
        <button disabled>Nästa</button>
      </div>
    </div>
  )
}

export default App
