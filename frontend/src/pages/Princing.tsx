import { Link } from "react-router-dom"
import AboutUsBanner from "../components/AboutUsBanner"
import CryptoDetail from "../components/CryptoDetail"
import { IMAGE } from "../constent/theme"
import SvgBoxes from "../element/SvgBoxes"



const princingCard = [
    { img: IMAGE.princing_pic1, text: 'Lite', price: '$72', month: '/Month' },
    { img: IMAGE.princing_pic2, text: 'Pro', price: '$73', month: '/Month' },
    { img: IMAGE.princing_pic3, text: 'Ultimate', price: '$62', month: '/Month' },
]
const Princing = () => {
    return (
        <>
            <div className="page-content">
                <AboutUsBanner img={IMAGE.banner3} title={'Pricing'} />
                <section className="content-inner-2 bg-light position-relative">
                    <div className="container">
                        <div className="row justify-content-center">

                            {princingCard.map((item, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                    <div className="pricing-wrapper rounded wow fadeInUp" data-wow-delay="1.0s">
                                        <div className="pricing-inner">
                                            <Link to="/blog-details"><img src={item.img} alt="" /></Link>
                                            <ul className="table-price">
                                                <li className="price">{item.text}</li>
                                                <li className="price">{item.price}<small>{item.month}</small></li>
                                            </ul>
                                        </div>
                                        <div className="pricing-price">
                                            <ul className="pricing-features">
                                                <li>Review Your Question<span>$18</span></li>
                                                <li>Analysis of Your "I Have"<span>$22</span></li>
                                                <li>Work with Resources<span>$14</span></li>
                                                <li>Analysis of Your "I Have"<span>$18</span></li>
                                            </ul>
                                            <div className="pricin-footer m-t20 text-center">
                                                <Link to="/contact-us" className="btn btn-primary w-100">Join now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <SvgBoxes />
                </section>
                <CryptoDetail />
            </div>
        </>
    )
}

export default Princing