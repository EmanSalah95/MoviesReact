let initialState={
    movies:[]
}

export default function moviesReducer(state=initialState, action){
    switch (action.type) {
        case "SET_MOVIES":
            return {
                movies:action.payload,
              };

        default:
          return state;
    }

}