import "./pagecontent.css"
import xyz from "../bangkok1.jpeg"
//Using external
const PageContent = ({students}) => {
    return (
        <div className='row content'>
            <div className='col'>
                <h1 className='text-center'>Page Content</h1>
                <div className="row">
                <div className="col-md-6">
                    <p>Image located inside src folder</p>
                    <img src={xyz} className="img-fluid"/>
                </div>
                    
                <div className="col-md-6">
                    <p>Image located inside public folder</p>
                    <img src="/bangkok1.jpeg" className="img-fluid" alt="good lifr"/>
                </div>
                </div>
                <div className="row">
                    {
                        students.map((student, index) =>{
                            return(
                                <div className="col-md-3 p-3 bg-primary">
                                    <p>{student}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default PageContent;