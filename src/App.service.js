import axios from 'axios'

export const fetchCharacters = async () => {
    try{
        const data = await axios.get(
            `http://gateway.marvel.com/v1/public/characters?ts=1&limit=50&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_MD5_HASH}`
        )
        console.log("AK: ", data?.data?.data?.results)

        const formattedData = data?.data?.data?.results?.map(character => ({
            id: character.id,
            name: character.name,
            description: character.description,
            imgUrl: `${character.thumbnail.path}.jpg`,
        }))

        return formattedData
    } catch(error){
        console.error("Error in API: ", error)
        throw error
    }
}

