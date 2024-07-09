import AboutUsBanner from "../components/AboutUsBanner"
import DigitalCurrency from "../components/DigitalCurrency"
import CryptoCounter from "../components/CryptoCounter"
import { IMAGE } from "../constent/theme"
import CryptoDetail from "../components/CryptoDetail"


const SvgList = [
    { svg: IMAGE.about_svg4 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg4 },

]
const AboutUs = () => {
    return (
        <>
            <div className="page-content">
                <AboutUsBanner img={IMAGE.about_banner} title={'About Us'} />
                <section className="content-inner overflow-hidden position-relative">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title wow fadeInUp" data-wow-delay="0.6s">Digital Currency Is Our Expertise</h2>
                            <p className="text wow fadeInUp" data-wow-delay="0.8s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                        <DigitalCurrency />
                    </div>
                    <ul className="dz-shape-2">
                        {SvgList.map((item, index) => (
                            <li key={index}>{item.svg}</li>
                        ))}
                    </ul>
                </section >
                <CryptoCounter />
                <CryptoDetail />
            </div>

        </>
    )
}

export default AboutUs