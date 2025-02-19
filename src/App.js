import { Provider } from 'react-redux';
import './App.css';
import MainRoute from './routes';
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </div>
  );
}

export default App;
