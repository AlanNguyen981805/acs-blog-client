import { AnyAction, applyMiddleware, compose, createStore, EmptyObject, Store } from "redux";
import rootReducer from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";
// import rootSaga from "./saga";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const configStore = (loadState = {}): Store => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store: Store<EmptyObject | AnyAction> = createStore(
        rootReducer,  
        composeEnhancers(applyMiddleware(sagaMiddleware)),
        // applyMiddleware(logger, sagaMiddleware),
    );
    (store as any).sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(configStore);
