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

function TopHeaderMenus() {
    return (
        <section>
            <div className='container'>
                <div >
                    <ul className='d-flex navsbar'>
                        <li className='nav-item'><span className='nav-icon px-2'><TbBrandMastercard /></span><Link>Master <span className='px-2'><IoChevronDownSharp /></span></Link>
                            <ul class="dropdown-content  px-3" id='top_h_dropDown'>
                                <li className='menus-items'>
                                    <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Bank Master </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Role Master </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Services Master
                                    </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Payment methods Master</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Payout Beneficiary Master</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Agent Onboarding Master</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Contact Enquiry
                                        Master</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Company Staff Permissions    Master</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Cashfree Gateway Master</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"page-not-found"}>Broadcast Master</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'><span className='nav-icon px-2'><FaBookReader /></span><Link>Master Api <span className='px-2'><IoChevronDownSharp /></span></Link>
                            <ul class="dropdown-content top_h_dropDown px-3" id='top_h_dropDown'>
                                <li className='menus-items'>
                                    <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"all-transactions-report"}> Provider Master </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"/pancard-report"}> API Master
                                    </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={""}>Number Seris Master
                                    </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"/pending-transaction-report"}>Pending Transaction </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"/operator-wise-sale"}>State Wise APIs</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"/ledger-report"}> Backup API </Link>
                                </li>
                                <li className='menus-items sub-dropdown-list'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={""}>API Switching </Link>
                                    {/* <span className='pe-2'><MdKeyboardArrowRight /></span> */}
                                    {/* <ul className='sub-dropdown-menus  px-3'>
                                        <li className='menus-items'>
                                            <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                            <Link to={"/debit-report"}> Debit Report </Link>
                                        </li>
                                        <li className='menus-items'>
                                            <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                            <Link to={"/credit-report"}> Credit Report </Link>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"/ledger-report"}> User Operator Limit
                                    </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to={"/ledger-report"}> API Vendor Payment
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'><span className='nav-icon px-2'><GrSettingsOption /></span><Link>Settings <span className='px-2'>{/* <IoChevronDownSharp /> */}</span></Link>
                            {/* <ul class="dropdown-content px-3">
                                <li className='menus-items'>
                                    <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to="balance-trasnfer">Balance Transfer</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to="balance-return-request"> Balance Return Request</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to="payment-request-view">Payment Request View
                                    </Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to="payment-request">Payment Request </Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className='nav-item'><span className='nav-icon px-2'><CgWebsite /></span><Link>Website Master <span className='px-2'>{/* <IoChevronDownSharp /> */}</span></Link>
                            {/* <ul class="dropdown-content px-3">
                                <li className='menus-items'>
                                    <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to='pending-dispute'>Pending Dispute</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to='solve-dispute'>Solve Dispute</Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className='nav-item'><span className='nav-icon px-2'><FaWhatsapp /></span><Link>Whatsapp <span className='px-2'>{/* <IoChevronDownSharp /> */}</span></Link>
                            {/* <ul class="dropdown-content px-3">
                                <li className='menus-items'>
                                    <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to='user-income/distributor'>Distributor Income</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to='income/user-income/retailer'> Retailer Income</Link>
                                </li>
                                <li className='menus-items'>
                                    <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                                    <Link to='income/my-income'>My Income
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TopHeaderMenus
