import createHistory from "history/createBrowserHistory";
import { applyMiddleware, combineReducers, createStore, Middleware, Store } from "redux";
import { routerMiddleware } from "react-router-redux";

export interface RootState {

}

const rootReducer = combineReducers<RootState>({

});

export const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

export const configureStore = (): Store<RootState> => {
  const middlewares: Middleware[] = [reduxRouterMiddleware];

  return createStore(
      rootReducer,
      applyMiddleware(...middlewares)
  );
};