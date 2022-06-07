import React from 'react'
import Website from '../images/website.jpg'



function WebsiteDesign() {
    return (
        <div>
            <section className="py-4 mb-4 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Website Design</h3>
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
                            <img src={Website} className="img-fluid mb-5" alt="" srcset="" />
                            <p>
                                There are many factors that designers should consider when designing a website, especially basic psychological factors that make people believe that the company is credible. Companies have to sell themselves to earn the trust of potential customers or visitors, so a good website design and user experience will persuade people to have an association.
                            </p>
                            <p>
                                Content: Good quality content plays a vital role in making a website likeable from visitors’ point of view. Users will always be in a hurry while looking for information, so content that helps them with the precise information tends to generate more leads. More words or content on a website will only irritate users who may end up leaving the site and never return.
                            </p>

                            <p>
                                Using WhiteSpace Effectively: The appearance of a website also matters a lot because users love when a website is neatly designed and well organised. Designers should not stuff the content and other design elements in a website in the name of a trend because it will spoil the look and feel of a website. So incorporating more whitespace in web design gives a pleasing appeal to visitors, creating a memorable experience.
                            </p>
                            <p>
                                Importance of Choosing the Right Colour: Designers should understand the psychology of colours to use them effectively while designing a website. Different colours evoke different emotions in people, and also, the perception of people changes based on their locality. Cooler or light colours always generate an inviting, relaxed and professional-feeling in visitors’ minds.
                            </p>
                            <p>
                                Typography: Choosing the right font will help brands achieve a great outreach, so designers must carefully choose the font styles based on the company’s field of business. Website Designers should have a thorough knowledge of typefaces such as Serif, which is commonly used for companies that deal with finance, education and top-class clients, while Sans Serif purely used for companies that are related to designing, event management, etc.
                            </p>
                            <p>source: https://www.amazines.com/Website_Design/article_detail.cfm/6263573?articleid=6263573</p>
                        </div>
                        <div className='col-md-2'></div>


                    </div>
                </div>

            </section>

        </div>
    );
}

export default WebsiteDesign


















/*
*/ 