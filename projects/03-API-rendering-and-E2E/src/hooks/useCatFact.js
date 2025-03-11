import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState('')
  // Para recuperar la cita al cargar la página
  const refreshFact = () => {
    getRandomFact().then(setFact)
  }
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
