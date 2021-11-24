import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHome, faChess, faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

import { CSSTransition } from "react-transition-group";


const SideBar = (props) => {
    const [sidebarPosition, setSidebarPosition] = useState(false);
    const [animateTextTransition, setAnimateTextTransition] = useState(false);
    const timeout = 200;

    const resetAnimatedText = () => {
        setTimeout(() => {
            setAnimateTextTransition(false);
        }, 200);
    }

    const onMinimizeSidebar = () => {
        setSidebarPosition(true);

        setAnimateTextTransition(true);
        resetAnimatedText();
    }

    const onMaximizeSidebar = () => {
        setSidebarPosition(false);

        setAnimateTextTransition(true);
        resetAnimatedText();
    }

    return (
        <div className="sidebar">
            <ProSidebar collapsed={sidebarPosition}>
                <SidebarHeader className="side_bar_header">
                    {sidebarPosition ? 
                        <CSSTransition in={animateTextTransition} timeout={timeout} classNames="title_transition">
                            <>
                            <MenuItem className="side_bar_nav_title">RM</MenuItem>
                            <MenuItem className="side_bar_nav_icon" icon={<FontAwesomeIcon icon={faArrowRight} onClick={onMaximizeSidebar}/>}></MenuItem>
                            </>
                        </CSSTransition>
                    :
                        <CSSTransition in={animateTextTransition} timeout={timeout} classNames="title_transition">
                            <>
                            <MenuItem className="side_bar_nav_title">Risk Management</MenuItem>
                            <MenuItem className="side_bar_nav_icon"  icon={<FontAwesomeIcon icon={faArrowLeft} onClick={onMinimizeSidebar}/>}></MenuItem>
                            </>
                        </CSSTransition>
                    }
                </SidebarHeader>
                <Menu iconShape="square">
                    <MenuItem icon={<FontAwesomeIcon icon={faHome} className="small_icon"/>}>Home</MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faBalanceScale} className="small_icon"/>}>Risk Tolerance</MenuItem>
                    <SubMenu title="Examples" icon={<FontAwesomeIcon icon={faChess} className="small_icon" />}>
                        <MenuItem>Game 1</MenuItem>
                        <MenuItem>Game 2</MenuItem>
                    </SubMenu>
                </Menu>
                <SidebarFooter className="bottom_link">
                    <a href="https://github.com/stevenr74/">
                        <FontAwesomeIcon icon={faGithub} size="48px" className="github_link"/>
                    </a> 
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default SideBar;