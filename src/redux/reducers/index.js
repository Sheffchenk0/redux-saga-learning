const initialState = {
  people: [],
  planets: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_PEOPLE':
      return {
        ...state,
        people: [...action.payload],
      };
    case 'SET_PLANETS':
      return {
        ...state,
        planets: [...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
