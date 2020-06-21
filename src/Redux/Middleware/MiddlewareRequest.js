
// const getRequest = async () => {

//     const point = `/jokes/${endpoint}`
//     const url = `https://api.chucknorris.io${point}`

//     try {
//       const response = await fetch(url)
//       let ansver = await response.json()
//       if (ansver.result) {
//           ansver.result.forEach(element => {
//           actionData(element)
//         });
//       } else if(ansver.status !== 404) actionData(ansver)
//   } catch (error) {
//     console.log('ERROR REQUEST!!!')
//     throw error;
//   }
// }

function* middlewareRequest(){
    console.log('middlewareRequest')
}

export default middlewareRequest