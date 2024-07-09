import AboutUsBanner from "../components/AboutUsBanner"
import { BlogRightContent } from "../element/BlogListContent"
import BlogLeftContent from "../element/BlogLeftContent"
import SvgBoxes from "../element/SvgBoxes"
import { IMAGE } from "../constent/theme"

const BlogDetail = () => {
    return (
        <>
            <div className="page-content">
                <AboutUsBanner img={IMAGE.banner3} title="Blog Details" />
                <section className="content-inner position-relative" style={{ background: 'white' }}>
                    <div className="container">
                        <div className="row ">
                            <BlogLeftContent />
                            <BlogRightContent />
                        </div>
                    </div>
                    <SvgBoxes />
                </section>
            </div>
        </>
    )
}

export default BlogDetail