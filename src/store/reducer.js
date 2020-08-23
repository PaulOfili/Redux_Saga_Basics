const initialState = {
    age:20
};

const reducer = (state=initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case 'AGE_UP_ASYNC':
            newState.age += action.value;
            return newState;
        
        case 'AGE_DOWN': 
            newState.age -= action.value;
            return newState;
        default:
            return state
    }
};

export default reducer;