import { useState } from "react"


const currencyCard = [
    { icon: 'flaticon-coin-stack', title: 'Converts Will Receive More' },
    { icon: 'flaticon-transaction', title: 'Transaction Made Easy With App Use' },
    { icon: 'flaticon-shield', title: 'The Most secured Currency Event' },
]

const DigitalCurrency = () => {
    const [addActive,setAddActive] = useState(1);
    return (
        <>


            <div className="row justify-content-center">
                {currencyCard.map((item, index) => (
                    <div className="col-lg-4 col-md-6 m-b30" key={index}>
                        <div onMouseEnter={()=>{setAddActive(index)}} className={`icon-bx-wraper style-1 bg-light box-hover text-center wow bounceInLeft
                         ${addActive===index?'active':''}`} data-wow-delay="1.0s" >
                            <div className="icon-media">
                                <i className={item.icon}></i>
                            </div>
                            <div className="icon-content">
                                <h4 className="title">{item.title}</h4>
                                <p className="text">It is a long established fact that a  will be distracted by the readable content of a page when at its layout.</p>
                            </div>
                            <div className="hover-border"></div>
                            <div className="hover-border-2"></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DigitalCurrency