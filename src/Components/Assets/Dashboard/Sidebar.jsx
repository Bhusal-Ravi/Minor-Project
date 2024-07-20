import React from 'react'
import 
{ BsGrid1X2Fill, BsPeopleFill, 
  }
 from 'react-icons/bs'
 import { GoSidebarCollapse } from "react-icons/go";
 import { MdBugReport } from "react-icons/md";
 import { GoLaw } from "react-icons/go";
 import { MdAdminPanelSettings } from "react-icons/md";
 import { MdOutlinePending } from "react-icons/md";
 import { GrUserAdmin } from "react-icons/gr";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                < GoSidebarCollapse className='icon_header'/> SIDEBAR
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> UserDetails
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdAdminPanelSettings className='icon'/> RegisterAdmin
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlinePending className='icon'/> PendingRequests
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <GrUserAdmin className='icon'/> AdminDashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdBugReport  className='icon'/> Report
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <GoLaw className='icon'/> LandLaws
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar