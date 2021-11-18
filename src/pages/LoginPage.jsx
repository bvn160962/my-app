import React from 'react'
import styles from '../components/Faq/faq.module.scss'

function handleSubmit (event) {
    if (event) event.preventDefault();
    //alert(''+values.username+'|'+values.password);
    console.log(''+values.username+'|'+values.password);

    fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>console.log(json));

    //login: mor_2314 | 83r5^_

    // fetch('https://fakestoreapi.com/auth/login', {
    //         method:'POST',
    //         body: JSON.stringify({
    //             username: "mor_2314",
    //             password: "83r5^_"
    //         })})
    //         .then(res  => res.json())
    //         .then(json => console.log(json)
    //         .catch((e) => {console.error(e)})
    //         );
}

function handleChange (e) {
    
    //console.log(e.target.name+'|'+e.target.value);
    if (e.target.name === "username") values.username = e.target.value;
    if (e.target.name === "password")  values.password = e.target.value;
}

let values = {
    isLoggedIn: false,
    username: null,
    password: null
}

function LoginPage() {
    return (
        <div>
            {
        values.isLoggedIn
        ? <div>Logged In</div>
        :
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Регистрация</legend>
            <label className={styles.label}>
              <input
                onChange={handleChange}
                //value="mor_2314"
                type="text"
                name="username"
                placeholder="Имя пользователя"
              />
            </label>
            <label className={styles.label}>
              <input
                onChange={handleChange}
                //value="83r5^_"
                type="password"
                name="password"
                placeholder="Пароль"
              />
            </label>
            <button type="submit">Зарегистрироваться</button>
          </fieldset>
        </form>

            }
        </div>
    )
}

export default LoginPage
