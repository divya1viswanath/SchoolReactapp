import React, { useState } from 'react'

const Searchstudent = () => {
    var [admission,setAdmission]=useState("")

    const subData =() => {
        const data={"Admission no":admission}
        console.log(data)
    }
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="row g-3">                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">Admission no:</label>
                        <input onChange={(a) => { setAdmission(a.target.value)}} type="text" className="form-control"/>
                    </div>                    
                    <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button onClick={subData} className="btn btn-dark">SEARCH</button>
                    </div></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchstudent