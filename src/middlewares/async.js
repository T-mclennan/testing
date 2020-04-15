export default ({ dispatch }) => (next) => (action) => {
  //Check to see if the action has a promise on it's payload property.
  //If it does, wait for it to reslove and recall,
  //If not send to next on chain

  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  //Wait for promise to resolve or get data
  //Then create new action with that data, dispatch it
  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
