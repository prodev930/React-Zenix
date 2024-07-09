import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"



const NewBlogList1 = [
    { img: IMAGE.blog_small_pic1, date: '14 Feb 2022', title: 'Vestibulum massa arcu,consectetu.' },
    { img: IMAGE.blog_small_pic2, date: '17 Aug 2019', title: 'Things That Make You Love Cryptocurrency' },
    { img: IMAGE.blog_small_pic3, date: '15 feb 2021', title: '7 Ingenious Ways You Can Do With Cryptocurrency.' },
    { img: IMAGE.blog_small_pic4, date: '20 Jun 2020', title: '14 Days To A Better Crypto Currency.' },
]
const NewBlogList2 = [
    { img: IMAGE.blog_small_pic2, date: '17 Aug 2019', title: 'Things That Make You Love Cryptocurrency' },
    { img: IMAGE.blog_small_pic4, date: '20 Jun 2020', title: '14 Days To A Better Crypto Currency.' },
    { img: IMAGE.blog_small_pic1, date: '14 Feb 2022', title: 'Vestibulum massa arcu,consectetu.' },
    { img: IMAGE.blog_small_pic3, date: '15 feb 2021', title: '7 Ingenious Ways You Can Do With Cryptocurrency.' },
]
const NewBlog = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-12 m-b30">
                    <div className="row">
                        {NewBlogList1.map((item, index) => (
                            <div className="col-lg-12 m-b20" key={index}>
                                <div className="widget-box style-1 bg-light wow bounceInLeft">
                                    <div className="dz-media">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="dz-info">
                                        <span className="date"><Link to="#">{item.date}</Link></span>
                                        <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 m-b30">
                    <div className="dz-card style-1 wow fadeInUp" data-wow-delay="1.0s">
                        <div className="dz-media">
                            <Link to="/blog-details"><img src={IMAGE.blog_pic8} alt="" /></Link>
                            <span className="date"><Link to="#">14 Fan 2022</Link></span>
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
                            <h4 className="dz-title"><Link to="/blog-details">Things That Make You Love Cryptocurrency</Link></h4>
                            <p>A wonderful serenity has taken of my entire soul, like these.</p>
                            <Link to="/contact-us" className="btn btn-primary">VIEW POST</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 m-b30">
                    <div className="row">
                        {NewBlogList2.map((item, index) => (
                            <div className="col-lg-12 m-b20" key={index}>
                                <div className="widget-box style-1 bg-light wow bounceInLeft">
                                    <div className="dz-media">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="dz-info">
                                        <span className="date"><Link to="#">{item.date}</Link></span>
                                        <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewBlog