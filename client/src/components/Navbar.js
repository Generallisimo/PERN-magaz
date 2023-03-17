import { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTER, LOGIN_ROUTER, SHOP_ROUTER } from '../utils/components';
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
// для того чтобы страница перерендивалась в режиме рельного времени мы используме фун от mbox - observe
const NavbarRouter = observer(() => {
  const Navigate = useNavigate()
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
                        <Button onClick={()=> Navigate(ADMIN_ROUTER)} variant={'outline-light'}>Админ Панель</Button>
                        <Button onClick={()=> Navigate(LOGIN_ROUTER)} variant={'outline-light'} className="ml-4">Выйти</Button>
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
  
  export default NavbarRouter;
  