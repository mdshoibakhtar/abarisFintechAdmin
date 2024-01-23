import React, { useEffect, useState } from 'react'
import { Offcanvas } from "react-bootstrap"

import Aos from "aos"
import "aos/dist/aos.css"

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const m = new Date();
    let getmonthName = monthName[m.getMonth()]
    return `${date}/${getmonthName}/${year}`;
}


function ProfileQuerry({ name, ...props }) {
    const [currentDate] = useState(getDate());
    const date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const getDayName = (inputDate) => {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayIndex = inputDate.getDay();
        return dayNames[dayIndex];
    };
    const dayName = getDayName(new Date(date));
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <Offcanvas show={props.show} onHide={props.handleClose} {...props} >
                <Offcanvas.Header closeButton id='modle-header'>
                    <Offcanvas.Title><div className="App" data-aos="zoom-out-up">
                        <h2 data-aos="zoom-in"> {time}</h2>
                        <div className='d-flex' data-aos="zoom-out">
                            <h4 align="center"> {dayName}</h4>
                            {""}
                            &nbsp;
                            <p>{currentDate}</p>
                        </div>

                    </div></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="form-body "  id='form-table'> 
                        <table width={100 + "%"}>

                            <tbody>
                                <tr className='text-center border-top-primary border-bottom pt-4 pb-2 '>
                                    <td><strong>Normal Balance</strong></td>
                                    <td><strong>0.00</strong></td>
                                </tr>
                                <tr className='text-center border-top-primary border-bottom pt-4 pb-2'>
                                    <td><strong>Sms Balance
                                    </strong></td>
                                    <td><strong>0.00</strong></td>
                                </tr>
                                <tr className='text-center border-top-primary border-bottom pt-4 pb-2'>
                                    <td><strong>Aeps Balance
                                    </strong></td>
                                    <td><strong>0.00</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Offcanvas.Body>

                <div className="modal-footer-1">
                    {/* <button type="button" className="btn btn-secondary mr-3" >Close</button>
                    <a href="#" className="btn btn-success" id="update_anchor_url px-3"><i className="fas fa-edit" /> Edit</a>
                    <a href="#" className="btn btn-danger" id="kyc_anchor_url"><i className="far fa-file" /> Kyc</a> */}
                </div>

            </Offcanvas>
        </>
    )
}

export default ProfileQuerry
