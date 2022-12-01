import fetch from 'node-fetch'

export const handler = async () => {
    const QUOTES_API = 'https://zenquotes.io/api/random'
    
    const response = await fetch(QUOTES_API)
    
    const data = await response.json()
    console.log(JSON.stringify(data))
  
    return {
        statusCode: 200,
        body: JSON.stringify(
          data
        )
    }
  }