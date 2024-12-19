import { createContext,useState,useEffect } from 'react'; //useState- useEffect-CreateContext

const ListContent = createContext();

// a provider

const ListProvider = ({children}) =>{
    // set up the state
    // create a function check inside local storage and see if there is any market list in the local
    //storage,if its not there it will retun empty
    function fetchListFromLocalStorage(){
        const initialList =localStorage.getItem('markrtList');
        const realList = initialList?JSON.parse(initialList) : [];
        return realList
    }

    const [list, setList] = useState(fetchListFromLocalStorage());
    //set up all functions that the component need
    //useEffect will help us to update locar storage anew list is created or deleted

    useEffect(function(){
        // whenever the list changes we will update the localstoarege
        localStorage.setItem("markrtlist",JSON.stringify(list))

    }, [list])
    function addNewProduct(product){
        setList([product, ...list]);
    }
    function deleteItem(id){
        const filteredProduct = list.filter(function(li){
            return li.id !== id;
        })
        setList(filteredProduct)
    }
    // set up all function that the component need
    return(
        <ListContent.Provider value = {{list, addNewProduct,deleteItem}}>
            {children}
        </ListContent.Provider>
    )
}
export{ListContent, ListProvider}