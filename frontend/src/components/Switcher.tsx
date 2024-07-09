import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE } from '../constent/theme';
// import { IMAGE } from '../constent/theme';

// const logo1 = IMAGE.logo_white
// const logoWhite1 = IMAGE.logo_white;
// const logo2 = IMAGE.logo_white;
// const logoWhite2 = IMAGE.logo_white;
// const logo3 = IMAGE.logo_white;
// const logoWhite3 = IMAGE.logo_white;
// const logo4 = IMAGE.logo_white;
// const logoWhite4 = IMAGE.logo_white;
// const logo5 = IMAGE.logo_white;
// const logoWhite5 = IMAGE.logo_white;
// const logo6 = IMAGE.logo_white;
// const logoWhite6 = IMAGE.logo_white;
// const logo7 = IMAGE.logo_white;
// const logoWhite7 = IMAGE.logo_white;
// const logo8 = IMAGE.logo_white;




const initialState = false;
const reducer = (state: any, action: any) => {
    if (action.type === 'openswitcher') {
        return { ...state, openswitcher: !state.openswitcher };
    }

    return state;
}


const bgSmallImg = [

    {
        bgimage1: IMAGE.background2, bgimage2: IMAGE.background2,

    },
    {
        bgimage1: IMAGE.background3, bgimage2: IMAGE.background3,

    },
    {
        bgimage1: IMAGE.background4, bgimage2: IMAGE.background4,

    },
    {
        bgimage1: IMAGE.background5, bgimage2: IMAGE.background5,

    },
    {
        bgimage1: IMAGE.background6, bgimage2: IMAGE.background6,

    },
    {
        bgimage1: IMAGE.background7, bgimage2: IMAGE.background7,

    },
]
const bgColorBlog = [
    {
        patterimage1: IMAGE.pattern1, patterimage2: IMAGE.pattern1
    },
    {
        patterimage1: IMAGE.pattern2, patterimage2: IMAGE.pattern2
    },
    {
        patterimage1: IMAGE.pattern3, patterimage2: IMAGE.pattern3
    },
    {
        patterimage1: IMAGE.pattern4, patterimage2: IMAGE.pattern4
    },
    {
        patterimage1: IMAGE.pattern5, patterimage2: IMAGE.pattern5
    },
    {
        patterimage1: IMAGE.pattern6, patterimage2: IMAGE.pattern6
    },
    {
        patterimage1: IMAGE.pattern7, patterimage2: IMAGE.pattern7
    },
];
const backGroundColor = [
    {
        colorValue: '#EE3131', style: '1',
    },
    {
        colorValue: '#0D3DE5', style: '2',
    },
    {
        colorValue: '#2a7e19', style: '3',
    },
    {
        colorValue: '#a10559', style: '4',
    },
    {
        colorValue: '#f77900', style: '5',
    },
    {
        colorValue: '#D7B65D', style: '6',
    },
    {
        colorValue: '#22abc3', style: '7',
    },


];



function Switcher() {
    const [changeColor, setChangeColor] = useState('');
    const [overlay, setOverlay] = useState('-100%')
    const [state, dispatch] = useReducer(reducer, initialState);


    // function handleChangeTheme(version:any) {
    //     var thememode = document.body.classList;
    //     var navUl = [].slice.call(document.querySelectorAll('.main-theme-version'));
    //     navUl.forEach(el => el.classList.remove('active'));
    //     document.getElementsByClassName(version)[0].classList.add('active');
    //     if (version === 'light-theme') {
    //         thememode.remove('layout-dark');
    //         thememode.add('layout-light');
    //     } else if (version === 'dark-theme') {
    //         thememode.remove('layout-light');
    //         thememode.add('layout-dark');
    //     }
    // }


    function HeaderPostion(postion: string) {
        var headermode = document.getElementsByClassName('main-bar-wraper')[0].classList;
        // var navUl = [].slice.call(document.querySelectorAll('.switcher-header-layout-btn'));
        var navUl = document.querySelectorAll('.switcher-header-layout-btn');
        // navUl.forEach(el => el.classList.remove('active'));
        for (let i = 0; i < navUl.length; i++) {
            navUl[i].classList.remove('active')

        }
        document.getElementsByClassName(postion)[0].classList.add('active');

        if (postion === 'header-fixed') {
            headermode.remove('sticky-no');
            headermode.add('sticky-header');
        } else if (postion === 'header-static') {
            headermode.remove('sticky-header');
            headermode.add('sticky-no');
        }

    }

    // function ChnageDirectionRtl(direction) {
    //     const directionChnage = document.getElementsByTagName("html");
    //     var switcherdirection = [].slice.call(document.querySelectorAll('.dir-theme-change'));
    //     switcherdirection.forEach(el => el.classList.remove('active'));
    //     document.getElementsByClassName(direction)[0].classList.add('active');
    //     if (direction === 'rtl-theme') {
    //         directionChnage[0].setAttribute("dir", "rtl");

    //     } else if (direction === 'ltr-theme') {
    //         directionChnage[0].removeAttribute("dir", "rtl");
    //     }

    // }

    function handleThemeLayout(layout: string) {
        var changeLayout = document.body.classList;
        var switcherlayout = [].slice.call(document.querySelectorAll('.layout-theme-change'));
        switcherlayout.forEach((el: any) => el.classList.remove('active'));
        document.getElementsByClassName(layout)[0].classList.add('active');

        if (layout === 'wide-layout') {
            changeLayout.remove('boxed');
            changeLayout.remove('frame');
            changeLayout.add('wide-layout');
        } else if (layout === 'boxed') {
            changeLayout.remove('wide-layout');
            changeLayout.remove('frame');
            changeLayout.add('boxed');
        } else if (layout === 'frame') {
            changeLayout.remove('boxed');
            changeLayout.remove('wide-layout');
            changeLayout.add('frame');
        }
    }

    function dzhandleThemeBgColor(action: any, value: any) {
        var backgchnage = document.body.classList;

        if (backgchnage.contains('boxed') || backgchnage.contains('frame')) {
            if (action === 'bgcolor') {
                document.body.style.backgroundColor = value;
                document.body.style.backgroundImage = "";
            } else if (action === 'bgImage') {
                document.body.style.backgroundImage = "url(" + value + ")";
                document.body.setAttribute('id', 'bg');
            } else if (action === 'bgPattern') {
                document.body.style.backgroundImage = "url(" + value + ")";
                document.body.setAttribute('id', 'bg');
                document.body.style.backgroundSize = 'auto';
            }
        }
    }

    function dzPrimaryColor(action: any, value: any, currentEvent: any) {
        var colorTheme = document.body;
        colorTheme.setAttribute('data-theme-color', value);
        var colorThemeSelectorArr = document.querySelectorAll('.color-skins > li');
        colorThemeSelectorArr.forEach((el: any) => el.classList.remove('active'));



        // var logoSelectorArr = currentEvent.target.getAttribute('data-logo-selector').split(',');
        // var logoSrcArr = currentEvent.target.getAttribute('data-logo-image').split(',');
        // console.log(logoSrcArr);
        // console.log('logoSrcArr');

        // var arrCount = logoSelectorArr.length;

        // for (var i = 0; i < arrCount; i++) {
        //     if (document.querySelector(logoSelectorArr[i]) != null) {
        //         var imageSrc = eval(logoSrcArr[i]);                
        //         const logoSelct = document.querySelectorAll(logoSelectorArr);
        //         logoSelct.forEach((el: any) => el.setAttribute('src', imageSrc))

        //     }
        // }


        const logo = document.querySelector('.logo-header img');
        const footerLogo = document.querySelector('.footer-logo img');
        const logo2 = document.querySelector('.logo-dark img');
        switch (action) {
            case '1':
                footerLogo?.setAttribute('src', IMAGE.logo_white)
                logo?.setAttribute('src', IMAGE.logo_white)
                logo2?.setAttribute('src', IMAGE.logo)
                break;
            case '2':
                footerLogo?.setAttribute('src', IMAGE.logo_white2)
                logo?.setAttribute('src', IMAGE.logo_white2)
                logo2?.setAttribute('src', IMAGE.logo2)
                break;
            case '3':
                footerLogo?.setAttribute('src', IMAGE.logo_white3)
                logo?.setAttribute('src', IMAGE.logo_white3)
                logo2?.setAttribute('src', IMAGE.logo3)
                break;
            case '4':
                footerLogo?.setAttribute('src', IMAGE.logo_white4)
                logo?.setAttribute('src', IMAGE.logo_white4)
                logo2?.setAttribute('src', IMAGE.logo4)
                break;
            case '5':
                footerLogo?.setAttribute('src', IMAGE.logo_white5)
                logo?.setAttribute('src', IMAGE.logo_white5)
                logo2?.setAttribute('src', IMAGE.logo5)
                break;
            case '6':
                footerLogo?.setAttribute('src', IMAGE.logo_white6)
                logo?.setAttribute('src', IMAGE.logo_white6)
                logo2?.setAttribute('src', IMAGE.logo6)
                break;
            case '7':
                footerLogo?.setAttribute('src', IMAGE.logo_white7)
                logo?.setAttribute('src', IMAGE.logo_white7)
                logo2?.setAttribute('src', IMAGE.logo7)
                break;

            default:
                break;
        }
        setTimeout(function () {
            currentEvent.target.parentNode.classList.add('active');
        }, 200);

    }



    return (
        <>
            <div id="dzSwitcher-right" className={`styleswitcher top-0`}
                style={{ left: `${state.openswitcher ? "0" : ""}`, transition: 'all .4s linear' }}>
                <div className="overlay-switch" onClick={() => dispatch({ type: 'openswitcher' })}></div>
                <div style={{ color: 'white' }} className="switcher-btn-bx" onClick={() => {
                    dispatch({ type: 'openswitcher' })
                    overlay === '-100%' ? setOverlay('0') : setOverlay('-100%')
                }}>
                    <Link to={"#"} className="switch-btn open"><span className="fas fa-cog"></span></Link>
                </div>
                <div className="styleswitcher-inner">
                    <div className="sw-main-title">Theme Setting</div>
                    <div className="theme-design row">
                        <div className="theme-box col-md-12">
                            <h5 className="switcher-title"><span>Theme</span></h5>
                            <ul defaultValue="themeFullColor" className="color-skins theme-panel-save">
                                <li className="active">
                                    <Link to={"#"}
                                        className="theme-skin skin-1 theme-color"
                                        onClick={(el) => {
                                            dzPrimaryColor('1', 'color_1', el)
                                        }}
                                        data-color-theme="skin-1"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo1, logoWhite1,logoWhite1"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => { dzPrimaryColor('2', 'color_2', el) }}
                                        className="theme-skin skin-2 theme-color"
                                        data-color-theme="skin-2"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo2,logoWhite2,logoWhite2"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(e) => dzPrimaryColor('3', 'color_3', e)}
                                        className="theme-skin skin-3 theme-color"
                                        data-color-theme="skin-3"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo3, logoWhite3,logoWhite3"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(e) => dzPrimaryColor('4', 'color_4', e)}
                                        className="theme-skin skin-4 theme-color"
                                        data-color-theme="skin-4"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo4, logoWhite4,logoWhite4"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(e) => dzPrimaryColor('5', 'color_5', e)}
                                        className="theme-skin skin-5 theme-color"
                                        data-color-theme="skin-5"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo5, logoWhite5,logoWhite5"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => dzPrimaryColor('6', 'color_6', el)}
                                        className="theme-skin skin-6 theme-color"
                                        data-color-theme="skin-6"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo6, logoWhite6,logoWhite6"
                                    ></Link>
                                </li>
                                <li>
                                    <Link to={"#"}
                                        onClick={(el) => dzPrimaryColor('7', 'color_7', el)}
                                        className="theme-skin skin-7 theme-color"
                                        data-color-theme="skin-7"
                                        data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                                        data-logo-image="logo7, logoWhite7,logoWhite7"
                                    ></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="theme-design row theme-layout-wrapper">
                        <div className="theme-box col-md-12">
                            <h5 className="switcher-title"><span>Theme Layout</span></h5>
                            <ul defaultValue="layout" className="layout layout-view theme-panel-save">
                                <li className="wide-layout active layout-theme-change">
                                    <Link to={"#"} dir="wide-layout"
                                        onClick={() => handleThemeLayout('wide-layout')}
                                    >
                                        <div></div>
                                        <span>Wide</span>
                                    </Link>
                                </li>
                                <li className="boxed layout-theme-change">
                                    <Link to={"#"} dir="boxed"
                                        onClick={() => handleThemeLayout('boxed')}
                                    >
                                        <div><span></span></div>
                                        <span>Boxed</span>
                                    </Link>
                                </li>
                                <li className="frame layout-theme-change">
                                    <Link to={"#"} dir="frame"
                                        onClick={() => handleThemeLayout('frame')}
                                    >
                                        <div><span></span></div>
                                        <span>Frame</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="theme-design row theme-view-wrapper">

                        <div className="col-xl-6 theme-box">
                            <h5 className="switcher-title"><span>Header</span></h5>
                            <ul defaultValue="header" className="tab-checkbx header-view theme-panel-save">
                                <li className="switcher-header-layout-btn header-fixed active">
                                    <Link to={"#"} dir="sticky-header"
                                        onClick={() => HeaderPostion('header-fixed')}
                                    >
                                        Fixed
                                    </Link>
                                </li>
                                <li className="switcher-header-layout-btn header-static ">
                                    <Link to={"#"} dir="sticky-no"
                                        onClick={() => HeaderPostion('header-static')}
                                    >
                                        Static
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="theme-design row mb-0 theme-background-wrapper">
                        <div className="col-md-12 theme-box mb-4">
                            <h5 className="switcher-title"><span>Background Color</span></h5>
                            <ul defaultValue="bgColor" className="bg-color-switcher theme-panel-save">
                                {
                                    backGroundColor.map((item, ind) => (
                                        <li className={changeColor == item.colorValue ? 'active' : ''} key={ind}>
                                            <Link to={"#"}
                                                style={{ background: `${item.colorValue}` }}
                                                className={`bg-color-${item.style}`}
                                                dir={item.colorValue}
                                                onClick={() => {
                                                    dzhandleThemeBgColor('bgcolor', item.colorValue);
                                                    setChangeColor(item.colorValue);
                                                }
                                                }
                                            >
                                            </Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className="col-md-12 theme-box mb-4">
                            <h5 className="switcher-title"><span>Background Image</span></h5>
                            <ul defaultValue="bgImage" className="background-switcher theme-panel-save">
                                {bgSmallImg.map((item, ind) => (
                                    <li className={changeColor == item.bgimage1 ? 'active' : ''} key={ind}>
                                        <img
                                            style={{ height: '100%' }}
                                            src={item.bgimage1}
                                            alt={'small' + (ind + 1)}
                                            onClick={() => {
                                                dzhandleThemeBgColor('bgImage', item.bgimage2);
                                                setChangeColor(item.bgimage1);
                                            }
                                            }
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-12 theme-box">
                            <h5 className="switcher-title"><span>Background Pattern</span></h5>
                            <ul defaultValue="bgPatten" className="pattern-switcher theme-panel-save">

                                {bgColorBlog.map((item, ind) => (
                                    <li className={changeColor == item.patterimage1 ? 'active' : ''} key={ind}>
                                        <img
                                            src={item.patterimage1}
                                            alt={'pattern' + (ind + 1)}
                                            onClick={() => {
                                                dzhandleThemeBgColor('bgPattern', item.patterimage2);
                                                setChangeColor(item.patterimage1);
                                            }
                                            }
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="switcher_overlay"
                onClick={() => {
                    dispatch({ type: 'openswitcher' })
                    overlay === '-100%' ? setOverlay('0') : setOverlay('-100%')
                }}

                style={{ transform: `translate(${overlay})` }}></div >
        </>
    )
}
export default Switcher;