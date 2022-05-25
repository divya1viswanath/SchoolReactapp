import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>School Management </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to='/'>Add Student</Link>
                    <Link className="nav-link active" to='/facu'>Add Faculties</Link>
                    <Link className="nav-link active" to='/search' >Search Student</Link>
                    <Link className="nav-link active" to='/viewstud' >View All Student</Link>
                    <Link className="nav-link active" to='/viewfacu' >View All Faculties</Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header