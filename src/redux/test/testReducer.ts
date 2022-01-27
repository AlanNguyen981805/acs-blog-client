import { GET_LIST_ADDRESS_SUCCESS } from "./type"

const initialState = {
    data: [],
    valueInitial: '',
    loadingDiaChi: false,
}

export const listAddressFilterRuducer = (state = initialState, action: any) => {

    switch (action.type) {
        case GET_LIST_ADDRESS_SUCCESS:
            return action.payload
        default:
            return state
    }
}