const initState = {
  weather: {}
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        weather: action.payload
      };

    default:
      return state;
  }
};

export default weatherReducer;
