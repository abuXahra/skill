import React from "react";
import PageTitle from "../jsonfiles/pageTitle.json"
import Button from "../inc/Button";

function Contact() {
    return (
        <div>
            <section className="py-4 mb-4 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>{PageTitle[0].contactPage}</h3>
                        </div>
                        <div className="col-sm-8 my-auto">
                            <div className="float-end"><h6>{PageTitle[0].homePage} /&#160;&#160;&#160;&#160;  {PageTitle[0].contactPage}</h6></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 pl-5">
                            <h2>Address Info</h2>
                            <div className="underline my-3"></div>
                            <div>Plot 107, Jeguin Estate, Mabushi, Abuja, Nigeria</div>
                            <div>+2348135701458</div>
                            <div>+2349055001663</div>
                            <div>skill@gmail.com</div>
                        </div>
                        <div className="col-sm-6 my-auto">
                            <form
                                name="contact"
                                //netlify-honeypot="bot-field" 
                                data-netlify="true"
                                onSubmit="submit">

                                <div class="mb-3">
                                    {/* <label for="userName" class="form-label">Email address</label> */}
                                    <input type="name" class="form-control" id="full-name" name="full-name" required placeholder="Full Nname" />
                                </div>
                                <div class="mb-3">
                                    {/* <label for="userEmail" class="form-label">Email address</label> */}
                                    <input type="email" class="form-control" id="email" name="email" required placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    {/* <label for="userEmail" class="form-label">Email address</label> */}
                                    <input type="text" class="form-control" name="number" id="number" required placeholder="number" />
                                </div>

                                <div class="mb-3">
                                    {/* <label for="userMessage" class="form-label">Example textarea</label> */}
                                    <textarea class="form-control" name="message" id="message" rows="3" required placeholder="message"></textarea>
                                </div>
                                <button type="submiy">Send</button>
                                {/* <Button buttonText={"Submit"} buttonUrl={""} /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">


                            <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
                                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                                    style="border:0" allowfullscreen></iframe>
                            </div>



                        </div>
                    </div>

                </div>
            </section> */}
        </div>
    )
}

export default Contact
