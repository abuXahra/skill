import React from 'react'
import GraphicsPix from '../images/graphics.jpg'


function Graphics() {
    return (
        <div>
            <section className="py-4 mb-4 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Graphics Design</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* important paragraph */}
            <section className='py-4 my-5'>
                <div className="container">
                    <div className="row">
                        <div className='col-md-2'></div>
                        <div className="col-md-8">
                            <img src={GraphicsPix} className="img-fluid mb-5" alt="" srcset="" />

                            <p>
                                Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Design is based on the principle of "form follows a specific function".[2]
                            </p>
                            <p>
                                Therefore, graphic design is an interdisciplinary branch of design[1] whose foundations and objectives revolve around the definition of problems and the determination of objectives for decision-making, through creativity, innovation and lateral thinking along with manual or digital tools, transforming them for proper interpretation. This activity helps in the optimization of graphic communications (see also communication design). It is also known as visual communication design, visual design or editorial design.
                            </p>
                            The role of the graphic designer in the communication process is that of encoder or interpreter of the message. They work on the interpretation, ordering, and presentation of visual messages. The design work can be based on a customer’s demand, a demand that ends up being established linguistically, either orally or in writing, that is, that graphic design transforms a linguistic message into a graphic manifestation.[3]
                            <p>
                                Graphic design has, as a field of application, different areas of knowledge focused on any visual communication system. For example, it can be applied in advertising strategies, or it can also be applied in the aviation world[4] or space exploration.[5][6] In this sense, in some countries graphic design is related as only associated with the production of sketches and drawings, this is incorrect, since visual communication is a small part of a huge range of types and classes where it can be applied.
                            </p>
                            <p>
                                With origins in antiquity and the Middle Ages,[7] graphic design emerged as a distinct profession in the West in the 19th century and its evolution allowed its consolidation in the 20th century. Given the rapid and massive growth in information exchange today, the demand for experienced designers is greater than ever, particularly because of the development of new technologies and the need to pay attention to human factors beyond the competence of the engineers who develop them.</p>
                            <p>
                                want to read more? <br /> visit the source: https://en.wikipedia.org/wiki/Graphic_design
                            </p>
                        </div>
                        <div className='col-md-2'></div>


                    </div>
                </div>

            </section >

        </div >
    );
}

export default Graphics


















/*
*/ 