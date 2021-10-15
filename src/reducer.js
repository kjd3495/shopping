export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price+amount, 0)



export const initialState = {
    basket: [],
    user:null
};

const reducer = (state= initialState, action) => {
        switch (action.type) {
            case'ADD_TO_BASKET' :
                return {
                    ...state,
                    basket:[...state.basket, action.item],
                };
            case'BASKET_REMOVE': 
                let new_index = state.basket.findIndex(
                    (basketItem)=>basketItem.id === action.id
                )
                let new_basket = [...state.basket];

                if(new_index>=0){
                    new_basket.splice(new_index,1);

                }
                else {
                    console.warn(
                        '(id: '+
                        action.id +')이 장바구니에 존재하지 않습니다'

                    )
                }
                return {
                    ...state,
                    basket:new_basket
                }
            case 'SET_USER':
                return{
                    ...state,
                    user:action.user
                }
        
            default:
                return state;
        }
}

export default reducer;