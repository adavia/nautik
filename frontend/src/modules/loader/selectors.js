
export const loadingIndicator = (actions) => (state) => {
  // returns true only when all actions is not loading
  return actions.some(action => state.loader[action]);
}