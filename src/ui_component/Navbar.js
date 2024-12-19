const Navbar = (props) => {
    //const Navbar = ({bad, sem}) => {
        //props are immutable, bad=1000;
     //internal styling
     const styleH1 = {
        color: 'green',
        backgroundColor:"greenYellow", 
        paddingTop:"20px",
        minHeight:"10vh"
    }
    return (
       
        <div className="row">
             <div className="col">
              <h1 className="text-center" style={styleH1}> Navbar</h1>
              <h1>Dash me: {props.bad}</h1>
              {/* <h1>Dash me: {bad}</h1> */}
              </div>  
        </div>
    
    )
    
    }
    export default Navbar;