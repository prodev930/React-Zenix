import { Link } from "react-router-dom"
import AboutUsBanner from "../components/AboutUsBanner"
import { IMAGE } from "../constent/theme"
import SvgBoxes from "../element/SvgBoxes"



const BlogGridCards = [
    { img: IMAGE.blog_pic1, title: 'Vestibulum massa arcu, consectetu.' },
    { img: IMAGE.blog_pic3, title: '7 Ingenious Ways You Can Do With Crypto ' },
    { img: IMAGE.blog_pic4, title: 'Why You Should Not Cryptocurrency.' },
    { img: IMAGE.blog_pic5, title: '7 Ingenious Ways You Can Do With Crypto' },
    { img: IMAGE.blog_pic6, title: '14 Days To A Better Crypto Currency.' },
    { img: IMAGE.blog_pic2, title: '14 Days To A Better Crypto Currency' },
]
const BlogGrid = () => {
    return (
        <>
            <div className="page-content">
                <AboutUsBanner img={IMAGE.about_banner} title={'Blog Grid'} />
                <section className="content-inner position-relative">
                    <div className="container">
                        <div className="row">
                            {BlogGridCards.map((item, index) => (
                                <div className="col-xl-4 col-md-6  m-b30" key={index}>
                                    <div className="dz-card style-1 overlay-shine wow fadeInUp" data-wow-delay="1.0s">
                                        <div className="dz-media">
                                            <Link to="/blog-details"><img src={item.img} alt="" /></Link>
                                            <span className="date"><Link to="#">14 Feb 2012</Link></span>
                                        </div>
                                        <div className="dz-info bg-light">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-author text-primary">
                                                        <span>
                                                            <i className="fa-solid fa-user"></i>
                                                        </span>
                                                        By Kk Sharma</li>
                                                    <li className="post-date text-primary">
                                                        <span>
                                                            <i className="fa-solid fa-message"></i>
                                                        </span>
                                                        24 Comments</li>
                                                </ul>
                                            </div>
                                            <h4 className="dz-title"><Link to="/blog-details">{item.title}</Link></h4>
                                            <p>A wonderful serenity has taken of my entire soul, like these.</p>
                                            <Link to="/contact-us" className="btn btn-primary">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                                <nav aria-label="Blog Pagination">
                                    <ul className="pagination style-1 text-center  wow fadeInUp" data-wow-delay="0.8s">
                                        <li className="page-item"><Link className="page-link prev" to="#"><i className="fas fa-chevron-left"></i></Link></li>
                                        <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link next" to="#"><i className="fas fa-chevron-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <SvgBoxes />
                </section>
            </div>
        </>
    )
}

export default BlogGrid