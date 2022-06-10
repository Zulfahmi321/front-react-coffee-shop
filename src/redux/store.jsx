import { legacy_createStore as createstore } from "redux";
import { counterDownAction, counterUpAction } from "./actionCreator/actionString";

const initialState = {
    counter: 0
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case counterUpAction:
            return { ...prevState, counter: prevState.counter + 1 }

        case counterDownAction:
            return { ...prevState, counter: prevState.counter - 1 }

        default:
            return prevState

    }
}

export const store = createstore(reducer);

