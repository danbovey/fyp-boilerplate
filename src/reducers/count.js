export default function count(state = 0, action = {}) {
    switch(action.type) {
        case 'COUNT_INCREMENT':
            return state + 1;
        case 'COUNT_DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
