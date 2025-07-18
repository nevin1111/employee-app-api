import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link class="navbar-brand active" aria-current="page" to="/">Employee-App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">View Employee</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Add">Add Employee</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Search">Search Employee</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Delete">Delete Employee</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar