export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding items to amazon basket
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for remving items from amazon basket
            let newBasket = [ ...state.basket ];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log(
                    `Cannot remove product (id: ${action.id}) as its not present in basket`
                );
            }

            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;