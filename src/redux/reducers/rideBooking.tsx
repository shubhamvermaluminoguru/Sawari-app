import { Reducer } from "redux";

const INITIAL_STATE = {
    from: "",
    to: "",
    distance:0,
    date: "",
    time: "",
    type:"",
    seat: "",
    coupon: "",
    price: 0,
    total: 0,
    tax: 0,
    discount: 0,
};

const reducer: Reducer = (state = INITIAL_STATE, action) => {
    console.log( action)
    switch (action.type) {
        case "SET_FROM":
            return {
                ...state,
                from: action.payload
            };
        case "SET_TO":
            console.log("working")
            return {
                ...state,
                to: action.payload
            };
        case "SET_DATE":
            return {
                ...state,
                date: action.payload
            };
        case "SET_TIME":
            return {
                ...state,
                time: action.payload
            };
        case "SET_TYPE":
            return {
                ...state,
                type: action.payload
            };
        case "SET_SEAT":
            return {
                ...state,
                seat: action.payload
            };
        case "SET_COUPON":
            return {
                ...state,
                coupon: action.payload
            };
        case "SET_PRICE":
            return {
                ...state,
                price: action.payload
            };
        case "SET_DISTANCE":
            return {
                ...state,
                distance: action.payload
            };
        case "SET_TOTAL":
            return {
                ...state,
                total: action.payload
            };
        case "SET_TAX":
            return {
                ...state,
                tax: action.payload
            };
        case "SET_DISCOUNT":
            return {
                ...state,
                discount: action.payload
            };
        default:
            return state;
    }
};  
export default reducer