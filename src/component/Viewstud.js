import React from 'react'

const Viewstud = () => {
    var viewstud=[
        {
            "admission":"101",
            "rollno":"1",
            "name":Divya,
            "cls":mca,
            "parent":viswanath,
            "mobile":"8087898530",
            "address":abcd 

        },
        {   
            "admission":"102",
            "rollno":"2",
        "name":Devi,
        "cls":mca,
        "parent":abraham,
        "mobile":"8087855530",
        "address":ubbkjk 
        },
        {
            "admission":"103",
            "rollno":"3",
            "name":Sherlin,
            "cls":M.com,
            "parent":Joshep,
            "mobile":"75617898530",
            "address":Josphinehouse 
        },
        {
            "admission":"104",
            "rollno":"4",
            "name":Soumya,
            "cls":Msc,
            "parent":Rajan,
            "mobile":"6032202493",
            "address":Rajan house 
        }
    ]
  return (
    <div>
        
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <table class="table table-primary table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Admission no</th>
                                    <th scope="col">Rollno</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Class</th>
                                    <th scope="col">Parent Name</th>
                                    <th scope="col">Mobile No</th>
                                    <th scope="col">Address</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {viewstud.map((value,key)=>{
                                    return <tr>
                                    <td>{value.admission}</td>
                                    <td>{value.rollno}</td>
                                    <td>{value.name}</td>
                                    <td>{value.cls}</td>
                                    <td>{value.parent}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.address}</td>

                                    </tr>
                                    })}   
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Viewstud