import { Link } from "react-router-dom";
import { IMAGE } from "../constent/theme"




const bit_coin = [
    { img: IMAGE.image_coin5, name: 'Bitcoin', text: 'BTC/0.88%', price: '$77,503,50' },
    { img: IMAGE.image_coin6, name: 'Ethereum', text: 'ETH/0.79%', price: '$63,153,50' },
    { img: IMAGE.image_coin7, name: 'Dollar', text: 'USD/0.68%', price: '$33,115,50' },
    { img: IMAGE.image_coin8, name: 'Tether', text: 'USDT/0.61%', price: '$45,213,50' },
    { img: IMAGE.image_coin9, name: 'BNB', text: 'BNB/0.68%', price: '$27,253,50' },
    { img: IMAGE.image_coin10, name: 'Cardano', text: 'ADA/0.58%', price: '$42,613,50' },
    { img: IMAGE.image_coin11, name: 'Dogecoin', text: 'DOGE/0.75%', price: '$72,415,50' },
    { img: IMAGE.image_coin12, name: 'Polygon', text: 'MATIC/0.88%', price: '$65,418,50' },
];
const SvgList = [
    { svg: IMAGE.about_svg4 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg4 },

]
const CryptoDetail = () => {
    return (
        <>
            <section className="content-inner-1 bg-white position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 m-b30">
                            <div className="contant-box style-2 bg-light">
                                <div className="row">
                                    {bit_coin.map((item, index) => (
                                        <div className="col-lg-12" key={index}>
                                            <div className="crypto-box style-3 wow fadeInUp" data-wow-delay="0.2s">
                                                <div className="d-flex align-items-center">
                                                    <div className="crypto-media">
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div className="crypto-info">
                                                        <h6>{item.name}</h6>
                                                        <div className="text">{item.text}</div>
                                                    </div>
                                                </div>
                                                <div className="crypto-price">
                                                    <span className="price text-primary">{item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="overlay-box style-1 bg-light-yellow wow fadeInUp" data-wow-delay="1.8s">
                                        <div className="contant-box">
                                            <div className="crypto-info">
                                                <div>
                                                    <h5>Bitcoin</h5>
                                                    <div className="text">BTC/BUSD+0.88%</div>
                                                </div>
                                                <div className="crypto-price">
                                                    <h6 className="price text-dark">$37,503,50</h6>
                                                </div>
                                            </div>
                                            <Link to="/blog-details" className="btn-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                                            <div className="crypto-media">
                                                <img src={IMAGE.image_coin13} className="wow bounceInRight" data-wow-delay="2.0s" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30">
                                    <div className="overlay-box style-1 bg-light-purple wow fadeInUp" data-wow-delay="2.0s">
                                        <div className="contant-box">
                                            <div className="crypto-info">
                                                <div>
                                                    <h5 className="text-purple">Ethereum</h5>
                                                    <div className="text">BTC/BUSD+0.88%</div>
                                                </div>
                                                <div className="crypto-price">
                                                    <h6 className="price text-dark">$37,503,50</h6>
                                                </div>
                                            </div>
                                            <Link to="/blog-details" className="btn-link">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
                                            <div className="crypto-media">
                                                <img src={IMAGE.image_coin14} className="wow bounceInRight" data-wow-delay="2.2s" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="overlay-box style-2 overlay-style-1 wow fadeInUp" data-wow-delay="2.4s" style={{ backgroundImage: `url(${IMAGE.background_bg4})` }}>
                                        <div className="contant-box text-center">
                                            <h2 className="title wow fadeInUp text-center text-light" data-wow-delay="0.4s">Create and verify<br />your account</h2>
                                            <Link to="/blog-details" className="btn-link lg">Explore Features <i className="fa-solid fa-arrow-right-long"></i></Link>
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

export default CryptoDetail