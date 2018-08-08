import PageHeader from "../../components/PageHeader"
import FileUploadModal from "../../components/FileUploadModal"

const baseUrl = process.env.REACT_APP_ADMIN_DATA_URL;

class UsersDetail extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.match.params.id) {
      this.state = {
        editing: true
        , isDataPresent: false
        , errors: {}
        , formData: {}
      }
    } else {
      this.state = {
        editing: false
        , redirectCheck: false
        , formData: {

          // removing for brevity

          isBoardMember: false
          , isItAdmin: false
          , isProjectManager: false

          //removing for brevity

        }
        , isDataPresent: false
        , errors: {}
      }
    }
  }

  //removing for brevity
  componentDidMount() {
    usersService.getProfile()
      .then(response => {
        this.setState({
          currentUser: response
        })
      })
    if (this.props.match.params.id) {
      usersService.readById(this.props.match.params.id)
        .then(data => {
          if (!data.notificationOptions) {
            data.notificationOptions = {}
          }
          this.setState({
            formData: {
              _id: data._id
              , firstName: data.firstName

              //removing for brevity

            }
            , isDataPresent: true
            , editing: true
          })
        })
    }
  }


  submitOnClickHandler(event) {
    event.preventDefault();
    // you cannot change or make a new profile that is not your own
    if (this.props.match.params.id !== this.state.currentUser._id) {
      console.log('Go to Register Page to Make New User. Cannot make changes to other\'s profiles.')
      return;
    } else {
      usersService.create(data)
        .then(response => {
        })
    }
  }

  render() {

    // conditional render needed here
    // if edit button clicked to go to edit page and data not yet recieved null the render until data recieved.

    if (!this.state.isDataPresent && this.state.editing) {
      return null;
    } else {

      return (
        <React.Fragment>
          <PageHeader parentsTitle="User Details" parentsDescription="Full User Info" />
        </React.Fragment>
      )
    }
  }
}
export default UsersDetail;
