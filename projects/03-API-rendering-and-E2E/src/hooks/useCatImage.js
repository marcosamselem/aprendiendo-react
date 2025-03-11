import { useEffect, useState } from 'react'

// custom hook to reuse the catImage logic on different app components
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return // Wait until we have a fact.
    const firstWord = fact.split(' ')[0] // Get the first word
    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact]) // Depend on 'fact' to trigger the effect when it changes
  return { imageUrl }
} //  This custom hook returns the image URL of the cats endpoint.
