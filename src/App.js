import { Provider } from 'react-redux';
import './App.css';
import MainRoute from './routes';
import { store } from "./redux/store";
import { useEffect } from 'react';
import { socket } from './redux/config';

function App() {

  useEffect(() => {
    socket.emit("connected", "1234567890");
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </div>
  );
}

export default App;
