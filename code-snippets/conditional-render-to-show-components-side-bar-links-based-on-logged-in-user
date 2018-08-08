import React from "react";
import { Link } from "react-router-dom";
import SidebarLinksGroupedByRole from "./SidebarLinksGroupedByRole";
import { groupedRoutes } from "../constants/dashboard-routes.constant";
import { Route, withRouter } from "react-router-dom";

const baseUrl = process.env.REACT_APP_ADMIN_DATA_URL;

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ''
    }
  }

  componentWillReceiveProps(futureProps) {
    if (futureProps.currentUser !== this.props.currentUser) {
      this.setState({
        currentUser: futureProps.currentUser
      })
    }
  }

  render() {
    return (
      <React.Fragment>
      
      {/* Removed for Brevity */}


{/* Start of (It-Admin / board memebers/ Project Manager) Section */}
{
  this.state.currentUser.isItAdmin ?
    <Route
      render={props => (
        <SidebarLinksGroupedByRole
          groupedRoutes={groupedRoutes.itAdmin}
        />
      )}
    />
    : null
}
{
  this.state.currentUser.isBoardMember ?
    <Route
      render={props => (
        <SidebarLinksGroupedByRole
          groupedRoutes={groupedRoutes.boardMember}
        />
      )}
    />
    : null
}
{
  this.state.currentUser.isProjectManager ?
    <Route
      render={props => (
        <SidebarLinksGroupedByRole
          groupedRoutes={groupedRoutes.projectManager}
        />
      )}
    />
    : null
}
{/* End of (It-Admin / board memebers/ Project Manager) Section */}

{/* Removed for Brevity */}

</React.Fragment>
    );
  }
}

export default withRouter(SidebarLeft);


