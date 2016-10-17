export function increment() {
    return {
        type: 'COUNT_INCREMENT'
    };
}

export function decrement() {
    return {
        type: 'COUNT_DECREMENT'
    };
}
