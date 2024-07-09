import { Link } from "react-router-dom"
import { IMAGE } from "../constent/theme"

const commentList = [
    {
        img: IMAGE.avatar1, name: 'Celesto Anderson', ol:
            <ol className="children">
                <li className="comment odd parent">
                    <div className="comment-body">
                        <div className="comment-author vcard">
                            <img className="avatar photo" src={IMAGE.avatar2} alt="" />
                            <cite className="fn">Jake Johnson</cite>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="reply">
                            <Link to="#" className="comment-reply-link"><i className="fa fa-reply"></i>Reply</Link>
                        </div>
                    </div>
                </li>
            </ol>
    },
    { img: IMAGE.avatar3, name: 'John Doe' },
    { img: IMAGE.avatar1, name: 'Celesto Anderson' },
]
const BlogLeftContent = () => {
    return (
        <>
            <div className="col-xl-8 col-lg-8">
                <div className="blog-single pt-20 sidebar dz-card">
                    <div className="dz-media dz-media-rounded rounded">
                        <img src={IMAGE.blog_pic7} alt="" />
                    </div>
                    <div className="dz-info m-b30">
                        <div className="dz-meta">
                            <ul>
                                <li className="post-author">
                                    <Link to="#">
                                        <img src="assets/images/avatar/avatar3.jpg" alt="" />
                                        <span>By Jone Doe</span>
                                    </Link>
                                </li>
                                <li className="post-date"><Link to="#"> 17 May 2022</Link></li>
                                <li className="post-comment"><Link to="#">3 comment</Link></li>
                            </ul>
                        </div>
                        <h3 className="dz-title">15 Advantages Of Cryptocurrency And How You Can Make Full Use Of It.</h3>
                        <div className="dz-post-text">
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>
                            <p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing Link single stroke at the present moment; and yet I feel that I never was Link greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but Link few stray gleams steal into.</p>
                            <blockquote className="block-quote  style-1">
                                <p>“You can make anything look good. Only Link quarter of young adults are financially literate. You don’t want to overwhelm them with terrible advice.”</p>
                                <cite> Zenix </cite>
                            </blockquote>
                            <p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, Link thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>
                            <ul className="m-b30">
                                <li>A wonderful serenity has taken possession.</li>
                                <li>Of my entire soul, like these sweet mornings of spring which.</li>
                                <li>I enjoy with my whole heart.</li>
                                <li>This spot, which was created For the bliss of souls like mine.</li>
                            </ul>
                            <p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, Link thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>
                        </div>
                        <div className="dz-share-post">
                            <div className="post-tags">
                                <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
                                <Link to="#"><span>Corporate</span></Link>
                                <Link to="#"><span>Blog</span></Link>
                                <Link to="#"><span>Marketing</span></Link>
                            </div>
                            <div className="dz-social-icon dark">
                                <ul>
                                    <li><Link target="_blank" className="fab fa-facebook-f" to="https://www.facebook.com/dexignzone/"></Link></li>
                                    <li><Link target="_blank" className="fab fa-instagram" to="https://www.instagram.com/dexignzone/"></Link></li>
                                    <li><Link target="_blank" className="fab fa-twitter" to="https://twitter.com/dexignzones"></Link></li>
                                    <li><Link target="_blank" className="fab fa-youtube" to="https://www.youtube.com/channel/UCGL8V6uxNNMRrk3oZfVct1g"></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget-title">
                    <h4 className="title">Related Blog</h4>
                </div>
                <div className="row m-b30 m-sm-b10">
                    <div className="col-md-6 col-xl-6 m-b30">
                        <div className="dz-card style-1 overlay-shine wow fadeInUp" data-wow-delay="1.0s">
                            <div className="dz-media">
                                <Link to="/blog-details"><img src={IMAGE.blog_pic1} alt="" /></Link>
                                <span className="date"><Link to="#">14 Feb 2012</Link></span>
                            </div>
                            <div className="dz-info  bg-light">
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
                                <h5 className="dz-title"><Link to="blog-details">Vestibulum massa arcu,  consectetu.</Link></h5>
                                <p>A wonderful serenity has taken of my entire soul, like these.</p>
                                <Link to="/contact-us" className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6 m-b30">
                        <div className="dz-card style-1 overlay-shine wow fadeInUp" data-wow-delay="1.0s">
                            <div className="dz-media">
                                <Link to="/blog-details"><img src={IMAGE.blog_pic2} alt="" />
                                </Link>
                                <span className="date"><Link to="#">20 Jun 2019</Link></span>
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
                                <h5 className="dz-title"><Link to="/blog-details">Things That Make You Love Cryptocurrency</Link></h5>
                                <p>A wonderful serenity has taken of my entire soul, like these.</p>
                                <Link to="/contact-us" className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear" id="comment-list">
                    <div className="comments-area" id="comments">
                        <div className="widget-title style-1">
                            <h4 className="title">Comments</h4>
                        </div>
                        <div className="clearfix">
                            <ol className="comment-list">
                                {commentList.map((item, index) => (
                                    <li className="comment" key={index}>
                                        <div className="comment-body">
                                            <div className="comment-author vcard">
                                                <img className="avatar photo" src={item.img} alt="" />
                                                <cite className="fn">{item.name}</cite>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="reply">
                                                <Link to="#" className="comment-reply-link"><i className="fa fa-reply"></i>Reply</Link>
                                            </div>
                                        </div>
                                        {item.ol}
                                    </li>
                                ))}
                            </ol>
                            <div className="comment-respond" id="respond">
                                <div className="widget-title style-1">
                                    <h4 className="title" id="reply-title">Leave Your Comment
                                        <small><Link style={{ display: 'none' }} to="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link></small>
                                    </h4>
                                </div>
                                <form className="comment-form" id="commentform" method="post">
                                    <p className="comment-form-author">
                                        <label htmlFor="author">Name <span className="required">*</span></label>
                                        <input type="text" name="Author" placeholder="Author" id="author" />
                                    </p>
                                    <p className="comment-form-email">
                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                        <input type="text" placeholder="Email" name="email" id="email" />
                                    </p>
                                    <p className="comment-form-comment">
                                        <label htmlFor="comment">Comment</label>
                                        <textarea rows={0} name="comment" placeholder="Comment" id="comment"></textarea>
                                    </p>
                                    <p className="form-submit">
                                        <button type="submit" className="btn btn-primary" id="submit">SUBMIT</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogLeftContent