import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  //Validation logic -- only occurs after all other middleware, and after reaching reducers
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
};
