import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"


const SvgList = [
    { svg: IMAGE.about_svg4 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg4 },

]
const Footer = () => {
    function FormButton(e: any) {
        e.preventDefault();
    }
    (function () {
        let privateObj = 45
        return {
            gatter: function () {
                console.log(privateObj);
            },
            setter: function () {

            }
        }
    })()
    return (
        <>
            <footer className="site-footer style-1 position-relative">
                <div className="footer-top overlay-black-dark" style={{ backgroundImage: `url(${IMAGE.image_banner1})` }}>
                    <div className="container">
                        <div className="footer-subscribe-wrapper">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="widget wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="footer-logo">
                                            <Link to="/" className="logo-light"><img src={IMAGE.logo_white} alt="" /></Link>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="widget  wow fadeInUp" data-wow-delay="0.6s">
                                        <h4 className="footer-title mb-3 ">Subscribe To Our Newsletter</h4>
                                        <form className="dzSubscribe ft-subscribe mb-4">
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="input-group mb-0">
                                                <input name="dzEmail" type="email" className="form-control" placeholder="Your Email Address" />
                                                <button name="submit" value="Submit" type="submit" className="btn btn-primary style-2 text-primary two"><i className="fa-regular fa-paper-plane"></i></button>
                                                <button onClick={FormButton} name="submit" type="submit" className="btn btn-primary style-2 text-primary">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row p-50">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="widget wow fadeInUp" data-wow-delay="0.8s">
                                    <h4 className="footer-title">Contact</h4>
                                    <div className="widget_getintuch">
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-location-dot"></i>
                                                1247/Plot No. 39, 15th Phase,<br />
                                                Colony, Kkatpally, Hyderabad
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone"></i>
                                                +91 987-654-3210<br />
                                                +91 123-456-7890
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-inbox"></i>
                                                info@example.com
                                                info@example.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="widget widget_links wow fadeInUp">
                                    <h4 className="footer-title">Our links</h4>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about-us">About Us </Link></li>
                                        <li><Link to="/#">Services</Link></li>
                                        <li><Link to="/#">Team</Link></li>
                                        <li><Link to="/blog-details">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="widget widget_links wow fadeInUp">
                                    <h4 className="footer-title">Our services</h4>
                                    <ul>
                                        <li><Link to="#">Strategy & Research</Link></li>
                                        <li><Link to="#">Web Development</Link></li>
                                        <li><Link to="#">Web Solution</Link></li>
                                        <li><Link to="#">Digital Marketing</Link></li>
                                        <li><Link to="#">App Design</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="widget widget_links wow fadeInUp">
                                    <h4 className="footer-title">Other links</h4>
                                    <ul>
                                        <li><Link to="#">FAQ</Link></li>
                                        <li><Link to="#">Portfolio</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Terms & Condition</Link></li>
                                        <li><Link to="#">Support</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-md-center text-md-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="footer-inner text-lg-start text-center ">
                                    <p className="copyright-text wow fadeInUp">Copyright 2023 by <Link className="text-primary" to="https://dexignzone.com/" target="_blank">DexignZone</Link>. All rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="footer-inner text-lg-end  text-center">
                                    <ul className="footer-link wow fadeInUp">
                                        <li><Link to="/about-us">About</Link></li>
                                        <li><Link to="#">Help Desk</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="dz-shape-2">
                    {SvgList.map((item, index) => (
                        <li key={index}>{item.svg}</li>
                    ))}
                </ul>
            </footer>
        </>
    )
}

export default Footer