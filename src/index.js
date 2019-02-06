const { createStore } = Redux;

//reducer.js
const initialState = {
    value: 0,
    color: 'black',
    userInput: 0
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    console.log(action)
    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            color: state.color,
            userInput: state.userInput
        }
    } else if (type === 'DECREMENT') {
        return {
            value: state.value - 1,
            color: state.color,
            userInput: state.userInput

        }
    } else if (type === 'INCREMENT-FIVE') {
        return {
            value: state.value + 5,
            color: state.color,
            userInput: state.userInput

        }
    } else if (type === 'DECREMENT-FIVE') {
        return {
            value: state.value - 5,
            color: state.color,
            userInput: state.userInput
        }
    } else if (type === 'COLOR-PICKER') {
        // if (document.getElementById('color-picker').value === 'red') {
        //     document.getElementById('counterValue').style.color = 'red'
        // } else if (document.getElementById('color-picker').value === 'green') {
        //     document.getElementById('counterValue').style.color = 'green'
        // } else if (document.getElementById('color-picker').value === 'blue') {
        //     document.getElementById('counterValue').style.color = 'blue'
        // }
        return {
            value: state.value,
            color: action.color,
            userInput: state.userInputValue
        }

    } else if (type === 'USER-INPUT-COUNTER') {
        // console.log('entered userInput')
        // document.getElementById('counterValue').innerHTML= document.getElementById('counterInput').value
        return {
            value: action.userInputValue,
            color: state.color,
            userInput: action.userInputValue
        }

    }
    return state
}

//render.js
const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = state.value;

    //color
    document.getElementById('counterValue').style.color = state.color
    //userInput
    // document.getElementById('counterValue').innerHTML = state.userInput

    console.log(getState())

}

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT"}));

const decrementButton = document.getElementById('decrement')
decrementButton.addEventListener('click', e => dispatch({ type: 'DECREMENT'}))

const incrementFiveButton = document.getElementById('increment-five')
incrementFiveButton.addEventListener('click', e => dispatch({ type: 'INCREMENT-FIVE'}))

const decrementFiveButton = document.getElementById('decrement-five')
decrementFiveButton.addEventListener('click', e => dispatch({ type: 'DECREMENT-FIVE'}))

const colorPicker = document.getElementById('color-picker')
colorPicker.addEventListener('change', e => dispatch({ type: 'COLOR-PICKER', color: document.getElementById('color-picker').value}))

const submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', e => dispatch({ type: 'USER-INPUT-COUNTER', userInputValue: parseInt(document.getElementById('counterInput').value)}))

