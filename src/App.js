import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import actionData from './Redux/actions/actionData'

import LayoutComponent from './UIkit/layout/layout.component'

const App = ({ endpoint, actionData}) => {

  useEffect(
    ()=>{
        getRequest()
    }
  )


  const getRequest = async () => {

        const point = `/jokes/${endpoint}`
        const url = `https://api.chucknorris.io${point}`

        try {
          const response = await fetch(url)
          let ansver = await response.json()
          if (ansver.result) {
              ansver.result.forEach(element => {
              actionData(element)
            });
          } else if(ansver.status !== 404) actionData(ansver)
      } catch (error) {
        console.log('ERROR REQUEST!!!')
        throw error;
      }
    }


  return (
    <div>
      <LayoutComponent />
    </div >
  );
}



const mapStateToProps = (store) => {
  return {
    endpoint: store.reducerRequest.endpoint,
  }
}

const mapDispatchToProps = {
  actionData: actionData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

