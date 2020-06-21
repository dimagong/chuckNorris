import {GET_DATA} from '../constants'

const actionData = (item) => {
    return {
        type: GET_DATA,
        data: item
    }
}

export default actionData