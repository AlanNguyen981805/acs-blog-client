import * as types from "./type"

export const getListAddress = (data: any) => (
    {
        type: types.GET_LIST_ADDRESS,
        payload: data
    }
)

export const getListAddressSuccess = (data: any) => ({
    type: types.GET_LIST_ADDRESS_SUCCESS,
    payload: data
})

export const getListAddressFail = (data: any) => ({
    type: types.GET_LIST_ADDRESS_FAIL,
    payload: data
})