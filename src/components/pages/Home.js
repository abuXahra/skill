
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
import { Link } from "react-router-dom";


const about = "/about";
const readMore = "Read more";


function Home() {



    const cardContnets = [
        {
            cardImg: Website,
            cardTitle: "Website Design",
            cartBody: "There are many factors that designers should consider when designing a website, especially basic psychological factors that make people believe that the company is credible. Companies have to sell themselves to earn the trust of potential customers or visitors, so a good website design and user experience will persuade people to have an association.",
            buttonText: "Read more",
            buttonUr: "/website-design"
        },
        {
            cardImg: Graphics,
            cardTitle: "Graphics Design",
            cartBody: "Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Design is based on the principle of \"form follows a specific function",
            buttonText: "Read more",
            buttonUr: "/graphics-design"
        },
        {

            cardImg: Digital,
            cardTitle: "Digital Marketing",
            cartBody: " Any marketing that uses electronic devices and can be used by marketing specialists to convey promotional messaging and measure its impact through your customer journey. In practice, digital marketing typically refers to marketing campaigns that appear on a computer, phone, tablet, or other device. It can take many forms, including online video, display ads, search engine marketing, paid social ads and social media posts. Digital marketing is often compared to “traditional marketing” such as magazine ads, billboards, and direct mail. Oddly, television is usually lumped in with traditional marketing",
            buttonText: "Read more",
            buttonUr: "/digital-marketing"
        }
    ]



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
                                {/* setvices components*/}
                                {
                                    cardContnets.map((cardContnet) => (
                                        <CardComponent
                                            cardImg={cardContnet.cardImg}
                                            cardTitle={cardContnet.cardTitle}
                                            cartBody={cardContnet.cartBody.substring(0, 195) + "..."}
                                            buttonText={cardContnet.buttonText}
                                            buttonUr={cardContnet.buttonUr}
                                        />
                                    ))
                                }
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
