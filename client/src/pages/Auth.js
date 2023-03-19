import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTER, REGISTRETION_ROUTER } from "../utils/components";
import { login, registretion } from "../http/userAPI";
import { useState } from "react";

// страница для вывода
function Auth() {
    
    // с помощью хука можно получить маршрут в строке запроса
    const location = useLocation()
    // создаем переменную которая будет тру если совпадает с маршрутом
    const isLogin = location.pathname === LOGIN_ROUTER
    // создадим фун для регистрации и авторизации
    const click = async () => {
        // делаем проверку 
        if(isLogin){//если логин то запрос на авторизацию
            const response = await login()
            console.log(response)
        }else{//если рег то на регестрацию
            // здесь мы импорт фун которые мы создадали для них
            const response = await registretion(email, password)//передаем получение переменных
            console.log(response)
        }
    }
    // так как инпуты у нас еще не принимают в себя ничего то мы создаем им состояния c хуком первое хранит в себе состояние второе его измену принимает 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
      <div className="auth">
        {/* центруем надпись от высоты браузера */}
        <Container 
        className="d-flex justify-content-center aling-items-center" 
        style={{height: window.innerHeight - 54}}>
            <Card 
            style={{width: 600, height:400, alignSelf:"center"}} 
            className='p-5 '>
                {/* создаем переходы по маршрутом если совпадает наша переменная с маршрутом */}
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    {/* вставляем интпуты */}
                    <Form.Control 
                    className="mt-3" 
                    placeholder="Введите ваш email"
                    // задаем значние
                    value={email}
                    // меняем его c помощью taget который будет принимать в себя
                    onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control 
                    className="mt-3" 
                    placeholder="Введите ваш пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    // создаем тип чтобы шифровать пароль
                    type="password"
                    />
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3" >
                        {isLogin ? 
                        <div>Нет аккаунта? <NavLink to={REGISTRETION_ROUTER}>Зарегестрируйтесь</NavLink></div>                        
                        :
                        <div>Есть аккаунта? <NavLink to={LOGIN_ROUTER}>Войдите</NavLink></div>
                        }
                        <Button 
                        variant={"outline-success"}
                        className="mt-3"
                        // вешаем обработчик нашей фун
                        onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
      </div>
    );
  }
  
  export default Auth;
  