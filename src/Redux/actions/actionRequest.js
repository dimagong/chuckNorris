import {REQUEST} from '../constants'

export const actionRequest = (endpoint) => {
    return({
        type: REQUEST,
        endpoint: [endpoint]
    })
}