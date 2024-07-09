import { Link, useLocation } from "react-router-dom"
import { IMAGE } from "../constent/theme"
import { useEffect, useState } from "react"

const Navbar = [
    { menu: 'Home', link: '/' },
    { menu: 'About Us', link: '/about-us' },
    { menu: 'Pricing', link: '/pricing' },
    {
        menu: 'Blog',
        link: '#',
        class: 'sub-menu-down',
        sub_menu: [
            { child: 'Blog List', link: '/blog-list' },
            { child: 'Blog Grid', link: '/blog-grid' },
            { child: 'Blog Details', link: '/blog-details' },
        ]
    },
    { menu: 'Contact Us', link: '/contact-us' },
]

const Header = () => {
    const [path, setPath] = useState('');
    const [header, setHeader] = useState(false);
    const [open, setOpen] = useState(false);
    const setPathName = useLocation();

    window.onscroll = () => {
        if (window.scrollY > 120) {
            setHeader(true)
        } else {
            setHeader(false)
        }

    }
    useEffect(() => {
        let getPath = setPathName.pathname;
        Navbar.map((item) => {
            if (item.link === getPath) {
                setPath(item.menu)
            }
            item.sub_menu?.map((data) => {
                if (data.link === getPath) {
                    setPath(item.menu)
                }
            })
        })


    }, [setPathName.pathname])

    const AddopenBtn = () => {
        document.querySelector('.sub-menu-down')?.classList.toggle('open')
    }


    return (
        <>
            <header className="site-header mo-left header header-transparent">
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${header === true ? 'is-fixed' : ''}`}>
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">

                            <div className="logo-header">
                                <Link to="/" className="logo-light"><img src={IMAGE.logo_white} alt="" /></Link>
                                <Link to="/" className="logo-dark"><img src={IMAGE.images_logo} alt="" /></Link>
                            </div>

                            <button
                                onClick={() => { open === false ? setOpen(true) : setOpen(false) }}
                                className={`navbar-toggler collapsed navicon justify-content-end ${open === true ? 'open' : ''}`} type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link className="btn btn-outline-light btn-lg text-light" target="_blank" to="https://zenix.dexignzone.com/react/demo/login">Login</Link>
                                    <Link className="btn btn-primary btn-lg btn-shadow" target="_blank" to="https://zenix.dexignzone.com/react/demo/page-register">Register</Link>
                                </div>
                            </div>

                            <div className={`header-nav navbar-collapse collapse justify-content-end ${open === true ? 'show' : ''}`} id="navbarNavDropdown">
                                <div className="logo-header">
                                    <Link to="/" className="logo-dark"><img src={IMAGE.images_logo} alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav navbar navbar-left">
                                    {Navbar.map((item, index) => {
                                        let sub_menu_class = item.class;
                                        if (sub_menu_class === 'sub-menu-down') {
                                            return (                                                
                                                <li key={index}
                                                    className={`${item.class}
                                                    ${item.menu === path ? 'active' : ''}`}>
                                                    <Link
                                                        onClick={AddopenBtn}
                                                        to={`${item.link}`}>{item.menu}
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        {item.sub_menu?.map((sub_item, ind) => {
                                                            return (                                                               
                                                                <li key={ind}>
                                                                    <Link onClick={() => { setOpen(false) }} to={`${sub_item.link}`} >{sub_item.child}</Link>
                                                                </li>
                                                                
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                                
                                            )
                                        } else {
                                            return (                                                
                                                <li key={index} className={`${item.menu === path ? 'active' : ''}`} >
                                                    <Link onClick={() => { setOpen(false) }} to={`${item.link}`}>{item.menu}</Link>
                                                </li>
                                                
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header