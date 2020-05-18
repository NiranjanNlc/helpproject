import store from "./store/index"; 
import  authStore from "./store/modules/authStore";
import httpResource from "./httpResource";
 
export const intervalMilliSeconds = 1800000; // 30 minutes
class huttils
{
 parseApierror(error) {
 console.log("parseapierror", error);
  try {
    if (
      error &&
      error.hasOwnProperty("response") &&
      error.response.hasOwnProperty("data")
    ) {
      const apierror = error.response.data;
      return {
        status: apierror.status,
        statusCode: error.status,
        timestamp: apierror.timestamp,
        message: apierror.message
      };
    }
  } catch (parseError) {
    return {
      status: "INTERNAL_SERVER_ERROR",
      statusCode: 500,
      timestamp: new Date(),
      message: "Server is not responding.."
    };
  }
}
isUserLoggedIn()
{
 if(authStore.getters.getIsAuthenticated(this))
 {
  console.log("user was authenciated")
  console.log("user was authenciated"+authStore.getters.getIsAuthenticated(this))
  return true;
 }
 console.log("user was authenciated"+authStore.getters.getIsAuthenticated(this))
 return false;
}
 performLogout()  {
  console.log(authStore.getters.getIsAuthenticated(authStore.state))
const intervalName = authStore.state.intervalName;
console.log(intervalName)
 if (intervalName) clearInterval(intervalName);
 authStore.mutations.setIsAuthenticated(authStore.state,false);
 authStore.mutations.clearCurrentUser(authStore.state)
 //authStore.commit("setIsAuthenticated", false);
 //authStore.commit("clearCurrentUser");
// authStore.actions.c
}
 refreshTokenInternal() {
 
    httpResource.post(" /api/auth/refresh")
    .then((response) => 
        {
          if (response.status === 200)
          {
            console.log("refreshed from server")
          } 
          else{
            this.performLogout()}
        })
    .catch(() => 
    {
    console.log("couldnot refresh token")
    })
    
}
 refreshToken() {
  httpResource.post("/api/auth/refresh")
  .then((response) => 
        {
          console.log(response.status)
          return response.status;
        })
  .catch(() => 
  {
    this.performLogout();
  })
  
}
getAuthenticatedUser() {
  try {
      console.log("user is authenciated")    
       httpResource.get("/profile/me")
       .then((response) => 
        {
          if (response.status === 200) 
          {
            console.log("user responded 200")
            const currentUser = response.data;
            console.log(currentUser)
            var state1 = authStore.state
            authStore.mutations.setCurrentUser(state1,currentUser)
            console.log("user mutuated")
            authStore.mutations.setIsAuthenticated(state1,true)
          console.log("mutuated")
          // store.commit("setCurrentUser", currentUser);
         //  store.commit("setIsAuthenticated", true);
              this.refreshTokenInternal();
            const intervalName = setInterval(async () => {
                this.refreshTokenInternal();
            }, intervalMilliSeconds);
            console.log("refreshed token")
               authStore.mutations.setIntervalName(state1,intervalName)
               console.log("set up interval name")
           // store.commit("setIntervalName", intervalName);
          }   
        }).catch((error) => 
        {
          console.log("user not  responded 200")
          console.log(error)
          this.performLogout();
        })
     
  } catch (error) {

    console.log("user in catch block")
    this.performLogout();
  }
}
}

export default new huttils()