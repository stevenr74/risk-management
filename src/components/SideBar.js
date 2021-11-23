import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const SideBar = (props) => {
    const [sidebarPosition, setSidebarPosition] = useState(false);

    const onMinimizeSidebar = () => {
        setSidebarPosition(true);
    }

    const onMaximizeSidebar = () => {
        setSidebarPosition(false);
    }

    return (
        <div className="sidebar">
            <ProSidebar collapsed={sidebarPosition}>
                <SidebarHeader className="side_bar_header">
                    
                    {sidebarPosition ? 
                        <>
                        <MenuItem className="side_bar_nav_title">RM</MenuItem>
                        <MenuItem className="side_bar_nav_icon" icon={<FontAwesomeIcon icon={faArrowRight} onClick={onMaximizeSidebar}/>}></MenuItem>
                        </>
                    :
                        <>
                        <MenuItem className="side_bar_nav_title">Risk Management</MenuItem>
                        <MenuItem className="side_bar_nav_icon"  icon={<FontAwesomeIcon icon={faArrowLeft} onClick={onMinimizeSidebar}/>}></MenuItem>
                        </>
                    }
                </SidebarHeader>
                <Menu iconShape="square">
                    <MenuItem icon={<FontAwesomeIcon icon={faGithub} />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FontAwesomeIcon icon={faGithub} />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
                <SidebarFooter className="bottom_link">
                    <MenuItem icon={<FontAwesomeIcon icon={faGithub}/>}></MenuItem>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default SideBar;