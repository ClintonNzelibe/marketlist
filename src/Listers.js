import Additems from './lister_component/Additems'
import Header from './lister_component/Header'
import Content from './lister_component/Content'
// import Footer from './lister_component/Footer'
import { useState } from 'react'

const Listers = () => {

    const initiallist = [
        {name:'Greek choko', price: '25000', id:100},
        {name:'Iphone 16', price: '25000000', id:200},
        {name:'Mac Laptop', price: '50000000', id:300},
        {name:'Plate Of Peppersoup', price: '10000', id:100}

    ]
    const [list, setList] = useState(initiallist);
    function addNewProduct(product){
        setList([product, ...list, product]);
    }

    function deleteItem(id){
        const filteredProduct = list.filter(function(li){
            return li.id !== id;
        })
        setList(filteredProduct)
    }
    return (
        <div className='container'>
            <Header lists={list} />
            <Additems addNewProduct={addNewProduct} />
            <Content lists={list} deleteItem={deleteItem} />
            
        </div>
    )
}

export default Listers