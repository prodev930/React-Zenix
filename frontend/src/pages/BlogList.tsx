import AboutUsBanner from "../components/AboutUsBanner"
import { IMAGE } from "../constent/theme"
import BlogListContent from "../element/BlogListContent"

const BlogList = () => {
    return (
        <>
            <div className="page-content">
                <AboutUsBanner img={IMAGE.banner3} title={'Blog List Sidebar'} />
                <BlogListContent />
            </div>
        </>
    )
}





export default BlogList



