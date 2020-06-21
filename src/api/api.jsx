import React, { useState, useEffect } from 'react'
import BigCart from '../UIkit/bigCart/bigCart'

//{receiveData}
const ApiRequest = ({onData}) => {

    //const [data, onData] = useState('')

    const getRequest = async () => {
        const point = '/jokes/random'
        const url = ` https://api.chucknorris.io${point}`
        const response = await fetch(url)
        const ansver = await response.json()
        onData(ansver)
    }

    useEffect(() => { getRequest() }, [])
    //console.log('data useEffect', data)

    // const { id, value, updated_at, categories } = data;

    // return (<div>
    //     <BigCart id={id} value={value} updated_at={updated_at} categories={categories} />
    // </div>)
}

export default ApiRequest