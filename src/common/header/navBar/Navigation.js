import React from 'react'
import { Link } from 'react-router-dom'
/* --------------react Icon Import  start------------------*/
import { RiDashboard3Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
/* --------------react Icon Import  end------------------*/
/* --------------import css   start------------------*/
import "./Navigation.css"
/* --------------import css   end------------------*/
function Navigation() {
  return (
    <section>
      <div className='container'>
        <div >
          <ul className='d-flex navsbar'>
            <li className='nav-item active'>
              <span className='nav-icon px-2'><RiDashboard3Fill /></span><Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>Members <span className='px-2'><IoChevronDownSharp /></span></Link>
              <ul class="dropdown-content px-3">
                <li className='menus-items'>
                  <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"member-list/distributor"}>Distributor <span>(0)</span></Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"member-list/retailer"}>Retailer <span>(0)</span></Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"suspended-users"}>Suspended Uers
                  </Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"not-working-users"}>Not Working Users </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>Report <span className='px-2'><IoChevronDownSharp /></span></Link>
              <ul class="dropdown-content px-3">
                <li className='menus-items'>
                  <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"all-transactions-report"}> All Transaction Report </Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"/pancard-report"}> Pending Report
                  </Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={""}>Upi Transfer Report
                  </Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"/pending-transaction-report"}>Pending Transaction </Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"/operator-wise-sale"}>Operator Wise Sale </Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={"/ledger-report"}> Ledger Report </Link>
                </li>
                <li className='menus-items sub-dropdown-list'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to={""}>Payment Report </Link>
                  <span className='pe-2'><MdKeyboardArrowRight /></span>
                  <ul className='sub-dropdown-menus  px-3'>
                    <li className='menus-items'>
                      <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                      <Link to={"/debit-report"}> Debit Report </Link>
                    </li>
                    <li className='menus-items'>
                      <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                      <Link to={"/credit-report"}> Credit Report </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>Payment <span className='px-2'><IoChevronDownSharp /></span></Link>
              <ul class="dropdown-content px-3">
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
              </ul>
            </li>
            <li className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>Dispute <span className='px-2'><IoChevronDownSharp /></span></Link>
              <ul class="dropdown-content px-3">
                <li className='menus-items'>
                  <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to='pending-dispute'>Pending Dispute</Link>
                </li>
                <li className='menus-items'>
                  <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                  <Link to='solve-dispute'>Solve Dispute</Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>User Income  <span className='px-2'><IoChevronDownSharp /></span></Link>
              <ul class="dropdown-content px-3">
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
              </ul>
            </li>
            <div className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>
              <span>BAL :</span>
              <span>0.00 </span>
              <span>Aeps :</span>
              <span>0.00 </span>
            </Link></div>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navigation
