import { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { MdLock, MdEmail } from 'react-icons/md';
import Imagem1 from '../../assets/imagemlogin.png';
import Logo from '../../assets/logosenai.png';
import Logo2 from '../../assets/logosenai2.png';
import '../../styles/App.css';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { BiWindows } from "react-icons/bi";

export default function Login(){
  const [userData, setUserData] = useState({email:'', password:''});
  const [error, setError] = useState(null);
  const [forgetPass, setForgetPass] = useState(false);
  const [userDataForget, setUserDataForget] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlerSubmit(e){
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/user/login`,userData)
    .then(({data:{token}})=>{
      dispatch({type:"ADD_TOKEN", data:token})
      sessionStorage.setItem('token',token)
      navigate("/departments");
    })
    .catch(({response:{data:{msg}}})=>setError(msg));
  }

  return(
    <section className="App">
      <section className="appAside">
        <img className="logosenai" src={Logo}/>
        <img className="imagemteste" src={Imagem1}/>
      </section>
      <section className="appForm">
        <img className="logosenai2" src={Logo2}/>
        <h1 className="pageSwitcher">GERENCIAMENTO DE PATRIMÔNIO</h1>
        <section className="formTitle">
          <Link to="/" className="formTitleLink-active formTitleLink">
            Entrar
          </Link>
          {" "}ou{" "}
          <Link exact
            to="/register"
            activeClassName="formTitleLink-active"
            className="formTitleLink">
            Cadastrar
          </Link>
        </section>
        <section className="formCenter">
          {error && <p id="errorLogin">{error}</p>}  
          <form className="formFields" onSubmit={(e)=>handlerSubmit(e)}>
            <div className="formField">
              <MdEmail size={30} color="gray"/>
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
              <MdLock size={30} color="gray"/>
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
            <p className="formFieldLink" onClick={()=>setForgetPass(true)}>
              Esqueci minha Senha
            </p>
          </form>
        </section>
      </section>
      {forgetPass && ForgetPassModal(userDataForget, setUserDataForget, setForgetPass)}
    </section>
  );
}

function ForgetPassModal(state, setState, setModal){
  function sendEmail(){
    /*Lógica de envio aqui!!!*/
    setModal(false)
  }

  return(
    <section className="app-black">
      <section className="content">
        <section className="titleModal">
          <h2>Recadastrar Senha</h2>
          <input type="button" value="X" className="exit-btn" onClick={()=>setModal(false)}/>
        </section>
        <label htmlFor="emailInput">Insira o e-mail</label>
        <input type="text" id="emailInput" placeholder="E-mail cadastrado" value={state} onChange={(e)=>setState(e.target.value)} />
        <p className="formFieldLink" onClick={()=>setModal(false)}>Fazer login</p>
        <input type="button" value="Enviar" id="send-btn" onClick={()=>sendEmail()}/>
      </section>
    </section>
  );
}