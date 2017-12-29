import createHistory from "history/createBrowserHistory";
import { applyMiddleware, combineReducers, createStore, Middleware, Store } from "redux";
import { routerMiddleware } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { reduxTokenAuthReducer } from "redux-token-auth";
import logger from "redux-logger";
import thunk from "redux-thunk";

interface ReduxTokenAuthState {
    currentUser: {
        attributes: any;
        isLoading: boolean;
        isSignedIn: boolean;
    }
}

export interface RootState {
    reduxTokenAuth: ReduxTokenAuthState
}

const rootReducer = combineReducers<RootState>({
    form: formReducer,
    reduxTokenAuth: reduxTokenAuthReducer
});

export const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

export const configureStore = (): Store<RootState> => {
  const middlewares: Middleware[] = [thunk];
  middlewares.push(reduxRouterMiddleware);
  middlewares.push(logger);

  return createStore(
      rootReducer,
      applyMiddleware(...middlewares)
  );
};