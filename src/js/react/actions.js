
export const TOGGLE_UI_COMPONENT = 'TOGGLE_UI_COMPONENT';
export function toggleUiComponent(name, value=undefined) {
    return {
        type: TOGGLE_UI_COMPONENT,
        name,
        value
    };
}

export const SET_KVP = "SET_KVP";
export function setKVP(key, value){
    return {
        type: SET_KVP,
        key,
        value
    };
}