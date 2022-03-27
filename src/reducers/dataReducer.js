import { DATA_REQUEST_FAILURE, DATA_REQUEST_INITIATED, DATA_REQUEST_SUCCESS } from "./actionTypes"

export const FETCH_STATES = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected'
}


export const initialState = {
    data: null,
    fetching: FETCH_STATES.IDLE,
    error: null
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_REQUEST_INITIATED: {
            return {
                ...state,
                data: null,
                fetching: FETCH_STATES.PENDING
            }
        }

        case DATA_REQUEST_SUCCESS: {
            return {
                ...state,
                data: action.payload.data,
                fetching: FETCH_STATES.RESOLVED
            }
        }

        case DATA_REQUEST_FAILURE: {
            return {
                ...state,
                data: null,
                fetching: FETCH_STATES.REJECTED,
                error: 'Error fetching data'
            }
        }

        default:
            throw new Error('Unhandled action type')
    }
}