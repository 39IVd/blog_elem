import React from "react";
import { Link } from "gatsby";
import Sidebar from "react-sidebar";
import NavLinks from "./navlinks";
import SocialLinks from "./sociallinks";
import Logo from "./logo";
import { Hamburger } from "./icons";

import "../style/navbar.less";

function SidebarContents() {
    return (
        <div className="sidebar-contents">
            <div className="logo">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="links text-secondary">
                <NavLinks />
            </div>
            <div className="social-links">
                <SocialLinks />
            </div>
        </div>
    );
}

class Navbar extends React.Component {
 
    
    render() {
        const placeholder = this.props.placeholder;
        return (
            <React.Fragment>
                <Sidebar
                    sidebar={<SidebarContents />}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    sidebarClassName="sidebar-content"
                    styles={{
                        sidebar: {
                            zIndex: 101,
                            position: "fixed"
                        },
                        overlay: {
                            zIndex: 100
                        },
                        dragHandle: {
                            position: "fixed",
                            zIndex: "99999"
                        }
                    }}
                >
                    <span></span>
                </Sidebar>
                
            </React.Fragment>
        );
    }
}

export default Navbar;
