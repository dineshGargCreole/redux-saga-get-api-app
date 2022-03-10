import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import configureStore from './store';
import Users from './components/Users'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
