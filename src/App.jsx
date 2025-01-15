import React, { useState } from 'react'

const App = () => {

  const [person, setPerson] = useState()

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000", {
      method: "GET"
    })
    const data = await res.json()

    setPerson(data)
  }

  return (
    <div>

      <button onClick={() => {
        fetchData()
      }}>CLick</button>

      {
        person && <h1>{person.name}</h1>
      }
    </div>
  )
}

export default App