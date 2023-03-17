Express - фрайм для Node.js
ORM - sequelize
Авторизация по токену
две папки для бэка и фронта
npm init -y - так подвязываем package.json и будем уст зависимости
sudo npm i express pg pg-hstore sequelize cors dotenv установка заивисимости фрейм БД Орм запросы с браузера к серверу 
sudo npm i -D nodemon для того чтобы авто перезагрузка была
дале в packeg мы укз скрипт который будет исполнятся 
для запуска наших конфигов npm run dev
запускаем phpAmdmin4 с PostgerSQL и туда заносим новую БД 
для чтения картинок нужна зависимость которая читает файлы -  npm i express-fileupload
для генерации имени файлов - npm i uuid
для генреции tokena и крипт для шифра и не хранить в открытом виде ключ- npm i jsonwebtoken bcrypt 
установка frontend
React установка npx create-react-app . (здесь вместо точки название проекта либо точка значит в папку уст)
для работы с react в папку node нужно установить mkdir .cache и через chmod -R 777 дать файлу права
подвязываем сайту компоненты npm i axios react-router-dom mobx mobx-react-lite для запросов роутеров и состояния приложения и для связки с компонентами
React bootstrap - npm i react-bootstrap bootstrap для связки 
структура store - хранение данных pages - для стр components - для навбаров итд
Так выглядит основа на Rect
    function () {
        return (
        <div className="">
            
        </div>
        );
    }
    
    export default ; 

    
    
    
    
    
    
    
    // для того чтобы просто менялся навбрал без перезагрузки
const NavbarRouter= observable(()=> {
// водим контекст для навбара так как он будет менятся при регестр польз
const{user}=useContext(Context)
    return (
        // вставляем Bootstrap
        <Navbar bg="dark" variant="dark">
        <Container>
            {/* здесь мы выводим из ДОМ для рендеренга */}
          <NavLink style={{color:'white'}} to={SHOP_ROUTER}>Magaz</NavLink>
          {/* если польз залогинен то будем одно показывать если нет то другое */}
            {user.isAuth ?
                <Nav className="ml-auto" style={{color:'white'}}>
                    {/* можно укз вариант из bootstrap */}
                        <Button variant={'outline-light'}>Админ Панель</Button>
                        <Button variant={'outline-light'}>Выйти</Button>
                </Nav>
            :
                <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={'outline-light'} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
        </Container>
      </Navbar>
    );
  })