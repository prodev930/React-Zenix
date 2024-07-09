import { Link } from "react-router-dom"
import AboutUsBanner from "../components/AboutUsBanner"
import { IMAGE } from "../constent/theme"



const contectForm = [
    { svg: IMAGE.svg1, text: 'Chat to us', paragraph: 'Our friendly team is here to help.', title: 'Zenix@info.com' },
    { svg: IMAGE.svg2, text: 'Office', paragraph: 'Come say hello at our offce HQ.', title: 'Zenix@info.com' },
    { svg: IMAGE.svg3, text: 'Office', paragraph: 'Mon-Fri from 9am to 7pm.', title: '+(91) 123 456 7890' },
]
const ContectUs = () => {
    return (
        <div className="page-content">
            <AboutUsBanner img={IMAGE.about_banner} title={'Contact Us'} />
            <section className="map-wrapper1 overflow-hidden bg-light content-inner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 m-b30">
                            <div className="info-box style-1 ">
                                <div className="info">
                                    <h2 className="text-light wow fadeInUp">Get in touch</h2>
                                    <p className="wow fadeInUp">Fill up the form and our team will get<br /> back to you within 24 hours.</p>
                                </div>

                                <div className="widget widget_about">
                                    <div className="widget widget_getintuch">
                                        <ul>
                                            {contectForm.map((item, index) => (
                                                <li className="wow fadeInUp" key={index}>
                                                    <div className="d-flex align-items-center">
                                                        {item.svg}
                                                        <span className="text-light">{item.text}</span>
                                                    </div>
                                                    <p className="m-a0 p-t10">{item.paragraph}</p>
                                                    <h6 className="text-light">{item.title}</h6>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className=" dz-social style-1 wow fadeInUp" data-wow-delay="0.2s">
                                    <h6 className="text-light" >Our Socials</h6>
                                    <ul className="social-icon">
                                        <li><Link className="social-btn" target="_blank" to="https://www.facebook.com/dexignzone/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                        <li><Link className="social-btn" target="_blank" to="https://www.instagram.com/dexignzone/"><i className="fa-brands fa-instagram"></i></Link></li>
                                        <li><Link className="social-btn" target="_blank" to="https://twitter.com/dexignzones"><i className="fa-brands fa-twitter"></i></Link></li>
                                        <li><Link className="social-btn" target="_blank" to="https://www.youtube.com/@dexignzone1723"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ContectForm />
                    </div>
                </div>
            </section>
        </div>
    )
}


export function ContectForm() {
    return (
        <>
            <div className="col-xl-7 col-lg-7 col-sm-12 m-b30">
                <div className="form-wrapper style-1">
                    <h2 className="title m-a0 wow fadeInUp" data-wow-delay="1.6s">Get In touch</h2>
                    <p className="font-text text-primary p-b10 wow fadeInUp" data-wow-delay="1.7s">We are here for you. How we can help?</p>
                    <div className="contact-area">
                        <form className="dz-form dzForm style-1 contact-bx" method="POST" action="assets/script/contact_smtp.php">
                            <div className="dzFormMsg"></div>
                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                            <div className="row ">
                                <div className="col-md-6">
                                    <div className="input-group wow fadeInUp" data-wow-delay="1.8s">
                                        <input name="dzFirstName" required type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group wow fadeInUp" data-wow-delay="1.9s">
                                        <input name="dzLastName" required type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group wow fadeInUp" data-wow-delay="2.0s">
                                        <input name="dzEmail" required type="text" className="form-control" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group wow fadeInUp" data-wow-delay="2.1s">
                                        <input name="dzPhoneNumber" required type="text" className="form-control" placeholder="Mobile No." />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group wow fadeInUp" data-wow-delay="2.2s">
                                        <textarea name="dzMessage" rows={5} required className="form-control" placeholder="Type Message..."></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-recaptcha wow fadeInUp" data-wow-delay="2.3s">
                                        <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                        <input className="form-control d-none" style={{ display: 'none' }} required data-error="Please complete the Captcha" />
                                    </div>
                                </div>
                                <div className="col-md-12 p-t20">
                                    <button name="submit" type="submit" value="Submit" className="btn btn-primary wow fadeInUp">Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ContectUs