import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import SvgBoxes from "./SvgBoxes"




const leftCards = [
    { img: IMAGE.blog_pic1, title: 'Things That Make You Love Cryptocurrency' },
    { img: IMAGE.blog_pic2, title: '7 Ingenious Ways You Can Do With Crypto.' },
    { img: IMAGE.blog_pic3, title: 'Vestibulum massa arcu, consectetu.' },
    { img: IMAGE.blog_pic4, title: 'Why You Should Not Cryptocurrency.' },
]
export default function BlogListContent() {
    return (
        <>
            <section className="content-inner bg-white position-relative">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-8 col-lg-8">
                            <div className="row">
                                {leftCards.map((item, index) => (
                                    <div className="col-lg-12" key={index}>
                                        <div className="dz-card style-1 blog-half overlay-shine wow fadeInUp" data-wow-delay="1.0s">
                                            <div className="dz-media">
                                                <Link to="/blog-details"><img src={item.img} alt="" /></Link>
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
                                                <p>Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <Link to="/contact-us" className="btn btn-primary">VIEW POST</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                                    <nav aria-label="Blog Pagination">
                                        <ul className="pagination style-2 text-center wow fadeInUp" data-wow-delay="0.8s">
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
                        <BlogRightContent />
                    </div>
                </div>
                <SvgBoxes />
            </section>
        </>
    )
}




export const BlogRightContent = () => {
    return (
        <>
            <div className="col-xl-4 col-lg-4">
                <aside className="side-bar sticky-top right">
                    <div className="widget">
                        <div className="widget-title">
                            <h4 className="title">Search</h4>
                        </div>
                        <div className="search-bx">
                            <form role="search" method="post">
                                <div className="input-group">
                                    <input name="text" className="form-control style-1" placeholder="Search.." type="text" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn btn-primary sharp radius-no"><i className="fa-solid fa-magnifying-glass scale3"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="widget widget_categories">
                        <div className="widget-title">
                            <h4 className="title">Categories</h4>
                        </div>
                        <ul>
                            <li className="cat-item"><Link to="#">business(10)</Link></li>
                            <li className="cat-item"><Link to="#">Case Study (13)</Link></li>
                            <li className="cat-item"><Link to="#">Insights (9)</Link></li>
                            <li className="cat-item"><Link to="#">World (3)</Link></li>
                            <li className="cat-item"><Link to="#">Tax Solutions (12)</Link></li>
                            <li className="cat-item"><Link to="#">Creative (6)</Link></li>
                        </ul>
                    </div>

                    <div className="widget recent-posts-entry">
                        <div className="widget-title">
                            <h4 className="title">Recent Post</h4>
                        </div>
                        <div className="widget-post-bx">
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <img src={IMAGE.blog_small_pic1} alt="" />
                                </div>
                                <div className="dz-info">
                                    <h6 className="title"><Link to="/blog-details">Things That Make You Love Cryptocurrency</Link></h6>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"><Link to="/#"> 17 May 2022</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <img src={IMAGE.blog_small_pic2} alt="" />
                                </div>
                                <div className="dz-info">
                                    <h6 className="title"><Link to="/blog-details">7 Ingenious Ways You Can Do With Cryptocurrency.</Link></h6>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"><Link to="/#"> 07 Jan, 2022</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <img src={IMAGE.blog_small_pic3} alt="" />
                                </div>
                                <div className="dz-info">
                                    <h6 className="title"><Link to="/blog-details">14 Days To A Better Crypto Currency.</Link></h6>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"><Link to="/#"> 25 Aug, 2022</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="widget widget_tag_cloud">
                        <div className="widget-title">
                            <h4 className="title">Popular Tags</h4>
                        </div>
                        <div className="tagcloud">
                            <Link to="#">Business</Link>
                            <Link to="#">Corporate</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Marketing</Link>
                            <Link to="#">Creative</Link>
                            <Link to="#">Web</Link>
                            <Link to="#">Workers</Link>
                            <Link to="#">Modern</Link>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}





