import { useEffect, useState } from "react"
import { api } from "../services/api"

export default function Home() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get('/clients').then(({data}) => {
      setClients(data.data)
    })
  }, [clients]);

  return (
    <ul>
      {clients.map((client, index) => (
          <li key={index}>{client.name}</li>
      ))}
    </ul>
  )
}
