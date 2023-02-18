import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cl from './home.module.css'
import logo from '../../images/Logo_header.svg'
import {useNavigate} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import api from "../../services/api";
import jwt from "jwt-decode";
import useAuth from "../../hooks/useAuth";

function Home() {
    const nav = useNavigate();
    const auth = useAuth();

    const [fetchLogin, isPostsLoading, postError] = useFetching(async (obj) => {
        const { data: loginData } = await api.auth.login(obj);
        auth.setToken(loginData.access);
        auth.setRefreshToken(loginData.refresh)
        let userData=jwt(loginData.access)
        auth.setUser(userData);
        console.log(jwt(loginData.access))
    })
    const [formData, setFormData]=useState({
        "email": "",
        "password": ""
    })
    function next(e){
        e.preventDefault();
        fetchLogin(formData)
    };
    function registrat(e){
        e.preventDefault();
        nav("/registration");
    };
  return (
          <div className={cl.container}>
              <div className={cl.container__header}>
                  <div className={cl.container__header_logo}>
                      <img src={logo}/>
                  </div>
                  <div className={cl.container__header_navigation}>
                      <div className={cl.navigationEl}>Проект</div>
                      <div className={cl.navigationEl}>Документация</div>
                      <div className={cl.navigationEl}>Ресурсы</div>
                      <div className={cl.navigationEl}>Обучение</div>
                      <div className={cl.navigationEl}>Скачать</div>
                  </div>
                  <div className={cl.container__header_access}>
                      <div className={cl.accessEl}>Регистрация</div>
                      <div className={[cl.accessEl,cl.accessEl_active].join(' ')}>Вход</div>
                  </div>
              </div>
              <div className={cl.container__body}>
                  <div className={cl.container__body_title}>
                      <div className={cl.bodyTitleWrapper}>
                          <div className={cl.bodyTitleInfo}>Вход</div>
                          <div className={cl.bodyTitleDescription}>Через социальные сети</div>
                      </div>
                  </div>
                  <div className={cl.container__body_social}>
                      <div className={cl.mediaEl}>
                          <div className={cl.mediaEl_icon}>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_2178_13582)">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M19.5113 6.3999C19.6788 7.53765 19.2157 8.65227 18.6048 9.44088C17.9512 10.2868 16.8246 10.941 15.7331 10.9068C15.5338 9.81756 16.044 8.69523 16.6648 7.94077C17.3457 7.1081 18.5128 6.46929 19.5113 6.3999ZM22.7902 22.4143C23.353 21.5519 23.5632 21.1169 24 20.1432C20.8229 18.935 20.3138 14.4181 23.4581 12.6845C22.499 11.4818 21.1513 10.7846 19.8791 10.7846C18.9625 10.7846 18.3344 11.0238 17.7635 11.2413C17.2877 11.4225 16.8515 11.5886 16.321 11.5886C15.7477 11.5886 15.2401 11.4066 14.7085 11.216C14.1244 11.0066 13.5114 10.7868 12.7508 10.7868C11.3232 10.7868 9.80359 11.6591 8.84016 13.1504C7.48588 15.2508 7.71689 19.1993 9.91308 22.563C10.6981 23.7668 11.7469 25.1194 13.1187 25.1315C13.6879 25.1371 14.0667 24.9672 14.4766 24.7834C14.9457 24.573 15.4556 24.3443 16.3385 24.3396C17.2266 24.3342 17.7285 24.5657 18.1914 24.7793C18.5908 24.9635 18.9612 25.1343 19.5255 25.1282C20.8984 25.1172 22.0053 23.6181 22.7902 22.4143Z" fill="#0B0B0A"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_2178_13582">
                                          <rect width="32" height="32" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>
                          </div>
                          <div className={cl.mediaEl_naming}>Войти с Apple</div>
                      </div>
                      <div className={cl.mediaEl}>
                          <div className={cl.mediaEl_icon}>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_2178_13590)">
                                      <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white"/>
                                      <path d="M15.9999 11.0933C17.5022 11.0933 18.5155 11.7422 19.0933 12.2844L21.3511 10.08C19.9644 8.79111 18.1599 8 15.9999 8C12.8711 8 10.1688 9.79556 8.85327 12.4089L11.4399 14.4178C12.0888 12.4889 13.8844 11.0933 15.9999 11.0933V11.0933Z" fill="#EA4335"/>
                                      <path d="M23.68 16.1778C23.68 15.52 23.6267 15.04 23.5111 14.5422H16V17.5111H20.4089C20.32 18.2489 19.84 19.36 18.7733 20.1067L21.2978 22.0622C22.8089 20.6667 23.68 18.6133 23.68 16.1778V16.1778Z" fill="#4285F4"/>
                                      <path d="M11.4489 17.5823C11.28 17.0845 11.1822 16.5512 11.1822 16C11.1822 15.4489 11.28 14.9156 11.44 14.4178L8.85333 12.4089C8.31111 13.4934 8 14.7112 8 16C8 17.2889 8.31111 18.5067 8.85333 19.5912L11.4489 17.5823V17.5823Z" fill="#FBBC05"/>
                                      <path d="M16.0001 24.0001C18.1601 24.0001 19.9734 23.2889 21.2979 22.0623L18.7734 20.1067C18.0979 20.5778 17.1912 20.9067 16.0001 20.9067C13.8845 20.9067 12.089 19.5112 11.449 17.5823L8.8623 19.5912C10.1779 22.2045 12.8712 24.0001 16.0001 24.0001V24.0001Z" fill="#34A853"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_2178_13590">
                                          <rect width="32" height="32" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>
                          </div>
                          <div className={cl.mediaEl_naming}>Войти с Google</div>
                      </div>
                  </div>
                  <div className={cl.container__body_line}>
                      <div className={cl.bodyLineEl}></div>
                      <div className={cl.bodyLineText}>или по email</div>
                      <div className={cl.bodyLineEl}></div>
                  </div>
                  <div className={cl.formAndBtns}>
                      <div className={cl.container__body_form}>
                          <div className={cl.formInputFirst}>
                              <input
                                  type="text"
                                  placeholder="Email"
                                  value={formData.email}
                                  onChange={e=>setFormData({...formData, email:e.target.value})}
                              />
                          </div>
                          <div className={cl.formInputSecond}>
                              <input
                                  type="text"
                                  placeholder="Пароль"
                                  value={formData.password}
                                  onChange={e=>setFormData({...formData, password:e.target.value})}
                              />
                          </div>
                          <div className={cl.formForgetPassword}>Забыли пароль?</div>
                      </div>
                      <div className={cl.container__body_btns}>
                          <div className={cl.btnSubmit} onClick={next}>Войти</div>
                          <div className={cl.btnRedirect}>
                              <div className={cl.btnRedirect__info}>Вы еще не зарегистрированы?</div>
                              <div className={cl.btnRedirect__ref} onClick={registrat}>Регистрация</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={cl.bottomHome}>2023 re:Control</div>
          </div>

  );
}

export default Home;
