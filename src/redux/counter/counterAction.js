import { INCREMENT, DECREMENT, INCREMENTBY5, DECREMENTBY5 } from "./counterTypes";



export const increment = () => {
    return (
        {
            type: INCREMENT,
            payload : 1
        }
    );
};


export const decrement = () => {
    return (
        {
            type: DECREMENT,
            payload:1
        }
    );
};

export const incrementby5 = () => {
    return (
        {
            type: INCREMENTBY5,
            payload: 5
        }
    );
};

export const decrementby5 = () => {
    return (
        {
            type: DECREMENTBY5,
            payload:5
        }
    );
};