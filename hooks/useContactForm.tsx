import React, { useEffect, useState } from 'react'
type useContactFormHook = () => [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: any) => Promise<void>,
  string
]
const useContactForm: useContactFormHook = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    setError('')
  }, [name, email, message])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = {
      name,
      email,
      message
    }
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const data = await response.json()
      if (data.error) {
        setError(data.error)
      } else {
        setName('')
        setEmail('')
        setMessage('')
      }
    } catch (error) {
      setError('Something went wrong. Please try again.')
    }
  }
  return [
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    handleSubmit,
    error
  ]
}

export default useContactForm
