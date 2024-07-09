import { Fragment } from "react"
import { IMAGE } from "../constent/theme"
import { Link } from "react-router-dom"


const SvgList_1 = [
    { svg: IMAGE.about_svg1 },
    { svg: IMAGE.about_svg2 },
    { svg: IMAGE.about_svg3 },
]
const SvgList_2 = [
    { svg: IMAGE.about_svg4 },
    { svg: IMAGE.about_svg5 },
    { svg: IMAGE.about_svg6 },
]

interface propsfile {
    title: string
    img:string
}
const AboutUsBanner = (props: propsfile) => {
    return (
        <>
            <div className="dz-bnr-inr dz-bnr-inr-sm text-center position-relative overlay-black-dark" style={{ backgroundImage: `url(${props.img})` }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>{props.title}</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row m-t15">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {SvgList_1.map((item, ind) => (
                    <Fragment key={ind}>{item.svg}</Fragment>
                ))}
                <ul className="dz-shape">
                    {SvgList_2.map((item, index) => (
                        <li key={index}>{item.svg}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AboutUsBanner