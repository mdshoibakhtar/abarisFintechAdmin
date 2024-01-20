import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
/* --------------react Icon Import  start------------------*/
import { GiHamburgerMenu } from "react-icons/gi";
import { GiRingingBell } from "react-icons/gi";
/* --------------react Icon Import  end------------------*/
import './TopHeader.css'
/* --------------images Import  start------------------*/
import logo from "../../../assets/logo/merchant.paypanda-logo.png"
import profile from "../../../assets/logo/profile-pic.png"
import ProfileQuerry from './toggleAside/TogleAside';
import TopHeaderMenus from './topHeaderCategMenus/TopHeaderMenus';
/* --------------images Import  end------------------*/


function TopHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className='bg-linerGrd'>
            <Container>
                <div className='d-flex justify-content-between align-items-center p-2'>
                    <div className='left'>
                        <Link to={"/"}>
                            <img src={logo} alt='logo' width={100} />
                        </Link>
                    </div>
                    <div className='mid'>
                        <TopHeaderMenus/>
                    </div>
                    <div className='right'>
                        <div className='d-flex'>
                            <div className='px-2'>
                                <span className='count px-1 text-light rounded'>0</span>
                            </div>
                            <div className='px-2'>
                                <span className='notification' >
                                    <span className='pulse'>
                                        <div class="circle pulse green"></div>
                                    </span>
                                    <GiRingingBell />
                                </span>
                            </div>
                            <div className='px-2'><span className='profile bg-light p-2 rounded-circle'>
                                <Link to={"/agent"}>
                                <img src={profile} alt='profile' width={20} />
                                </Link>
                            </span></div>
                            <div className='px-2'><span className='profile text-light' >
                                <GiHamburgerMenu onClick={handleShow} />
                            </span></div>
                        </div>

                    </div>
                </div>
            </Container>
            {['end'].map((placement, idx) => (
                    <ProfileQuerry key={idx} placement={placement} name={placement} show={show} handleClose={handleClose} />
                ))}
        </section>
    )
}

export default TopHeader
