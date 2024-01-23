import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import "../NavigationAside.css"
import { Link } from 'react-router-dom';
function NavigationItem({ item,close ,setOpen}) {
   
    if (item?.subMenus) {
        return (
            <div className={item.active ? "sidebar-item active" : "sidebar-item"}>
                <div className='sidebar-title' onClick={() => { setOpen(item.id ,!item.active) }}>
                    <div className='bgClr d-flex align-items-center justify-content-between'>
                    <div className=''  >
                        <span className='me-3 mb-2'>{ item.icon && item.icon}</span>
                        <span>
                            {item?.title}
                        </span>
                    </div>
                    <IoIosArrowDown className='togglebtn' />
                    </div>
                    
                </div>
                <div className='sidebar-content'>
                <div className='sidebar-title'>
                    <div className='d-flex align-items-center'>
                        <ul className='list-none'>
                            {item?.subMenus?.map((submenu,i)=>{
                                 return <>
                                 <li onClick={close}>
                                    <Link to={submenu?.path} className='text-decoration-none '>{submenu?.title}</Link>
                                 </li>
                                 </>
                            })}
                        </ul>
                    </div>
                </div>
                </div>
            </div >
        )
    }
    else {
        return (
            <Link to={""} className='sidebar-item'>
                < div className='sidebar-tittle'>
                    {item.title}
                </div>
            </Link>
        )
    }
    

}

export default NavigationItem
