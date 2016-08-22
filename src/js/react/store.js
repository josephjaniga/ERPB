
import * as Redux from 'redux';

// ACTIONS
import {
    TOGGLE_UI_COMPONENT,
    SET_KVP,
} from './actions.js'

/** REDUX - State */
let sharedState = {
    ui: {
        showExampleComponent: false,
    }
};

/** REACT - Reducer */
const GameStateReducer = (state = sharedState, action) => {
    switch (action.type) {
        case TOGGLE_UI_COMPONENT:
            if ( action.value !== undefined ){
                state.ui["show"+action.name] = action.value;
            } else {
                state.ui["show"+action.name] = !state.ui["show"+action.name];
            }
            break;
        case SET_KVP:
            state[action.key] = action.value;
            break;
        default:
            // reduce
            break;
    }
    return state;
};

const { createStore } = Redux;
export const store = createStore(GameStateReducer);