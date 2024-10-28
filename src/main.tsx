import createSagaMiddleware from 'redux-saga'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { App } from './App'
import { rootSaga } from './store/sagas'
import { reducer } from './store/reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
)