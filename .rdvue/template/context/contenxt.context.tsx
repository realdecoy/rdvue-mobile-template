import React, { createContext } from "react";

interface __CONTEXT__ContextState {}

interface with__CONTEXT__Props {
  __CONTEXT__: __CONTEXT__ContextState;
}

interface Props {}

const __CONTEXT__Context = createContext<__CONTEXT__ContextState>({});

const __CONTEXT__Consumer = __CONTEXT__Context.Consumer;

class __CONTEXT__ContextProvider extends React.Component<Props, __CONTEXT__ContextState> {
  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  // --------------------------------------------------------------------------
  // Private Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Public Methods
  // --------------------------------------------------------------------------

  render() {
    return (
      <__CONTEXT__Context.Provider value={this.state}>
        {this.props.children}
      </__CONTEXT__Context.Provider>
    );
  }
}

const with__CONTEXT__ = (Component: any) => (props: any) =>
  (
    <__CONTEXT__Consumer>
      {(state) => <Component {...props} __CONTEXT__={state} />}
    </__CONTEXT__Consumer>
  );

export {
  __CONTEXT__ContextProvider,
  __CONTEXT__Consumer,
  with__CONTEXT__,
  with__CONTEXT__Props,
  __CONTEXT__ContextState,
};
