/* -----------------    ACTIONS     ------------------ */
const UPDATE = 'UPDATE';

/* ------------   ACTION CREATORS     ----------------- */

export const exampleUpdate = () => ({
  type: UPDATE
});

/* -------------       REDUCER     ------------------- */

const auth = (state = '', action) => {
  switch (action.type){
    case UPDATE:
      return 'Updated state';
    default:
      return state;
    }
};

export default auth;
