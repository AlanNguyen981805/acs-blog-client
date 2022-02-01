
export const ALERT_SUCCESS = "ALERT_SUCCESS"
export const ALERT_ERROR = "ALERT_ERROR"

export interface IAlert {
    loading?:boolean,
    success?: string,
    error?: string
}

export interface IAlertType {
    type: typeof ALERT_SUCCESS | typeof ALERT_ERROR,
    payload: IAlert
}