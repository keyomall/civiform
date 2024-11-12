import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'

export default function Citizens() {
  const [citizens, setCitizens] = useState([])

  useEffect(() => {
    fetch('/api/citizens')
      .then(res => res.json())
      .then(data => setCitizens(data))
  }, [])

  return (
    <Layout>
      <h1>Citizens</h1>
      <ul>
        {citizens.map(citizen => (
          <li key={citizen._id}>{citizen.firstName} {citizen.lastName}</li>
        ))}
      </ul>
    </Layout>
  )
}