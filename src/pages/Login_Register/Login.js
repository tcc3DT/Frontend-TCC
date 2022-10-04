import { useState } from "react"; 
import { Link } from "react-router-dom";
import { MdLock, MdEmail } from 'react-icons/md';
import Imagem1 from '../../assets/imagemlogin.png';
import Logo from '../../assets/logosenai.png';
import Logo2 from '../../assets/logosenai2.png';
import '../../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

export default function Login(){
  const [userData, setUserData] = useState({email:'', password:''});
  const dispatch = useDispatch();
  const states = useSelector((state)=>state);
  
  function handlerSubmit(e){
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_KEY}/login`,userData)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error));
  }

  return(
    <div className="App">
      <div className="appAside">
        <img className="logosenai" src={Logo}/>
        <img className="imagemteste" src={Imagem1}/>
      </div>
      <div className="appForm">
        <img className="logosenai2" src={Logo2}/>
        <div className="pageSwitcher">
          GERENCIAMENTO DE PATRIMÔNIO 
        </div>
        <div className="formTitle">
          <Link
            to="/"
            className="formTitleLink-active formTitleLink"
          >
            Entrar
          </Link>
          {" "}ou{" "}
          <Link
            exact
            to="/register"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Cadastrar
          </Link>
        </div>
        <div className="formCenter">
            <form className="formFields" onSubmit={(e)=>handlerSubmit(e)}>
              <div className="formField">
                <MdEmail className="senha" size={20} color="gray"/>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Entre com seu Email"
                  name="email"
                  value={userData.email}
                  onChange={(event)=>setUserData({...userData, email:event.target.value})}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                </label>
                <MdLock className="senha" size={20} color="gray"/>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Entre com sua Senha"
                  name="password"
                  value={userData.password}
                  onChange={(event)=>setUserData({...userData, password:event.target.value})}
                />
              </div>
              <div className="formField">
                <button className="formFieldButton" type="submit">Entrar</button>
              </div>
              <Link to="" className="formFieldLink">
                  Esqueci minha Senha
              </Link>
            </form>
        </div>
      </div>
    </div>
  );
}