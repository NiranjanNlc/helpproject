import * as types from "../Actions/types";

const initialState = {
    
    isAuthenticated: false,
    currentUser:"",
    intervalName:""
   // loading:true
  };

  const Reducer = (state  , action) => {
    console.log("reducing the state")
    console.log(state)
    if(state ===undefined)
    {
        state = initialState;
    }
    switch (action.type) {
        
    case types.LOGIN:
        console.log("Autenciated")
        return{
            isAuthenticated: true,
            currentUser:"",
            intervalName:""     
        };
        break;
    case types.LOGOUT:
        return {
            isAuthenticated: false,
                currentUser:"",
                intervalName:""
        };
        break;
        case types.REFRESH:
            return Object.assign({}, state,  {
                isAuthenticated:true,
                currentUser:action.payload,
                intervalName:''
                //loading:false
                });
        case types.TOKEN:
                return Object.assign({}, state,  {
                        ...state,
                    intervalName: action.payload})

        default:
            return state;
    }
}
export default Reducer;