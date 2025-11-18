import {Provider} from 'react-redux'
import { Store } from './Store'
import TodosList from './TodosList'
import TodosInput from './TodosInput'
import './App.css'

function App() {

  return (
    <Provider store={Store}>
      <TodosInput/>
      <TodosList/>
    </Provider>
  )
}

export default App
