
import React from "react";
import Slider from "../inc/Slider";
import Button from "../inc/Button";
import Vmc from "./inc/Vmc";
import CardComponent from "../inc/CardComponent";
import Services1 from "../images/skillack.png";
import SkillDevopment from "../images/skilldevelp.png"
import Website from '../images/website.jpg'
import Digital from '../images/digital.jpg'
import Graphics from '../images/graphics.jpg'
import Reachout from '../images/reachout.png'


const about = "/about";
const readMore = "Read more";


function Home() {
    return (
        <div>
            <Slider />

            {/* About Section */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <h3 className="main-heading danger">Skill Acquisition</h3>
                            <div className="underline my-4"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>
                                        Over time acquiring a relevant skill is one of the most
                                        difficult things people ever face because the right skill is
                                        what differentiate the successful people from
                                        unsuccessful ones. And also people do have desire for
                                        skill acquisition but doesn’t know the right source to
                                        acquire the relevant skill that will benefit them on the
                                        future but with this guide we have made a thorough
                                        research on where and how to get courses that will
                                        equipped people for future purposes.
                                    </p>
                                    <Button buttonUrl={about} buttonText={readMore} /></div>
                                <div className="col-md-6">
                                    <img src={Services1} className="img-fluid" alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision, Mission and Value Section */}
            <Vmc />


            {/* Skill Development */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div className="row">
                                <div className="col-md-6">

                                    <img src={SkillDevopment} className="img-fluid" alt="" srcset="" />

                                </div>
                                <div className="col-md-6 pt-5">
                                    <h3 className="main-heading danger">What is Skill Development?</h3>
                                    <div className="underline my-3"></div>
                                    <p>Skill development can be defined as the improvement of
                                        one’s proficiency, ability to acquire a skill, enhancing or
                                        level up their skills and adopting a strategy to get a job
                                        fulfilled at the right time with a high rate of successful
                                        output.
                                    </p>
                                    <p>
                                        Skill development is a peak term that drivessectorsthese
                                        days and each association is aimed at hiring a talented
                                        representatives or train them to get great skills preceding
                                        job achievements. The key demanding of market in the
                                        present day are skill and specialization. Acquiring the skill
                                        before seeking out for a job gives someone an edge over
                                        the other because most establishments value people
                                        with skill rather than venturing their time in training
                                        them.
                                    </p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* Our Services */}
            <section className="section bg-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 my-5">
                            <h3 className="main-heading danger text-center mb-4">Digital Skills</h3>
                            <div className="underline mb-4 mx-auto"></div>
                            <div className="my-5"></div>
                            <div className='row'>
                                {/* setvice 1  */}
                                <CardComponent
                                    cardImg={Website}
                                    cardTitle={"Website Design"}
                                    cartBody={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae animi blanditiis delectus! Quidem impedit"}
                                    buttonText={"Read more"}
                                    buttonUr={"/website-design"}
                                />


                                {/* service 2 */}
                                <CardComponent
                                    cardImg={Graphics}
                                    cardTitle={"Graphics Design"}
                                    cartBody={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae animi blanditiis delectus! Quidem impedit"}
                                    buttonText={"Read more"}
                                    buttonUr={"/graphics-design"}
                                />

                                {/* service 3 */}
                                <CardComponent
                                    cardImg={Digital}
                                    cardTitle={"Digital Marketing"}
                                    cartBody={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae animi blanditiis delectus! Quidem impedit"}
                                    buttonText={"Read more"}
                                    buttonUr={"/digital-marketing"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* REACH OUT TO US */}
            <section className="section bg-c-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">

                            <div className="row">
                                <div className="col-md-6">
                                    <img src={Reachout} className="img-fluid" alt="" srcset="" />
                                </div>
                                <div className="col-md-4">

                                    <div className="my-md-5"></div>
                                    <h3 className="main-heading danger">Reach out to Us</h3>
                                    <div className="underline my-4"></div>
                                    <p>
                                        For your website design projects please reach out to use because we offer best website design services with affordable prices.
                                    </p>
                                    <a href="https://wa.link/7dji52" className="btn btn-success shadow">Whastapp </a>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
