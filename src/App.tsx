import * as React from 'react';
import {Store} from "redux";
import {RootState} from "./store/store";
import {Provider} from "react-redux";
import {Routing} from "./components/routing/routing";

interface ApplicationProps {
    store: Store<RootState>
}

export class App extends React.Component<ApplicationProps> {
  render() {
    return (
      <Provider store={this.props.store}>
          <Routing />
      </Provider>
    );
  }
}
