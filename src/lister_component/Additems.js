import { useState } from "react";

const Additems = ({addNewProduct}) => {
    const [name, setName] = useState('');
    const[price, setPrice] = useState('');
    function handleSubmit(e){
        e.preventDefault();

        if(name === ''|| price === ''){
        alert('All fields required')
        }else{
            const id = Math.random(1, 10000000)+Date.now()
            

            const item = {
                name:name,
                price: price,
                id: id
            }
            addNewProduct(item)
        }

    }

    return (
        <div className="row py-5">
            <div className="col-md-8 offset-md-2">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter product name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                    <input type="Number" placeholder="product price" value={price} onChange={function(e){setPrice(e.target.value)}}></input>
                    <button className="btn btn-warning">Add item to list</button>

                </form>
            </div>
        </div>
    )
}
export default Additems