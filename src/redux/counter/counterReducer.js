import { DECREMENT, DECREMENTBY5, INCREMENT, INCREMENTBY5 } from "./counterTypes";

const initialState = {
    count : 0,

    count2 : 10,
}

const counterReducer  = (state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + action.payload 
            }

        case DECREMENT:
            return{
                ...state,
                count: state.count - action.payload
                }
        
        case INCREMENTBY5:
            return{
                ...state,
                count2: state.count2 + action.payload
                }

        case DECREMENTBY5:
            return{
                ...state,
                count2: state.count2 - action.payload
                }
                        
                
        default:
            return state
    }

}

export default counterReducer