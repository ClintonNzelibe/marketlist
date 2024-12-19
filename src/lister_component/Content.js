const Content = ({lists, deleteItem}) => {
    console.log(lists)
    return (
        <div className="row">
            <div className="col">
                <h2 className="text-center text-primary">Shopping List Item</h2>
            </div>
            <div className="row">
            <div className="col">
                <table className="table">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists.map(function(list, index){
                                return(
                                    <tr key={list.id}>
                            <td>{index + 1}</td>
                            <td>{list.name}</td>
                            <td>{list.price}</td>
                            <button className="btn btn-danger" onClick={function(){deleteItem(list.id)}}>Delete Product</button>
                        </tr>
                                )

                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        
    )
}
export default Content