import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Addevent = () => {
    var [admission,setAdmission]=useState("")
    var [rollno,setRollno]=useState("")
    var [name,setName]=useState("")
    var [cls,setCls]=useState("")
    var [parent,setParent]=useState("")
    var [mobile,setMobile]=useState("")
    var [address,setAddress]=useState("")

    const subData =() => {
        const data ={"Admission no":admission, "Roll no":rollno,"Name":name, "Class":cls,"Parent Name":parent, "Mobile":mobile, "Address":address}
        console.log(data)
    }

    
  return (
    <div>
        
        <div className="container">
        <div className="row ">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Admission no</label>
                        <input onChange={(a) => { setAdmission(a.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Rollno</label>
                        <input onChange={(a) => { setRollno(a.target.value)}}  type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Name</label>
                        <input onChange={(a) => { setName(a.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Class</label>
                        <input onChange={(a) => { setCls(a.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Parent Name </label>
                        <input onChange={(a) => { setParent(a.target.value)}} type="text" className="form-control"/>
                    </div>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Mobile No</label>
                        <input onChange={(a) => { setMobile(a.target.value)}}  type="text" className="form-control"/>
                    </div>
                    <div className="ccol col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <textarea onChange={(a) => { setAddress(a.target.value)}}  className="form-control" id="" cols="15" rows="10">Address</textarea>

                    </div>
                    <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button onClick={subData} className="btn btn-dark">Register</button>
                    </div> </center>
        
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Addevent