import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal, Nav, Tab} from 'react-bootstrap';

import user from './../../../../images/contacts/user.jpg';
import pic1 from './../../../../images/users/pic1.jpg';
import pic2 from './../../../../images/users/pic2.jpg';
import pic3 from './../../../../images/users/pic3.jpg';
import pic4 from './../../../../images/users/pic4.jpg';
import pic5 from './../../../../images/users/pic5.jpg';
import pic6 from './../../../../images/users/pic6.jpg';
import pic7 from './../../../../images/users/pic7.jpg';

const cardBlog = [
    {image: pic1, title:'Alan Green', subtitle:'UI Designer'},
    {change:'text-success',name:'AM',  title:'Angela Moss', subtitle:'Redblue Studios'},
    {image: pic2, title:'Brian Samuel', subtitle:'Team Management'},
    {change:'text-info',name:'BC',title:'Benny Chagur', subtitle:'Highspeed Inc.'},
    {image: pic3, title:'Chyntia Lawra', subtitle:'Zero Two Studios'},
    {change:'text-success',name:'CS',title:'Cloe Simatupang', subtitle:'Zero Two Studios'},
    {image: pic4, title:'Engeline O’conner', subtitle:'Beep Beep Inc.'},
    {change:'text-info',name:'JR',  title:'Franklin Jr.', subtitle:'Zero Two Studios'},
    {image: pic5, title:'Geovanny', subtitle:'UI Designer'},
    {change:'text-info',name:'HC', title:'Henry Charlotte', subtitle:'UI Designer'},
    {image: pic6, title:'Ivankov Shee', subtitle:'UI Designer'},
    {change:'text-success',name:'NL', title:'Nindy Leeacovic', subtitle:'UI Designer'},
];
const cardBlog2 = [
    {image: pic7, title:'Alan Green', subtitle:'UI Designer'},
    {change:'text-success',name:'AM',  title:'Angela Moss', subtitle:'Redblue Studios'},
   
    {image: pic3, title:'Chyntia Lawra', subtitle:'Zero Two Studios'},
    {change:'text-success',name:'CS',title:'Cloe Simatupang', subtitle:'Zero Two Studios'},
   
    {image: pic5, title:'Geovanny', subtitle:'UI Designer'},
    {change:'text-info',name:'HC', title:'Henry Charlotte', subtitle:'UI Designer'},
    
];

const ContactCard = () =>{
    const [item, setItem] = useState(cardBlog);   
    const [refresh, setRefresh] = useState(false);
	const onClick = () => {
		setRefresh(true);
		setTimeout(() => {
           setItem([
			...item,
			item[Math.floor(Math.random() * Math.floor(item.length - 1))],
		  ]);
		  setRefresh(false);
		}, 1000);
	};

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Tab.Container defaultActiveKey="All">
                <div className="project-nav">
                    <div className="card-action card-tabs  me-auto mb-md-0 mb-3">
                        <Nav as="ul" className="nav nav-tabs style-2">
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link eventKey="All" className="nav-link">All Contacs <span className="badge badge-primary shadow-primary">154</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link eventKey="Pending">Pending Invitation <span className="badge shadow-warning  badge-warning">6</span></Nav.Link>
                            </Nav.Item>	
                        </Nav>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link to={"#"}  onClick={handleShow} className="btn btn-primary text-white">+ New Contacts</Link>
                    </div>
                </div>            
                <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="All">
                        <div className="row dz-scroll  loadmore-content searchable-items list" id="allContactListContent">
                            <div className="items items-header-section">
                            </div>
                            {item.map((data, ind)=>(
                                <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items" key={ind}>
                                    <div className="card contact-bx item-content">
                                        <div className="card-header border-0">
                                            <div className="action-dropdown">
                                                <Dropdown className="dropdown">
                                                    <Dropdown.Toggle as="a" className="i-false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end" drop='start'>
                                                        <Dropdown.Item className="dropdown-item edit">Edit</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item delete">Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="card-body user-profile">
                                            <div className="image-bx">
                                                {ind % 2 === 0 ? 
                                                    <img src={data.image} data-src="images/users/pic1.jpg" alt="" className="rounded-circle" />
                                                :
                                                    <span className={`icon-placeholder bgl-success rounded-circle ${data.change}`}>{data.name}</span>
                                                }
                                                <span className="active"></span>
                                            </div>
                                            <div className="media-body user-meta-info">
                                                <h6 className="fs-20 font-w500 my-1"><Link to={"app-profile"} className="text-black user-name" data-name="Alan Green">{data.title}</Link></h6>
                                                <p className="fs-14 mb-3 user-work" data-occupation="UI Designer">{data.subtitle}</p>
                                                <ul>
                                                    <li><Link to={"#"}><i className="fa fa-phone" aria-hidden="true"></i></Link></li>
                                                    <li><Link to={"#"}><i className="las la-sms"></i></Link></li>
                                                    <li><Link to={"#"}><i className="fas fa-video" aria-hidden="true"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row mb-5">
                            <div className="col-xl-12 d-flex justify-content-center">
                                {/* <Link to={"#"} className="btn btn-outline-primary dz-load-more" id="allContactList"  rel="ajax/contact-list.html">Load More</Link> */}
                                <Link to={"#"} className="btn btn-outline-primary dz-load-more"  onClick={() => onClick()}>
                                    Load More <span>&#187;</span>{" "}
                                    {refresh && <i className="fa fa-refresh"></i>}
                                </Link>
                            </div>
                        </div>    
                    </Tab.Pane>
                    <Tab.Pane eventKey="Pending">
                        <div className="row dz-scroll  loadmore-content searchable-items list" id="allContactListContent">
                                <div className="items items-header-section">
                                </div>
                                {cardBlog2.map((data, ind)=>(
                                    <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items" key={ind}>
                                        <div className="card contact-bx item-content">
                                            <div className="card-header border-0">
                                                <div className="action-dropdown">
                                                    <Dropdown className="dropdown">
                                                        <Dropdown.Toggle as="a" className="i-false">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end" drop='start'>
                                                            <Dropdown.Item className="dropdown-item edit">Edit</Dropdown.Item>
                                                            <Dropdown.Item className="dropdown-item delete">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="card-body user-profile">
                                                <div className="image-bx">
                                                    {ind % 2 === 0 ? 
                                                        <img src={data.image} data-src="images/users/pic1.jpg" alt="" className="rounded-circle" />
                                                    :
                                                        <span className={`icon-placeholder bgl-success rounded-circle ${data.change}`}>{data.name}</span>
                                                    }
                                                    <span className="active"></span>
                                                </div>
                                                <div className="media-body user-meta-info">
                                                    <h6 className="fs-20 font-w500 my-1"><Link to={"app-profile"} className="text-black user-name" data-name="Alan Green">{data.title}</Link></h6>
                                                    <p className="fs-14 mb-3 user-work" data-occupation="UI Designer">{data.subtitle}</p>
                                                    <ul>
                                                        <li><Link to={"#"}><i className="fa fa-phone" aria-hidden="true"></i></Link></li>
                                                        <li><Link to={"#"}><i className="las la-sms"></i></Link></li>
                                                        <li><Link to={"#"}><i className="fas fa-video" aria-hidden="true"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row mb-5">
                                <div className="col-xl-12 d-flex justify-content-center">
                                    <Link to={"#"} className="btn btn-outline-primary dz-load-more" >Load More</Link>
                                </div>
                            </div> 
                    </Tab.Pane>
                </Tab.Content>   
            </Tab.Container>                                    
            <Modal  show={show} onHide={handleClose} centered>                
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title fs-20">Add Contact</h4>
                        <button type="button" className="close" onClick={handleClose}><span>&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <i className="flaticon-cancel-12 close" data-bs-dismiss="modal"></i>
                        <div className="add-contact-box">
                            <div className="add-contact-content">
                                <form id="addContactModalTitle">
                                    <div className="image-placeholder">
                                        <div className="avatar-edit">
                                            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                                            <label for="imageUpload"></label>
                                        </div>
                                        <div className="avatar-preview">
                                            <div id="imagePreview" style={{backgroundImage: 'url(' + user +')'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-black font-w500">Name</label>
                                        <div className="contact-name">
                                            <input type="text" id="c-name" className="form-control" placeholder="Name" />
                                            <span className="validation-text"></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-black font-w500">Occupation</label>
                                        <div className="contact-occupation">
                                            <input type="text" id="c-occupation" className="form-control" placeholder="Occupation" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* <button id="btn-edit" className="float-left btn btn-primary">Save</button> */}

                        <button className="btn btn-danger" data-bs-dismiss="modal"> <i className="flaticon-delete-1"></i> Discard</button>

                        <button id="btn-add" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </Modal>     
        </>
    )
}
export default ContactCard;