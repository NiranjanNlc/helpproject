import * as types from "./types";
import store from '../store';
import httpService from '../httpService'
export function login(user) {
  return {
    type: types.LOGIN,
    payload: user
  }
}

export function logout(user) {
  return {
    type: types.LOGOUT,
    payload: user
  }
}
  export function refresh ()
   {
    return async function(dispatch)
    {
    refreshTokenInternal();
     const intervalName = setInterval(async () => {
       console.log("calculating the interval...")
         refreshTokenInternal();
     },180000); 
     console.log(intervalName)
     dispatch({ type: "TOKEN", payload:intervalName});
  }
}
    export function getAuthenticatedUser() 
    {
      return async function(dispatch)
      {
        console.log(" refreshing function called")
        return  await httpService.get("/profile/me")
        .then((response) => 
         {
           if (response.status === 200) 
           {
              const currentUser = response.data; 
            //    refreshTokenInternal();
            //  const intervalName = await setInterval(async () => {
            //    console.log("calculating the interval...")
            //      refreshTokenInternal();
            //  },180000); 
            //  console.log(intervalName)
            console.log(currentUser)
            dispatch({ type: "REFRESH", payload: currentUser,auth:true});
            }   
         }).catch((error) => 
         {
           console.log("user not  responded 200")
           console.log(error)
          performLogout();
         })
        }
    }
    export  async function  refreshTokenInternal() {
      console.log("refreshigh the token ")
                   
        await httpService.post("/api/auth/refresh")
        .then((response) => 
            {
              if (response.status === 200)
              {
                console.log("refreshed from server")
              } 
              else{
               // this.performLogout()
              }
            })
        .catch(() => 
        {
        console.log("couldnot refresh token")
        performLogout()
        })        
    }
  
    export function  performLogout() {
      return function(dispatch)
      {   
      const intervalName = store.getState().intervalName
      console.log(intervalName)
      if (intervalName) clearInterval(intervalName);
      dispatch({ type: "LOGOUT"});                   
      }
    }
  
