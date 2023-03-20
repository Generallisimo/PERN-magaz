
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { check } from "../src/http/userAPI";
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'


const App= observer(()=> {
  // получаем состояние user 
  const {user}=useContext(Context)
  // создаем с хуком стате параметры которые будут отвечать за useEffect для проверки идет ли загрузка стр или нет
  const [load, setLoad] = useState(true)// то есть мы добавляем крутилку и после этого мы как проверили делаем состояние false и загружаем стр
  // первым принимает фун вторым массив с зависимостями
  useEffect(()=>{
    // делаем имитацию для проверки
    // setTimeout(()=>{
      // вызываем фун check и елси она успешна то делаем auth true
      check().then(data=>{ 
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(()=>setLoad(false)) //даляем после того как запрос на сервер прошел успешно мы делаем load false
    // }, 1000)//кол сек
  } 
  ,[user])


  // делаем провреку для load который будет вызывать крутилку
  if(load){
    return <p>загружаем</p>
  }
  return (

      // {/* из реакт дома импорт для навигации по стр */}
      <BrowserRouter>
          <Navbar/>
          {/* добавляем наш роутер */}
          <AppRouter/>
      </BrowserRouter>

  );
})

export default App;
