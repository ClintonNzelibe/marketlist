const Header = (props) => {

    return (
        <div className="row">
             <div className="col">
                {/* inline styling */}
              <h1 className="text-center" style={{color:"tomato", backgroundColor:"greenYellow", minHeight:"20vh"}}> Header</h1>
              <p className="text-center">{props.amt}</p>
              <p className="text-center">Number of cart element is {props.dem}</p>
              </div>  
        </div>
    
    )
    
    }
    export default Header;