
const Header = ({lists}) => {
  return (
    <div className="row py-5">
        <div ClasssName="col-md-8 offset-md-2">
            <h1 className = "text-center">Lister</h1>
            <p className="text-center">Number of shopping list <strong>{lists.length}</strong></p> 
            

        </div>
    </div>
    
  )
}

export default Header