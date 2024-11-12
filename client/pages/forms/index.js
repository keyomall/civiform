import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'

export default function Forms() {
  const [forms, setForms] = useState([])

  useEffect(() => {
    fetch('/api/forms')
      .then(res => res.json())
      .then(data => setForms(data))
  }, [])

  return (
    <Layout>
      <h1>Forms</h1>
      <ul>
        {forms.map(form => (
          <li key={form._id}>{form.name}</li>
        ))}
      </ul>
    </Layout>
  )
}