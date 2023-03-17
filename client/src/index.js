import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UseerStore from './store/UserStore';
// import reportWebVitals from './reportWebVitals';
// предаем в контекст данные пропс которые позваялет быстро получить провайдер где мы можем передать наш объект
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // создаем объект из нашего класса
  <Context.Provider value={{
    user: new UseerStore(),
    device: new DeviceStore()
  }}>
     <App />
  </Context.Provider>
  // <React.StrictMode> 
  // </React.StrictMode>
);


// reportWebVitals();
