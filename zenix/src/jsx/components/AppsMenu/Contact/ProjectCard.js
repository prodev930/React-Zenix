import React from 'react';
import {Link} from 'react-router-dom';

import logo1 from './../../../../images/logos/pic1.jpg';
import logo2 from './../../../../images/logos/pic2.jpg';
import pic1 from './../../../../images/users/pic1.jpg';
import pic2 from './../../../../images/users/pic2.jpg';
import pic3 from './../../../../images/users/pic3.jpg';
import pic4 from './../../../../images/users/pic4.jpg';
import pic5 from './../../../../images/users/pic5.jpg';
import pic6 from './../../../../images/users/pic6.jpg';
import pic7 from './../../../../images/users/pic7.jpg';

const projectBlog = [
    {image: logo1, change:'badge-success', changeProg:'bg-primary'},
    {image: logo2, change:'badge-info', changeProg:'bg-info'},
    {image: logo1, change:'badge-danger', changeProg:'bg-danger'},
    {image: logo2, change:'badge-secondary', changeProg:'bg-warning'},
];

function ProjectCard(){
    return(
        <>
            <div className="row">
                {projectBlog.map((item, index)=>(
                    <div className="col-xl-6 col-lg-12" key={index}>
                        <div className="card project-card">
                            <div className="card-body">
                                <div className="d-flex mb-4 align-items-start">
                                    <div className="dz-media me-3">
                                        <img src={item.image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="me-auto">
                                        <p className="text-primary mb-1">#P-000441425</p>
                                        <h5 className="title font-w600 mb-2"><Link to={"post-details"} className="text-black">Redesign Zenix Mobile App</Link></h5>
                                        <span>We Create Your Dream</span>
                                    </div>
                                    <span class={`badge d-sm-inline-block d-none ${item.change}`}>Compeleted</span>
                                </div>
                                <p className="mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div className="row mb-4">
                                    <div className="col-sm-6 mb-sm-0 mb-3 d-flex">
                                        <div className="dt-icon bgl-info me-3">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 5H18V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3V5H8V3C8 2.73478 7.89464 2.48043 7.70711 2.29289C7.51957 2.10536 7.26522 2 7 2C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V9H22V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7957 5 19 5Z" fill="#92caff"/>
                                                <path d="M2 19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7957 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V11H2V19Z" fill="#51A6F5"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <span>Start Date</span>
                                            <p className="mb-0 pt-1 font-w500 text-black">Tuesday,Aug 15th 2020</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 d-flex">
                                        <div className="dt-icon me-3 bgl-danger">
                                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.6601 8.6858C18.5437 8.44064 18.2965 8.28427 18.025 8.28427H10.9728L15.2413 1.06083C15.3697 0.843469 15.3718 0.573844 15.2466 0.354609C15.1214 0.135375 14.8884 -9.37014e-05 14.6359 4.86277e-08L8.61084 0.000656299C8.3608 0.000750049 8.12957 0.1335 8.00362 0.349453L0.0958048 13.905C-0.0310859 14.1224 -0.0319764 14.3911 0.0934142 14.6094C0.218805 14.8277 0.451352 14.9624 0.703117 14.9624H7.71037L5.66943 23.1263C5.58955 23.4457 5.74213 23.7779 6.03651 23.9255C6.13691 23.9757 6.24459 24 6.35123 24C6.55729 24 6.75923 23.9094 6.89638 23.7413L18.5699 9.43186C18.7415 9.22148 18.7766 8.93105 18.6601 8.6858V8.6858Z" fill="#FF4C41"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <span>Deadline</span>
                                            <p className="mb-0 pt-1 font-w500 text-black">Tuesday,Sep 29th 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="me-auto mb-4">
                                        <p className="mb-2 font-w500 text-black">Members</p>
                                        <ul className="users-lg">
                                            <li><img src={pic1} alt="" /></li>
                                            <li><img src={pic2} alt="" /></li>
                                            <li><img src={pic3} alt="" /></li>
                                            <li><img src={pic4} alt="" /></li>
                                            <li><img src={pic5} alt="" /></li>
                                            <li><img src={pic6} alt="" /></li>
                                            <li><img src={pic7} alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="text-center border-bx me-3">
                                            <span>Budget</span>
                                            <p className="mb-0 pt-1 font-w500 text-black">$505,785</p>
                                        </div>
                                        <div className="text-center border-bx">
                                            <span>Expenses</span>
                                            <p className="mb-0 pt-1 font-w500 text-black">$458,388</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div>Questions:<span className="text-black ms-3 font-w600">56</span></div>
                                        <div>Comments:<span className="text-black ms-3 font-w600">200</span></div>
                                    </div>
                                    <div className="col-6">
                                        <h6>Progress
                                            <span className="pull-right">75%</span>
                                        </h6>
                                        <div className="progress ">
                                            <div class={`progress-bar progress-animated ${item.changeProg}`} style={{width: "75%", height:"6px"}} role="progressbar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

             </div>   
        </>
    )
}
export default ProjectCard;