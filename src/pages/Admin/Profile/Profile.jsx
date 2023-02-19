import React, {useState} from 'react';
import cl from './Profile.module.css'
import AvatarProfile from "../../../images/AvatarProfile.svg";
import photoPhoneProfile from "../../../images/photoPhoneProfile.svg";

const Profile = () => {
    const [titles, setTitles]=useState([
        {name:'Профиль'},
        {name:'Настройки'},
        {name:'Безопасность'},
        {name:'Отчеты'},
        {name:'Логи'},
    ])
    return (
        <div className={cl.container}>
            <div className={cl.headerWrapper}>
                <div className={cl.headerParts}>
                    {
                        titles.map(el=>
                            <div className={el.name==='Профиль'?cl.headerPartActive:cl.headerPart}  key={el.name}>{el.name}</div>
                        )
                    }
                </div>
                <div className={cl.headerOptions}>
                    <div className={cl.addNewRequest}>
                        <div className={cl.addNewRequest__icon}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.625 4.875C10.625 4.52982 10.3452 4.25 10 4.25C9.65482 4.25 9.375 4.52982 9.375 4.875V9.875H4.375C4.02982 9.875 3.75 10.1548 3.75 10.5C3.75 10.8452 4.02982 11.125 4.375 11.125H9.375V16.125C9.375 16.4702 9.65482 16.75 10 16.75C10.3452 16.75 10.625 16.4702 10.625 16.125V11.125H15.625C15.9702 11.125 16.25 10.8452 16.25 10.5C16.25 10.1548 15.9702 9.875 15.625 9.875H10.625V4.875Z" fill="black" fill-opacity="0.4"/>
                            </svg>
                        </div>
                        <div className={cl.addNewRequest__text}>Новая заявка</div>
                    </div>
                    <div className={cl.newClient}>Новый клиент</div>
                    <div className={cl.headerDots}>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 13.25C9.69036 13.25 10.25 13.8096 10.25 14.5C10.25 15.1904 9.69036 15.75 9 15.75C8.30964 15.75 7.75 15.1904 7.75 14.5C7.75 13.8096 8.30964 13.25 9 13.25Z" fill="black" fillOpacity="0.4"/>
                            <path d="M14 13.25C14.6904 13.25 15.25 13.8096 15.25 14.5C15.25 15.1904 14.6904 15.75 14 15.75C13.3096 15.75 12.75 15.1904 12.75 14.5C12.75 13.8096 13.3096 13.25 14 13.25Z" fill="black" fillOpacity="0.4"/>
                            <path d="M20.25 14.5C20.25 13.8096 19.6904 13.25 19 13.25C18.3096 13.25 17.75 13.8096 17.75 14.5C17.75 15.1904 18.3096 15.75 19 15.75C19.6904 15.75 20.25 15.1904 20.25 14.5Z" fill="black" fillOpacity="0.4"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={cl.profileStats}>
                <div className={cl.profileStats__user}>Менеджер кластера</div>
                <div className={cl.profileStats__datePerson}>
                    <div className={cl.profilePersonRole}>
                        <div>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21397 1.75963C8.15683 1.3125 7 1.3125 7 1.3125C5.84317 1.3125 4.78603 1.75963 4.78603 1.75963C3.76529 2.19137 2.97833 2.97833 2.97833 2.97833C2.19137 3.76529 1.75963 4.78603 1.75963 4.78603C1.3125 5.84317 1.3125 7 1.3125 7C1.3125 8.15683 1.75963 9.21397 1.75963 9.21397C2.19137 10.2347 2.97833 11.0217 2.97833 11.0217C3.03881 11.0821 3.10067 11.1405 3.16334 11.1968C3.18626 11.2223 3.2123 11.2453 3.24107 11.2651C3.97473 11.8972 4.78603 12.2404 4.78603 12.2404C5.84317 12.6875 7 12.6875 7 12.6875C8.15682 12.6875 9.21397 12.2404 9.21397 12.2404C9.86114 11.9666 10.4143 11.5501 10.7326 11.2819C10.7788 11.2547 10.819 11.2197 10.8518 11.179C10.9611 11.0822 11.0217 11.0217 11.0217 11.0217C11.8086 10.2347 12.2404 9.21396 12.2404 9.21396C12.6875 8.15682 12.6875 7 12.6875 7C12.6875 5.84317 12.2404 4.78603 12.2404 4.78603C11.8086 3.76529 11.0217 2.97833 11.0217 2.97833C10.2347 2.19137 9.21397 1.75963 9.21397 1.75963ZM5.12689 11.4345C4.70547 11.2562 4.33102 11.0063 4.05807 10.7971C4.51941 10.103 5.16908 9.70426 5.16908 9.70426C6.01152 9.18716 7 9.1875 7 9.1875C7.98848 9.1875 8.83092 9.70426 8.83092 9.70426C9.3613 10.0298 9.73514 10.4998 9.93931 10.8032C9.39432 11.214 8.87311 11.4345 8.87311 11.4345C7.97939 11.8125 7 11.8125 7 11.8125C6.02061 11.8125 5.12689 11.4345 5.12689 11.4345ZM4.71135 8.95853C4.71135 8.95853 4.97505 8.79676 5.39336 8.63512C5.30778 8.57075 5.22408 8.49889 5.14384 8.41866C5.14384 8.41866 4.375 7.64981 4.375 6.5625C4.375 6.5625 4.375 5.47519 5.14384 4.70634C5.14384 4.70634 5.91269 3.9375 7 3.9375C7 3.9375 8.08731 3.9375 8.85616 4.70634C8.85616 4.70634 9.625 5.47519 9.625 6.5625C9.625 6.5625 9.625 7.64981 8.85616 8.41866C8.85616 8.41866 8.76614 8.50867 8.60415 8.6271C8.83146 8.71237 9.0642 8.82076 9.28865 8.95853C9.28865 8.95853 10.0219 9.40861 10.5897 10.1977C10.8142 9.93622 11.1911 9.44844 11.4345 8.87311C11.4345 8.87311 11.8125 7.97939 11.8125 7C11.8125 7 11.8125 6.02061 11.4345 5.12689C11.4345 5.12689 11.0692 4.26333 10.403 3.59705C10.403 3.59705 9.73667 2.93076 8.87311 2.56551C8.87311 2.56551 7.97939 2.1875 7 2.1875C7 2.1875 6.02061 2.1875 5.12689 2.56551C5.12689 2.56551 4.26333 2.93077 3.59705 3.59705C3.59705 3.59705 2.93077 4.26333 2.56551 5.12689C2.56551 5.12689 2.1875 6.02061 2.1875 7C2.1875 7 2.1875 7.97939 2.56551 8.87311C2.56551 8.87311 2.86392 9.57862 3.4133 10.2063C3.68142 9.83148 4.11802 9.32272 4.71135 8.95853ZM8.23744 7.79994C7.72487 8.3125 7 8.3125 7 8.3125C6.27513 8.3125 5.76256 7.79994 5.76256 7.79994C5.25 7.28737 5.25 6.5625 5.25 6.5625C5.25 5.83763 5.76256 5.32506 5.76256 5.32506C6.27513 4.8125 7 4.8125 7 4.8125C7.72487 4.8125 8.23744 5.32506 8.23744 5.32506C8.75 5.83763 8.75 6.5625 8.75 6.5625C8.75 7.28737 8.23744 7.79994 8.23744 7.79994Z" fill="black" fill-opacity="0.4"/>
                            </svg>
                        </div>
                        <div>Aдмин</div>
                    </div>
                    <div className={cl.profilePersonAddress}>
                        <div>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3.5C7 3.5 7.90609 3.5 8.5468 4.1407C8.5468 4.1407 9.1875 4.78141 9.1875 5.6875C9.1875 5.6875 9.1875 6.59359 8.5468 7.2343C8.5468 7.2343 7.90609 7.875 7 7.875C7 7.875 6.09391 7.875 5.4532 7.2343C5.4532 7.2343 4.8125 6.59359 4.8125 5.6875C4.8125 5.6875 4.8125 4.78141 5.4532 4.1407C5.4532 4.1407 6.09391 3.5 7 3.5ZM7 4.375C7 4.375 6.45634 4.375 6.07192 4.75942C6.07192 4.75942 5.6875 5.14384 5.6875 5.6875C5.6875 5.6875 5.6875 6.23116 6.07192 6.61558C6.07192 6.61558 6.45634 7 7 7C7 7 7.54366 7 7.92808 6.61558C7.92808 6.61558 8.3125 6.23116 8.3125 5.6875C8.3125 5.6875 8.3125 5.14384 7.92808 4.75942C7.92808 4.75942 7.54366 4.375 7 4.375Z" fill="black" fill-opacity="0.4"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4462 3.84584C11.4462 3.84584 11.8125 4.73024 11.8125 5.6875C11.8125 5.6875 11.8125 8.31205 9.51764 10.9511C9.51764 10.9511 8.8124 11.7622 7.96694 12.4808C7.96694 12.4808 7.54115 12.8427 7.25089 13.0459C7.10025 13.1514 6.89975 13.1514 6.74911 13.0459C6.74911 13.0459 6.45886 12.8427 6.03306 12.4808C6.03306 12.4808 5.18761 11.7622 4.48236 10.9511C4.48236 10.9511 2.1875 8.31205 2.1875 5.6875C2.1875 5.6875 2.1875 4.73023 2.55383 3.84584C2.55383 3.84584 2.92016 2.96144 3.59705 2.28455C3.59705 2.28455 4.27394 1.60766 5.15834 1.24133C5.15834 1.24133 6.04273 0.875 7 0.875C7 0.875 7.95727 0.875 8.84166 1.24133C8.84166 1.24133 9.72606 1.60766 10.403 2.28455C10.403 2.28455 11.0798 2.96144 11.4462 3.84584ZM10.9375 5.6875C10.9375 5.6875 10.9375 4.90428 10.6378 4.18068C10.6378 4.18068 10.3381 3.45709 9.78423 2.90327C9.78423 2.90327 9.23041 2.34945 8.50682 2.04972C8.50682 2.04972 7.78322 1.75 7 1.75C7 1.75 6.21678 1.75 5.49318 2.04972C5.49318 2.04972 4.76959 2.34945 4.21577 2.90327C4.21577 2.90327 3.66195 3.45709 3.36222 4.18068C3.36222 4.18068 3.0625 4.90428 3.0625 5.6875C3.0625 5.6875 3.0625 7.98482 5.14264 10.377C5.14264 10.377 5.80458 11.1382 6.59975 11.8141C6.59975 11.8141 6.8217 12.0028 7 12.1421C7 12.1421 7.1783 12.0028 7.40025 11.8141C7.40025 11.8141 8.19542 11.1382 8.85736 10.377C8.85736 10.377 10.9375 7.98482 10.9375 5.6875Z" fill="black" fill-opacity="0.4"/>
                            </svg>
                        </div>
                        <div>г. Краснодар</div>
                    </div>
                    <div className={cl.profilePersonEmail}>
                        <div>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.3125 10.5V3.0625C1.3125 2.82088 1.50838 2.625 1.75 2.625H12.25C12.4916 2.625 12.6875 2.82088 12.6875 3.0625V10.5C12.6875 10.5 12.6875 10.8624 12.4312 11.1187C12.4312 11.1187 12.1749 11.375 11.8125 11.375H2.1875C2.1875 11.375 1.82506 11.375 1.56878 11.1187C1.56878 11.1187 1.3125 10.8624 1.3125 10.5ZM2.1875 10.5H11.8125V3.5H2.1875V10.5Z" fill="black" fill-opacity="0.4"/>
                                <path d="M2.04563 2.74C1.96494 2.66603 1.85946 2.625 1.75 2.625C1.74366 2.625 1.73733 2.62514 1.731 2.62541C1.61507 2.63045 1.5059 2.68134 1.4275 2.76687C1.35353 2.84756 1.3125 2.95304 1.3125 3.0625C1.3125 3.06884 1.31264 3.07517 1.31291 3.0815C1.31795 3.19743 1.36884 3.3066 1.45437 3.385L6.70437 8.1975C6.87164 8.35083 7.12836 8.35083 7.29563 8.1975L12.5453 3.38527C12.6357 3.30241 12.6875 3.18513 12.6875 3.0625L12.6875 3.05886C12.6866 2.95066 12.6456 2.84663 12.5725 2.76687C12.4941 2.68134 12.3849 2.63045 12.269 2.62541C12.2627 2.62514 12.2563 2.625 12.25 2.625L12.248 2.625C12.1392 2.62551 12.0345 2.6665 11.9544 2.73999L7 7.2815L2.04563 2.74Z" fill="black" fill-opacity="0.4"/>
                            </svg>
                        </div>
                        <div>admin@re-control.com</div>
                    </div>
                </div>
                <div className={cl.profileStats__avatar}>
                    <img src={AvatarProfile} alt=""/>
                </div>
                <div className={cl.profileStats__values}>
                    <div className={cl.profileStatsValue}>
                        <div className={cl.profileStatsValue__naming}>
                            <div>Уровень управления</div>
                            <div>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.125C6 1.125 6.99157 1.125 7.89769 1.50826C7.89769 1.50826 8.77261 1.87832 9.44715 2.55285C9.44715 2.55285 10.1217 3.22739 10.4917 4.10231C10.4917 4.10231 10.875 5.00843 10.875 6C10.875 6 10.875 6.99156 10.4917 7.89768C10.4917 7.89768 10.1217 8.77261 9.44715 9.44715C9.44715 9.44715 8.77261 10.1217 7.89769 10.4917C7.89769 10.4917 6.99156 10.875 6 10.875C6 10.875 5.00843 10.875 4.10232 10.4917C4.10232 10.4917 3.22739 10.1217 2.55285 9.44715C2.55285 9.44715 1.87832 8.77261 1.50826 7.89769C1.50826 7.89769 1.125 6.99157 1.125 6C1.125 6 1.125 5.00843 1.50826 4.10231C1.50826 4.10231 1.87832 3.22739 2.55285 2.55285C2.55285 2.55285 3.22739 1.87832 4.10232 1.50826C4.10232 1.50826 5.00843 1.125 6 1.125ZM6 1.875C6 1.875 5.16052 1.875 4.39448 2.19901C4.39448 2.19901 3.65428 2.51208 3.08318 3.08318C3.08318 3.08318 2.51209 3.65428 2.19901 4.39448C2.19901 4.39448 1.875 5.16052 1.875 6C1.875 6 1.875 6.83948 2.19901 7.60552C2.19901 7.60552 2.51209 8.34572 3.08318 8.91681C3.08318 8.91681 3.65428 9.48792 4.39448 9.80099C4.39448 9.80099 5.16052 10.125 6 10.125C6 10.125 6.83948 10.125 7.60552 9.80099C7.60552 9.80099 8.34571 9.48792 8.91682 8.91681C8.91682 8.91681 9.48792 8.34571 9.80099 7.60552C9.80099 7.60552 10.125 6.83947 10.125 6C10.125 6 10.125 5.16053 9.80099 4.39448C9.80099 4.39448 9.48792 3.65428 8.91682 3.08318C8.91682 3.08318 8.34571 2.51208 7.60552 2.19901C7.60552 2.19901 6.83948 1.875 6 1.875Z" fill="#1C1C1C"/>
                                    <path d="M6 8.625H6.375C6.58211 8.625 6.75 8.45711 6.75 8.25C6.75 8.04289 6.58211 7.875 6.375 7.875V5.625C6.375 5.41789 6.20711 5.25 6 5.25H5.625C5.41789 5.25 5.25 5.41789 5.25 5.625C5.25 5.83211 5.41789 6 5.625 6V8.25C5.625 8.45711 5.79289 8.625 6 8.625Z" fill="#1C1C1C"/>
                                    <path d="M6.46875 3.9375C6.46875 4.24816 6.21689 4.5 5.90625 4.5C5.59561 4.5 5.34375 4.24816 5.34375 3.9375C5.34375 3.62684 5.59561 3.375 5.90625 3.375C6.21689 3.375 6.46875 3.62684 6.46875 3.9375Z" fill="#1C1C1C"/>
                                </svg>
                            </div>
                        </div>
                        <div className={cl.profileStatsValue__loader}></div>
                    </div>
                    <div className={cl.profileStatsValue}>
                        <div className={cl.profileStatsValue__naming}>Ст-ть содержания</div>
                        <div className={cl.profileStatsValue__counter}>1 549 246 ₽</div>
                    </div>
                    <div className={cl.profileStatsValue}>
                        <div className={cl.profileStatsValue__naming}>Объекты</div>
                        <div className={cl.profileStatsValue__counter}>48</div>
                    </div>
                    <div className={cl.profileStatsValue}>
                        <div className={cl.profileStatsValue__naming}>Доход (мес)</div>
                        <div className={cl.profileStatsValue__counter}>6 581 309 ₽</div>
                    </div>
                    <div className={cl.profileStatsValue}>
                        <div className={cl.profileStatsValue__naming}>Рейтинг (общий)</div>
                        <div className={cl.profileStatsValue__counter}>4,8 ⭐️</div>
                    </div>
                </div>
            </div>
            <div className={cl.profileData}>
                <div className={cl.profileData__header}>
                    <div className={cl.profileData__header_title}>Данные профиля</div>
                    <div className={cl.profileData__header_edit}>Редактировать профиль</div>
                </div>
                <div className={cl.profileBody}>
                    <div className={cl.profileBody__fields}>
                        <div className={cl.profileBody__field}>
                            <div className={cl.profileBody__field_name}>ФИО</div>
                            <div className={cl.profileBody__field_value}>Ткаченко И. Г.</div>
                        </div>
                        <div className={cl.profileBody__field}>
                            <div className={cl.profileBody__field_name}>Организация</div>
                            <div className={cl.profileBody__field_value}>ООО “Мега-кластер”</div>
                        </div>
                        <div className={cl.profileBody__field}>
                            <div className={cl.profileBody__field_name}>Контактный телефон</div>
                            <div className={cl.profileBody__field_value}>+7 (989) 999-89-89</div>
                        </div>
                        <div className={cl.profileBody__field}>
                            <div className={cl.profileBody__field_name}>Email</div>
                            <div className={cl.profileBody__field_value}>admin@re-control.com</div>
                        </div>
                        <div className={cl.profileBody__field}>
                            <div className={cl.profileBody__field_name}>Город</div>
                            <div className={cl.profileBody__field_value}>Краснодар</div>
                        </div>
                        <div className={cl.profileBody__field}>
                            <div className={cl.profileBody__field_name}>Способ связи</div>
                            <div className={cl.profileBody__field_value}>Телефон, email</div>
                        </div>
                        <div className={cl.profileBody__field}>
                            <div className={cl.profileBody__field_name}>Разрешить изменения</div>
                            <div className={cl.profileBody__field_value}>Да</div>
                        </div>
                    </div>
                    <div className={cl.profileBody__success}>
                        <div className={cl.profileBody__success_icon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1909 15.777C11.0048 15.5992 10.7574 15.5 10.5 15.5C10.4998 15.5 10.4773 15.5003 10.4773 15.5003C10.2122 15.5063 9.96027 15.6174 9.77704 15.8091C9.59923 15.9952 9.5 16.2426 9.5 16.5L9.50026 16.5227C9.50627 16.7878 9.61737 17.0397 9.80911 17.223L13.4716 20.723C13.8579 21.0921 14.4662 21.0924 14.8528 20.7236L22.19 13.7238C22.3819 13.5407 22.4935 13.2887 22.4997 13.0235C22.5001 13.0075 22.5001 12.9915 22.4997 12.9755C22.4936 12.727 22.3952 12.4896 22.2236 12.3097C22.0348 12.1119 21.7734 12 21.5 12L21.4718 12.0004C21.2245 12.0074 20.9887 12.1057 20.8097 12.2764L14.1631 18.6174L11.1909 15.777Z" fill="#1C1C1C"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C16 3 18.6442 3 21.0605 4.02201C21.0605 4.02201 23.3936 5.00884 25.1924 6.80761C25.1924 6.80761 26.9912 8.60638 27.978 10.9395C27.978 10.9395 29 13.3558 29 16C29 16 29 18.6442 27.978 21.0605C27.978 21.0605 26.9912 23.3936 25.1924 25.1924C25.1924 25.1924 23.3936 26.9912 21.0605 27.978C21.0605 27.978 18.6442 29 16 29C16 29 13.3558 29 10.9395 27.978C10.9395 27.978 8.60638 26.9912 6.80761 25.1924C6.80761 25.1924 5.00884 23.3936 4.02202 21.0605C4.02202 21.0605 3 18.6442 3 16C3 16 3 13.3558 4.02202 10.9395C4.02202 10.9395 5.00885 8.60638 6.80761 6.80761C6.80761 6.80761 8.60638 5.00884 10.9395 4.02201C10.9395 4.02201 13.3558 3 16 3ZM16 5C16 5 13.7614 5 11.7186 5.86402C11.7186 5.86402 9.74476 6.69889 8.22183 8.22182C8.22183 8.22182 6.6989 9.74476 5.86402 11.7186C5.86402 11.7186 5 13.7614 5 16C5 16 5 18.2386 5.86402 20.2814C5.86402 20.2814 6.69889 22.2552 8.22183 23.7782C8.22183 23.7782 9.74476 25.3011 11.7186 26.136C11.7186 26.136 13.7614 27 16 27C16 27 18.2386 27 20.2814 26.136C20.2814 26.136 22.2552 25.3011 23.7782 23.7782C23.7782 23.7782 25.3011 22.2552 26.136 20.2814C26.136 20.2814 27 18.2386 27 16C27 16 27 13.7614 26.136 11.7186C26.136 11.7186 25.3011 9.74476 23.7782 8.22183C23.7782 8.22183 22.2552 6.69889 20.2814 5.86402C20.2814 5.86402 18.2386 5 16 5Z" fill="#1C1C1C"/>
                            </svg>
                        </div>
                        <div className={cl.profileBody__success_description}>
                            <div className={cl.topSuccessBody}>Всё хорошо!</div>
                            <div className={cl.bottomSuccessBody}>Все данные заполнены и проверены. Никаких действий не требуется.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.profileTasksAndMobile}>
                <div className={cl.profileTasks}>
                    <div className={cl.profileTasks__header}>
                        <div className={cl.profileTasks__header_name}>Ваши последние задачи</div>
                        <div className={cl.profileTasks__header_value}>Все задачи</div>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Задача</th>
                                <th>Поставлена</th>
                                <th>Прошло времени</th>
                                <th>Статус</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={cl.tdTasks}>
                                        Создать аналитику
                                    </td>
                                    <td className={cl.tdTasks}>
                                        18.02.2023
                                    </td>
                                    <td className={cl.tdTasks}>
                                        3 ч 20 мин
                                    </td>
                                    <td>
                                        <div className={cl.tableStatus1}>
                                            <div>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="url(#paint0_linear_2313_6049)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_2313_6049" x1="11" y1="7.76623" x2="4.99994" y2="7.78888" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#8244DC"/>
                                                        <stop offset="0.0001" stop-color="#8244DC"/>
                                                        <stop offset="0.515625" stop-color="#A756CD"/>
                                                        <stop offset="1" stop-color="#BC6EC1"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            </div>
                                            <div>В процессе</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cl.tdTasks}>
                                        Отобрать гипотезы
                                    </td>
                                    <td className={cl.tdTasks}>
                                        18.02.2023
                                    </td>
                                    <td className={cl.tdTasks}>
                                        12 ч 21 мин
                                    </td>
                                    <td>
                                        <div className={cl.tableStatus2}>
                                            <div>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#A1E3CB"/>
                                                </svg>
                                            </div>
                                            <div>Завершено</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cl.tdTasks}>
                                        Сгенерировать план
                                    </td>
                                    <td className={cl.tdTasks}>
                                        17.02.2023
                                    </td>
                                    <td className={cl.tdTasks}>
                                        26 ч 58 мин
                                    </td>
                                    <td>
                                        <div className={cl.tableStatus3}>
                                            <div>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#FFE999"/>
                                                </svg>
                                            </div>
                                            <div>В процессе</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cl.tdTasks}>
                                        Получить анализ
                                    </td>
                                    <td className={cl.tdTasks}>
                                        16.02.2023
                                    </td>
                                    <td className={cl.tdTasks}>
                                        17 ч 22 мин
                                    </td>
                                    <td>
                                        <div className={cl.tableStatus4}>
                                            <div>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="black" fill-opacity="0.4"/>
                                                </svg>
                                            </div>
                                            <div>В процессе</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cl.tdTasks}>
                                        Заменить данные
                                    </td>
                                    <td className={cl.tdTasks}>
                                        14.02.2023
                                    </td>
                                    <td className={cl.tdTasks}>
                                        78 ч 05 мин
                                    </td>
                                    <td>
                                        <div className={cl.tableStatus5}>
                                            <div>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#B1E3FF"/>
                                                </svg>
                                            </div>
                                            <div>В процессе</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={cl.profileMobile}>
                    <div className={cl.profileMobile__titles}>
                        <div className={cl.profileMobile__title}>В приложении работать удобнее!</div>
                        <div className={cl.profileMobile__title}>Не хотите попробовать?</div>
                    </div>
                    <div className={cl.profileMobile__photo}>
                        <img src={photoPhoneProfile} alt=""/>
                    </div>
                    <div className={cl.profileMobile__btns}>
                        <div className={cl.profileMobile__btn}>
                            <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2313_24148)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6334 4.5C14.759 5.35331 14.4117 6.18928 13.9535 6.78073C13.4633 7.41514 12.6184 7.90582 11.7998 7.88021C11.6503 7.06324 12.033 6.22149 12.4985 5.65565C13.0092 5.03115 13.8845 4.55204 14.6334 4.5ZM17.0927 16.5109C17.5147 15.8641 17.6724 15.5378 18 14.8075C15.6171 13.9014 15.2353 10.5137 17.5936 9.21352C16.8743 8.31147 15.8635 7.78857 14.9094 7.78857C14.2219 7.78857 13.7508 7.96798 13.3226 8.13108C12.9657 8.267 12.6386 8.39159 12.2408 8.39159C11.8108 8.39159 11.4301 8.25508 11.0314 8.11213C10.5933 7.95506 10.1336 7.79023 9.56312 7.79023C8.49239 7.79023 7.3527 8.44446 6.63012 9.56294C5.61441 11.1382 5.78766 14.0996 7.43481 16.6224C8.02354 17.5253 8.81016 18.5397 9.83901 18.5487C10.2659 18.553 10.55 18.4256 10.8574 18.2877C11.2093 18.1299 11.5917 17.9583 12.2539 17.9548C12.92 17.9508 13.2964 18.1244 13.6436 18.2846C13.9431 18.4227 14.2209 18.5508 14.6441 18.5463C15.6738 18.538 16.5039 17.4137 17.0927 16.5109Z" fill="#0B0B0A"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2313_24148">
                                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>AppStore</div>
                        </div>
                        <div className={cl.profileMobile__btn}>
                            <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2313_24116)">
                                        <path d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5Z" fill="white"/>
                                        <path d="M11.9999 8.82C13.1266 8.82 13.8866 9.30667 14.3199 9.71333L16.0132 8.06C14.9732 7.09333 13.6199 6.5 11.9999 6.5C9.65323 6.5 7.62656 7.84667 6.63989 9.80667L8.57989 11.3133C9.06656 9.86667 10.4132 8.82 11.9999 8.82V8.82Z" fill="#EA4335"/>
                                        <path d="M17.76 12.6334C17.76 12.1401 17.72 11.7801 17.6333 11.4067H12V13.6334H15.3067C15.24 14.1867 14.88 15.0201 14.08 15.5801L15.9733 17.0467C17.1067 16.0001 17.76 14.4601 17.76 12.6334V12.6334Z" fill="#4285F4"/>
                                        <path d="M8.58667 13.6866C8.46 13.3133 8.38667 12.9133 8.38667 12.5C8.38667 12.0866 8.46 11.6866 8.58 11.3133L6.64 9.80664C6.23333 10.62 6 11.5333 6 12.5C6 13.4666 6.23333 14.38 6.64 15.1933L8.58667 13.6866V13.6866Z" fill="#FBBC05"/>
                                        <path d="M12.0001 18.5001C13.6201 18.5001 14.9801 17.9668 15.9734 17.0468L14.0801 15.5801C13.5734 15.9334 12.8934 16.1801 12.0001 16.1801C10.4134 16.1801 9.06673 15.1334 8.58673 13.6868L6.64673 15.1934C7.6334 17.1534 9.6534 18.5001 12.0001 18.5001V18.5001Z" fill="#34A853"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2313_24116">
                                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>Google Play</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.footerProfile}>
                <div className={cl.footerProfile__copyright}>© 2023 re:Control</div>
                <div className={cl.footerProfile__menu}>
                    <div className={cl.footerProfile__menu_el}>О системе</div>
                    <div className={cl.footerProfile__menu_el}>Поддержка</div>
                    <div className={cl.footerProfile__menu_el}>База знаний</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;