import React from "react";
import SkillAcq from "../images/skillack.png";
import SkillAcq2 from "../images/3.jpg";
import PageTitle from "../jsonfiles/pageTitle.json";
import Vmc from "./inc/Vmc";

function About() {

    return (
        <div>
            <section className="py-4 mb-4 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>About</h3>
                        </div>
                        <div className="col-sm-8 my-auto">
                            <div className="float-end"><h6>{PageTitle[0].homePage} /&#160;&#160;&#160;&#160;  {PageTitle[0].aboutPage}</h6></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="introduct" className="py-4 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="mb-4">Skill</h1>
                            <h4>Introduction</h4>
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

                        </div>
                        <div className="col-sm-6 my-auto">
                            <img src={SkillAcq} className="img-fluid" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">

                            <img src={SkillAcq2} className="img-fluid w-60" alt="" srcset="" />


                        </div>
                        <div className="col-sm-6 my-auto">
                            <p>
                                Acquiring a skill gives one the ability to fulfill a purpose
                                of life because people with relevant skills stand out
                                amidst the crowd and they stand as light in the society
                                because they made positive impact on the society,
                                people with skills are always needed, when a relevant
                                skill is not acquired several opportunities will be dearly
                                missed and one will live to regret the inability to acquire
                                a skill.
                            </p>
                            <p>
                                This guide will certainly shape people in the right
                                direction most especially if they are a carrier driven,
                                skillful people provide so much benefits and they stand
                                to make impact by adding value to the society,
                                organization and the nation at large because skillful
                                people stand a high chance of providing job
                                opportunities with their creativity.
                            </p>
                            <p>
                                All that is required is to make a decision on what skill to
                                acquire and once that is done then this guide will serve
                                as a thorough guide on how to lay a hand on that skill
                                that one is willing to acquire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision, Mission and Value Section */}
            <Vmc />


        </div>



    )
}

export default About
