

export const addToFavourites=data=>{
    return{
        type:'ADD-TO-FAV',
        payload:data
    }
}

export const removefav=data=>{
    return{
        type:'REMOVE-FROM-FAV',
        payload:data
    }
}



