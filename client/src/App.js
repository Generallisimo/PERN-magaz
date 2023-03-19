
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      {/* из реакт дома импорт для навигации по стр */}
      <BrowserRouter>
          <Navbar/>
          {/* добавляем наш роутер */}
          <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
