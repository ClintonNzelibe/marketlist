import { useEffect, useState } from 'react'
import Nav from './recipe_component/Nav'
import Banner from './recipe_component/Banner'
import List from './recipe_component/List'
import Footer from './recipe_component/Footer'
import Loader from './recipe_component/Loader'


const Recipe = () => {
    // 3 state to track whats going on
    const[categories, setCategories] =useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState("")
    // hook:useEffect | useStae

    //a state to store what to fiter with
    const [f, setF] = useState('');


    // filter category
    const filterCategory = () =>{
        const filtered = categories.filter(function(cat){
            return cat.strCategory.toLowerCase().includes(f.toLowerCase())
        })
        console.log(filtered)
        return filtered
    }
    const requestmaker = ()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(fakeresp){
            return fakeresp.json()
         }).then(function(data){
             setCategories(data.categories)
             setLoading(false)
         }).catch(function(err){
             setCategories([])
             setLoading(false)
            
             console.log("Error dey o" + err)
         })
    }
    useEffect(function(){
        requestmaker();

    }, [])

    if(loading===true){
        return(
            <Loader/>
        )
    }

  return (
    <div>
       <Nav/>
       <Banner setF={setF}/> 
       <List categories={filterCategory()} />
       <Footer/>
       
    
    </div>
  )
}

export default Recipe