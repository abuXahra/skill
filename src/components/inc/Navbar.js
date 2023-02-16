import Button from './Button'
import React from 'react'
import { Link } from 'react-router-dom'
import PdfFile from '../pdf/Why-is-Skill-Acquisition-important-in-Nigeria.pdf'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">SKILL</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse float-end" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="/services">Services</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact" tabindex="-1" aria-disabled="true">Contact Us</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Downloads
                                </Link>
                                <ul class="dropdown-menu float-end" aria-labelledby="navbarDropdown">

                                    <a href={PdfFile} className="downloadable">Skill Guide</a>
                                    <li><hr class="dropdown-divider" /></li>
                                    <a href={"https://play.google.com/store/apps/details?id=com.islam.skill"} className="downloadable">Skill App</a>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
