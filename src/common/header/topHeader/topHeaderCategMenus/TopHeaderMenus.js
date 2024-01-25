import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMastercard } from "react-icons/tb";
import { IoChevronDownSharp } from 'react-icons/io5'
import { GrSettingsOption } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowRight, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

import "./TopHeaderMenu.css"
import "../../../../assets/css/responsive.css"
import { navigationData } from '../navigationAside/navigationData/NavigationData';

function TopHeaderMenus() {
    return (
        <section>
            <div className='container'>
                <div >
                    <ul className='d-flex navsbar'>
                        {navigationData?.menus?.map((item, i) => {
                            return <li className='nav-item'><span className='nav-icon px-2'>{item?.icon}</span><Link>{item.title} <span className='px-2'><IoChevronDownSharp /></span></Link>
                                <ul class="dropdown-content  px-3" id='top_h_dropDown'>
                                    {item?.subMenus?.map((subItem) => {
                                        return <li className='menus-items'>
                                            <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                                            <Link to={subItem?.path}>{subItem?.title}</Link>
                                        </li>
                                    })}
                                </ul>
                            </li>
                        })}
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default TopHeaderMenus
