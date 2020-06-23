import React from 'react';
import LayoutComponent from './UIkit/layout/layout.component'

const App = () => {

  return (
    <div>
      <LayoutComponent />
    </div >
  );
}

export default App










////////////////////////////

//import { connect } from 'react-redux'

//import actionData from './Redux/actions/actionData'
// useEffect(
  //   ()=>{
  //       getRequest()
  //   }
  // )


  //const getRequest = async () => {
    //console.log(' getRequest - APP')
      //   const point = `/jokes/${endpoint}`
      //   const url = `https://api.chucknorris.io${point}`

      //   try {
      //     const response = await fetch(url)
      //     let ansver = await response.json()
      //     if (ansver.result) {
      //         ansver.result.forEach(element => {
      //         actionData(element)
      //       });
      //     } else if(ansver.status !== 404) actionData(ansver)
      // } catch (error) {
      //   console.log('ERROR REQUEST!!!')
      //   throw error;
      // }
    //}

    // const mapStateToProps = (store) => {
//   return {
//     endpoint: store.reducerRequest.endpoint,
//   }
// }

// const mapDispatchToProps = {
//   actionData: actionData
// }

//export default connect(mapStateToProps, mapDispatchToProps)(App);

