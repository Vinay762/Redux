import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './Components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
