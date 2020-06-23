
import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'

import {REQUEST, GET_DATA} from '../constants/index'


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

        for(let i = 0; i < item.result.length; i++){
            yield put ({
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



function* middlewareRequest(){
    while (true) {
        const action = yield take(REQUEST)
        //console.log(action.endpoint)
        let endpoint = action.endpoint[0]
        //console.log(endpoint)
        const ansver = yield call(getRequest, endpoint)
        yield sendAction(ansver)
        
    }
    
}


    const gen =  middlewareRequest()

    console.log(gen.next())
    console.log(gen.next({endpoint: ['random'] }))
    console.log(gen.next())
    console.log(gen.next())
  

export default middlewareRequest


/////////////////////////////////////////////////////////////////////////////////////


// const mapStateToProps = (store) => {
//     return {
//       endpoint: store.reducerRequest.endpoint,
//     }
//   }
  
//   const mapDispatchToProps = {
//     actionData: actionData
//   }

//export default connect(mapStateToProps, mapDispatchToProps)(middlewareRequest)


// const getRequest = async (endpoint) => {

//     const point = `/jokes/${endpoint}`
//     const url = `https://api.chucknorris.io${point}`

//     try {
//       const response = await fetch(url)
//       let ansver = await response.json()
//       if (ansver.result) {
//           ansver.result.forEach(element => {
//           put({
//             type: GET_DATA,
//             data: element
//           })
//         });
//       } else if(ansver.status !== 404){
//            //actionData(ansver)
//            put({
//             type: GET_DATA,
//             data: ansver
//           })
//         }
//   } catch (error) {
//     console.log('ERROR REQUEST!!!')
//     throw error;
//   }
// }



//     var assert = require('assert') 
    
//     assert.deepEqual(
//     gen.next().value,
//     take(REQUEST),
//      put ({
//         type: GET_DATA,
//         data: {id: 1, value: 'kgggglgk'}
//     })
//   );


  //console.log(put({ type: REQUEST }));
