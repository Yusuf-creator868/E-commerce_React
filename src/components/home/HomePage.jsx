import React, { useEffect, useState } from 'react'
import Header from "./Header"
import CardContainer from "./CardContainer"
import api from '../../api'

export default function HomePage(){

  const [products, setproducts] = useState([])

  useEffect(() => {
    api.get("/products/")
    .then(res => {
      console.log(res.data)
      setproducts(res.data)
    })

    .catch(err => {
      console.log(err.message)
    })
    
  }, [])


return (
    <div>
      <Header/>
      <CardContainer products = {products}/>
    </div>
  )
}

