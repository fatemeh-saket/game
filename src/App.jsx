import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Router/index'
import { Provider } from 'react-redux'
import store from './store/index'
function App() {

  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App
