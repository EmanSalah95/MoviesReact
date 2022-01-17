let initialState={
    favourites:[]
}

export default function favReducer(state=initialState, action){
    switch (action.type) {
        case "ADD-TO-FAV":
            return {
                ...state,
                favourites: [action.payload,...state.favourites],
              };
    
        case 'REMOVE-FROM-FAV':
            return {
                ...state,
                favourites: state.favourites.filter( i=>i !==action.payload),
              };
        default:
          return state;
    }

}