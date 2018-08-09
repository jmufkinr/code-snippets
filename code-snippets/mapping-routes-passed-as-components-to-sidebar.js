// SIDE BAR LINKS GROUPED BY ROLE FILE

import React from "react";
import { Link } from "react-router-dom";
// import {groupedRoutes} from "./dashboard-routes.constant"
const baseUrl = process.env.REACT_APP_ADMIN_DATA_URL;
class SidebarLinksGroupedByRole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemArray: this.props.groupedRoutes
    }    
  }
  render() {
    const submenuItems = this.state.itemArray && this.state.itemArray.map(item => {
      return ( 
        <React.Fragment>              
          <li key={item.name}>
            <Link to={baseUrl + item.route}>{item.name}</Link>
          </li>   
          </React.Fragment>       
      )
    })
    return (
      <React.Fragment>
        <li class="submenu active">
          <a href="javascript:void(0);">
            <span class="icon">
              <i class="fa fa-home" />
            </span>
            <span class="text">Admin IT Roles</span>
            <span class="arrow" />
            <span class="selected" />
          </a>
          <ul >
          {submenuItems}
          </ul>
        </li>
      </React.Fragment>
    )
  }
}
export default SidebarLinksGroupedByRole;

//************************************************************************************************************************************
//SIDEBAR LEFT FILE


import React from 'react'
import { Link } from 'react-router-dom'
import SidebarLinksGroupedByRole from "./SidebarLinksGroupedByRole"
import { routes, groupedRoutes } from "../constants/dashboard-routes.constant"
import { BrowserRouter, Route } from "react-router-dom";

{/* Start of Admin It Section */ }

<Route render={props => <SidebarLinksGroupedByRole groupedRoutes={groupedRoutes.itAdmin} />} />

{/* End of Admin IT Section */ }

