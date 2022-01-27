import { AnyAction, applyMiddleware, createStore, EmptyObject, Store } from "redux";
import rootReducer from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";
// import rootSaga from "./saga";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

export const configStore = (loadState = {}): Store => {
    const sagaMiddleware = createSagaMiddleware();
    const store: Store<EmptyObject | AnyAction> = createStore(
        rootReducer,  
        applyMiddleware(sagaMiddleware),
        // applyMiddleware(logger, sagaMiddleware),
    );
    (store as any).sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(configStore);
