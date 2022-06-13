import { counterDownAction, counterUpAction } from '../actionCreator/actionString'

const initialState = {
    counter: 1
}

const counterReducers = (prevState = initialState, action) => {
    switch (action.type) {
        case counterUpAction:
            return { ...prevState, counter: prevState.counter + 1 }

        case counterDownAction:
            return { ...prevState, counter: prevState.counter === 1 ? prevState.counter = 1 : prevState.counter - 1 }

        default:
            return prevState

    }
}

export default counterReducers

