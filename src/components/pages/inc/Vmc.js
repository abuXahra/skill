import React from 'react'
import TextComponent from '../../inc/TextComponent'

const Vmc = () => {
    const vmcText = [
        "Nigeria is a country where million number of students graduates yearly and when it comes to issue of employment, only 20% of them got employed and there is no assurance of job for the rest of the 80% and that sequence continue",
        "Skill is a powerful instrument in the sense that, it equipped or empower people and improves their social acceptance. Skill is a something that is complement by a good economic growth and improve job employment. Nigeria is moving towardsthe verge of being a developed country with the needs for a greater number of skillful and intelligent people",
        "Unskilled employ can diminish the success of an establishment because they don’t have the relevant skill required to drive the workforce of the organization and also if an employee of an organization is not trained to level up their skill to match up to the role they are being hired for then they will have no contribution to the"
    ]

    return (
        <div>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 my-5">
                            <h3 className="main-heading danger text-center mb-4">Important &#160;&#160;&#160;| &#160;&#160;&#160; Instruement &#160;&#160;&#160;| &#160;&#160;&#160; Workplace</h3>
                            <div className="underline mb-4 mx-auto"></div>
                            <div className='row'>
                                <TextComponent
                                    titleofText={"Important of Skill Acquisition"}
                                    paragraphText={vmcText[0].substring(0, 200)}
                                    buttonText={"Read more"}
                                    buttonUr={"/important-of-skill-acquisition"}
                                />
                                <TextComponent
                                    titleofText={"Skill is a powerful instrument"}
                                    paragraphText={vmcText[1].substring(0, 200)}
                                    buttonText={"Read more"}
                                    buttonUr={"/skill-is-a-powerful-instrument"}
                                />
                                <TextComponent
                                    titleofText={"Lack of Skill in a Workplace"}
                                    paragraphText={vmcText[2].substring(0, 200)}
                                    buttonText={"Read more"}
                                    buttonUr={"/lack-of-skill-in-a-workplace"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Vmc
