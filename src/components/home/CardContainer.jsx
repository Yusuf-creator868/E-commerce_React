import React from 'react'
import HomeCard from "./HomeCard"


export default function CardContainer({products}){


  return (
    <section className='py-5' id='shop'>
        <h4 style={{textAlign: "center"}}>Our products</h4>
        <div className='container px-4 px-lg-5 mt-5'>
            <div className='row justify-content-center'>
            {
            products.map(prod => {
        return (
          <HomeCard
            key={prod.id}
            product ={prod}
          />
        )
      })
    }
            </div>
        </div>
    </section>
  )
}


