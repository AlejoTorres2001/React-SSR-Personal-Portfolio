import React, { useEffect, useState } from 'react'

type useContactFormHook = () => [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
  string,
  string,
  boolean
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const useContactForm: useContactFormHook = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setError('')
    setSuccess('')
  }, [name, email, message])

  const validateForm = () => {
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return 'Please complete all fields before sending.'
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return 'Please provide a valid email address.'
    }

    if (trimmedName.length < 2) {
      return 'Name must contain at least 2 characters.'
    }

    if (trimmedMessage.length < 20) {
      return 'Message must contain at least 20 characters.'
    }

    if (trimmedMessage.length > 2000) {
      return 'Message must be shorter than 2000 characters.'
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting) {
      return
    }

    const validationError = validateForm()

    if (validationError) {
      setError(validationError)
      return
    }

    const body = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    }

    try {
      setIsSubmitting(true)
      setError('')
      setSuccess('')

      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      const data = await response.json()

      if (!response.ok || data.error) {
        setError(data.error)
      } else {
        setName('')
        setEmail('')
        setMessage('')
        setSuccess(data.message ?? 'Thanks for your message!')
      }
    } catch (error) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
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
    error,
    success,
    isSubmitting
  ]
}

export default useContactForm
