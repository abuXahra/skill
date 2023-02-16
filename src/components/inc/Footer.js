import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className="section footer bg-dark text-c-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h6>Skill</h6>
                        <hr />
                        <p>
                            Over time acquiring a relevant skill is one of the most difficult things people ever face because the right skill is what differentiate the successful people from unsuccessful ones. And also people do have desire for skill acquisition but doesn’t
                            &#160;&#160;&#160;<Link to="/about" className='nav-c-link'> <em>more</em> </Link>
                        </p>

                    </div>
                    <div className="col-md-3">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/" className='nav-c-link'>Home</Link></div>
                        <div><Link className='nav-c-link' to="/about" >About</Link></div>
                        <div><Link to="/Services" className='nav-c-link'>Services</Link></div>
                        <div><Link to="/contact" className='nav-c-link'>Contact Us</Link></div>
                    </div>
                    <div className="col-md-3">
                        <h6>Contact Info</h6>
                        <hr />
                        <div>Plot 107, Jeguin Estate, Mabushi, Abuja, Nigeria</div>
                        <div>+2348135701458</div>
                        <div>+2349055001663</div>
                        <div>skill@gmail.com</div>
                    </div>
                    <div className="col-md-3">
                        <h6>Download</h6>
                        <hr />
                        <div>Download Skill App from PlayStore</div>
                        <div>Download Skill PDF file</div>
                    </div>
                </div>
            </div>
            <div className='text-center'>copyright &copy; 2022</div>
        </section>

    )
}

export default Footer