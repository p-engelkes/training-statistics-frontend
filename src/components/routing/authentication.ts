import {connectedRouterRedirect} from "redux-auth-wrapper/history4/redirect";
import {RootState} from "../../store/store";

export const userIsAuthenticated = connectedRouterRedirect({
   redirectPath: "/login",
   allowRedirectBack: false,
   authenticatedSelector: (state: RootState) => {
       if (state.reduxTokenAuth.currentUser.isSignedIn) {
           return true;
       }

       return false;
   },
    authenticatingSelector: (state: RootState) => {
        if (state.reduxTokenAuth.currentUser.isLoading) {
            return true
        }

        return false;
    }
});

export const userIsNotAuthenticated = connectedRouterRedirect({
   redirectPath: "/",
   allowRedirectBack: false,
   authenticatedSelector: (state: RootState) => {
       if (state.reduxTokenAuth.currentUser.isSignedIn) {
           return false;
       }

       return true;
   },
   authenticatingSelector: (state: RootState) => {
       if (state.reduxTokenAuth.currentUser.isLoading) {
           return true
       }

       return false;
   }
});