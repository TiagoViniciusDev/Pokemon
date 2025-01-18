async function ApiFetch(method, route, body){

    try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards`, {
            method: method,
            body: JSON.stringify(body),
            headers: {"X-Api-Key": import.meta.env.VITE_API_KEY},
            credentials: 'include'
        })
        const data = await response
        return data
    } catch(error) {
        const falha = {
            error: true,
            msg: "Não foi possível se conectar ao servidor"
        }
        return falha
    }
}

export default ApiFetch