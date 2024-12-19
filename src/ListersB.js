import Additems from './lister_componentb/Additems'
import Header from './lister_componentb/Header'
import Content from './lister_componentb/Content'
import Footer from './lister_componentb/Footer'
import { useState } from 'react'

const ListersB = () => {

    
    return (
        <div className='container'>
            <h1>Lister B: context api</h1>
            <Header />
            <Additems />
            <Content/>
            
        </div>
    )
}

export default ListersB