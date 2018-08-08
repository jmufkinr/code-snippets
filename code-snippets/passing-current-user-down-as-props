// Page Content File

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ""
    };
  }
  componentWillReceiveProps(futureProps) {
    if (futureProps.webSocketConnection !== this.props.webSocketConnection) {
      this.setState({
        webSocketConnection: futureProps.webSocketConnection
      })
    }
  }
  //removing for brevity
}
export default PageContent;

//**************************************************************************************************************************************************/
//Project Proposal Form Components File  

class ProposalFormPartOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {}
      , departments: {}
    }
  }
  componentWillReceiveProps() {
    if (this.props.state.currentUser)
      departmentService
        .readById(this.props.state.currentUser.departmentId)
        .then(response => {
          console.log(response)
          this.setState({ departments: response.item })
        });
  }

  //removing for brevity
}

export default ProposalFormPartOne;

//************************************************************************************************************************************************ */
//Project Proposal Wizard File

class ProjectProposalWizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        formData: {
            requestorUserId: "",
            departmentId: ""
        }
        , currentUser: {}
        // removing for brevity
    }

//removing for brevity

}
    // page will re-render twice, the second time the props will come through
    componentWillReceiveProps(futureProps) {
      if (this.props.match.params.id) {
        if (futureProps.currentUser.isItAdmin !== this.props.currentUser.isItAdmin) {
          this.setState({
            isItAdmin: futureProps.currentUser.isItAdmin,
            activeTab: futureProps.currentUser.isItAdmin ? "#tab1-4" : "#tab1-3",
            currentUser: futureProps.currentUser
          })
        }
      } else { // user is making a new request
        this.setState({
          // allows access to tab 4 or not
          isItAdmin: futureProps.currentUser.isItAdmin,
          activeTab: '#tab1-1',
          currentUser: futureProps.currentUser
        });
      }
    }
  } 

  export default ProjectProposalWizard;

