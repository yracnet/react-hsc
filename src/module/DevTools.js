
let devTools = {
  init: () => { },
  send: () => { },
  subscribe: () => { }
};

/**
 * Load Redux DevTools
 * @see https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Methods.md#connect
 */
if (process.env.NODE_ENV !== 'production') {
  //let _window: any = window; 
  let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (reduxDevTools) {
    devTools = reduxDevTools.connect({});
  }
}
export default devTools;

