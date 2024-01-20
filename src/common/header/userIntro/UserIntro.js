import React from 'react'
/* --------------react Icon Import  start------------------*/
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
/* --------------react Icon Import  end------------------*/
/* -------------- css Import  start------------------*/
import "./UserIntro.css"
/* --------------css Import  end------------------*/

import graph1 from "../../../assets/graph/bar-graph.png"

function UserIntro() {
    return (
        <section className='bg-userIntro py-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-12'>
                        <div className='left'>
                            <div className=''>
                                <h4 >HI Rahul Sharma Welcome Back ! </h4>
                                <span >Dashboard <span><MdOutlineKeyboardArrowRight /></span> Dashboard</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='rightPage d-flex'>
                            <div className='right'>
                                <div className='content'>
                                    <span>Total Safe</span>
                                </div>
                                <div className='content'>
                                    <span><b>0.00</b></span>
                                </div>
                            </div>
                            <div class="ml-3 mt-2">
                               <div className='px-4'> <span class="sparkline_bar"><img src={graph1} alt='graph'/></span></div>
                            </div>
                            <div className='right'>
                                <div className='content'>
                                    <span>Today  Aeps Sale</span>
                                </div>
                                <div className='content'>
                                    <span><b>0.00</b></span>
                                </div>
                            </div>
                            <div class="ml-3 mt-2">
                               <div className='px-4'> <span class="sparkline_bar"><img src={graph1} alt='graph'/></span></div>
                            </div>
                            <div className='right'>
                                <div className='content'>
                                    <span>Today  Profit</span>
                                </div>
                                <div className='content'>
                                    <span><b>0.00</b></span>
                                </div>
                            </div>
                            <div class="ml-3 mt-2">
                               <div className='px-4'> <span class="sparkline_bar"><img src={graph1} alt='graph'/></span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserIntro
