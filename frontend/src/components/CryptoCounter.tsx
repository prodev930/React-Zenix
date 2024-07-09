import { IMAGE } from "../constent/theme"
import CountUp from 'react-countup';


const SvgList = [
    { svg: IMAGE.about_svg4 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg4 },
]
const CryptoCounter = () => {

    return (
        <>
            <section className="content-inner bg-light position-relative overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 m-b30 ">
                            <div className="dz-media style-1  wow bounceInLeft" data-wow-delay="0.4s">
                                <img src={IMAGE.about_pic1} alt="image" className="rounded" />
                                <img src={IMAGE.about_pic2} alt="image" className="object-1" />
                            </div>
                        </div>
                        <div className="col-lg-6 m-b30">
                            <div className="section-head">
                                <h2 className="title wow fadeInUp" data-wow-delay="0.6s">Enjoy The Difference A Bitcoin And crypto</h2>
                                <p className="text wow fadeInUp" data-wow-delay="0.8s">There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form, by humour, to be sure there hidden  in the middle of text..</p>
                            </div>
                            <div className="row justify-content-center text-lg-start text-md-center text-center">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6 col m-b30 wow fadeInUp" data-wow-delay="1.0s">
                                    <div className="counter-style-2 ">
                                        <h3 className="counter-number text-primary"><span className="counter">
                                            <CountUp duration={5} start={0} end={200} />
                                        </span>M</h3>
                                        <p className="counter-text m-b0">BitCoin ATM</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="1.2s">
                                    <div className="counter-style-2 ">
                                        <h3 className="counter-number text-primary"><span className="counter">
                                            <CountUp duration={7} start={0} end={100} />
                                            </span>%</h3>
                                        <p className="counter-text m-b0">Take Launches</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6  m-b30 wow fadeInUp" data-wow-delay="1.4s">
                                    <div className="counter-style-2 ">
                                        <h3 className="counter-number text-primary"><span className="counter">
                                            <CountUp duration={10} start={0} end={24} />
                                            </span>/7</h3>
                                        <p className="counter-text m-b0">Operators</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="crypto-box style-2 wow bounceInRight" data-wow-delay="1.6s">
                                        <div className="crypto-info">
                                            <i className="flaticon-checked"></i>
                                            <h6 className="title">Solid Varirty Of Altcoin Choices</h6>
                                        </div>
                                        <div className="crypto-text">
                                            <p className="text">All the Lorem Ipsum generators on the Internet tend to repeat redefined </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="crypto-box style-2  wow bounceInRight" data-wow-delay="1.8s">
                                        <div className="crypto-info">
                                            <i className="flaticon-checked"></i>
                                            <h6 className="title">Extremely Simple  User Interface</h6>
                                        </div>
                                        <div className="crypto-text">
                                            <p className="text">All the Lorem Ipsum generators on the Internet tend to repeat redefined </p>
                                        </div>
                                    </div>
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

            </section>
        </>
    )
}

export default CryptoCounter