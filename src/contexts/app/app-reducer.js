export const appReducer = (state, action) => {
    switch (action.type) {
        case 'SELECTED_DATE': {
            return {
                ...state,
                selectedDate: action.payload
            }
        }
    }
}