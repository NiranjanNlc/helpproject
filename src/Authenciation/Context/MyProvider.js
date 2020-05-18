import MyContext from './MyContext';

class MyProvider extends Component 
{
    state = {
        isAuthenticated: false,
        currentUser: {
          userId: "",
          email: ""
        },
        intervalName: ""
    };

    render() {
        return (
            <MyContext.Provider>
                {this.props.children}
            </MyContext.Provider> 
        )
    }
}