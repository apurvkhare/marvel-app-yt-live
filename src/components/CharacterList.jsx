import React from 'react'
import CharacterCard from './CharacterCard'
import classes from '../styles/CharacterList.module.css'
import { fetchCharacters } from '../App.service'
import { dataReducer, FETCH_STATES, initialState } from '../reducers/dataReducer'
import {
    DATA_REQUEST_FAILURE,
    DATA_REQUEST_INITIATED,
    DATA_REQUEST_SUCCESS,
} from '../reducers/actionTypes'

// const heroes = [
//     {
//         name: 'Iron man',
//         imgUrl: 'https://picsum.photos/id/1/200/300',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolor deleniti iure aperiam necessitatibus impedit consectetur maiores quam suscipit cum, voluptatem ab numquam blanditiis, officia eveniet nostrum totam assumenda non!',
//     },
//     {
//         name: 'Captain America',
//         imgUrl: 'https://picsum.photos/id/2/200/300',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolor deleniti iure aperiam necessitatibus impedit consectetur maiores quam suscipit cum, voluptatem ab numquam blanditiis, officia eveniet nostrum totam assumenda non!',
//     },
//     {
//         name: 'Hulk',
//         imgUrl: 'https://picsum.photos/id/3/200/300',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolor deleniti iure aperiam necessitatibus impedit consectetur maiores quam suscipit cum, voluptatem ab numquam blanditiis, officia eveniet nostrum totam assumenda non!',
//     },
//     {
//         name: 'Black Widow',
//         imgUrl: 'https://picsum.photos/id/4/200/300',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolor deleniti iure aperiam necessitatibus impedit consectetur maiores quam suscipit cum, voluptatem ab numquam blanditiis, officia eveniet nostrum totam assumenda non!',
//     },
//     {
//         name: 'Hawkeye',
//         imgUrl: 'https://picsum.photos/id/5/200/300',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolor deleniti iure aperiam necessitatibus impedit consectetur maiores quam suscipit cum, voluptatem ab numquam blanditiis, officia eveniet nostrum totam assumenda non!',
//     },
//     {
//         name: 'Thor',
//         imgUrl: 'https://picsum.photos/id/6/200/300',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolor deleniti iure aperiam necessitatibus impedit consectetur maiores quam suscipit cum, voluptatem ab numquam blanditiis, officia eveniet nostrum totam assumenda non!',
//     },
// ]

const CharacterList = () => {
    const [{ data, fetching, error }, dispatch] = React.useReducer(
        dataReducer,
        initialState
    )

    const fetchCharacterList = async () => {
        dispatch({ type: DATA_REQUEST_INITIATED })
        try {
            const result = await fetchCharacters()
            dispatch({
                type: DATA_REQUEST_SUCCESS,
                payload: {
                    data: result,
                },
            })
        } catch (error) {
            console.error(error)
            dispatch({
                type: DATA_REQUEST_FAILURE,
            })
        }
    }

    React.useEffect(() => fetchCharacterList(), [])

    if(fetching === FETCH_STATES.PENDING)
        return <h3>Loading....</h3>
    
    if(fetching === FETCH_STATES.REJECTED){
        return <h3>{error}</h3>
    }

    return (
        <main className={classes.characterList}>
            {data &&
                data.length !== 0 &&
                data?.map(hero => <CharacterCard key={hero.id} {...hero} />)}
        </main>
    )
}

export default CharacterList
