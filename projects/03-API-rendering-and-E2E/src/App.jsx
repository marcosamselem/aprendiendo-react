import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState('bye')
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ')[0]
        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <h2>{fact}</h2>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}
