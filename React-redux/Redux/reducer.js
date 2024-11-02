const initialstate = {
    list: [],
};

const reduceraddtocart = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                list: [...state.list, action.payload], // Adds action.payload to the existing list
            };
        default:
            return state;
    }
};


export default reduceraddtocart