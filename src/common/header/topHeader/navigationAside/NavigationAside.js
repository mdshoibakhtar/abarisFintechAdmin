import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import "./NavigationAside.css"
import { navigationData } from './navigationData/NavigationData'
import NavigationItem from './navigationItem/NavigationItem'
function NavigationAside({ name, ...props }) {
    const [state, setState] = useState(navigationData)
    // const [open, setOpen] = useState(false)
    const setOpen = (id) => {
        const clone = { ...state }
        const cone = [...clone.menus]
        const filterd = cone.map((item ,str) => {
            if (item.id === id) {
                return { ...item, active: !item.active }
            } else {
                return { ...item, active: false }
            }
        })
        clone.menus = filterd
        setState(clone)
    }
    return (
        <Offcanvas show={props.rShow} onHide={props.rHandleClose} {...props} id='right-aside'>
            <Offcanvas.Body>
                <div className="form-body " id='right-aside-table'>
                    {state?.menus?.map((item, index) => <NavigationItem setOpen
                        ={setOpen} key={index} item={item} close={props.rHandleClose} />)}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default NavigationAside
