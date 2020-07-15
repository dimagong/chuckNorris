
import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'

import { REQUEST, GET_DATA } from '../constants/index'


const getRequest = async (endpoint) => {

    const point = `/jokes/${endpoint}`
    const url = `https://api.chucknorris.io${point}`

    try {
        const response = await fetch(url)
        let ansver = await response.json()
        return ansver
    } catch (error) {
        console.log('ERROR REQUEST!!!')
        throw error;
    }
}

function* sendAction(item) {
    if (item.result) {

        for (let i = 0; i < item.result.length; i++) {
            yield put({
                type: GET_DATA,
                data: item.result[i]
            })
        }

    } else if (item.status !== 404) {
        yield put({
            type: GET_DATA,
            data: item
        })
    }
}



function* middlewareRequest() {
    while (true) {
        const action = yield take(REQUEST)
        let endpoint = action.endpoint[0]
        const ansver = yield call(getRequest, endpoint)
        yield sendAction(ansver)

    }

}


const gen = middlewareRequest()

console.log(gen.next())
console.log(gen.next({ endpoint: ['random'] }))
console.log(gen.next())
console.log(gen.next())


export default middlewareRequest