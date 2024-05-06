import { useState } from 'react'

import s from '../style/auth-form.module.scss'

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  function switchAuthModeHandler() {
    setIsLogin(prevState => !prevState)
  }

  return (
    <section className={s.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={s.control}>
          <label htmlFor={'email'}>Your Email</label>
          <input id={'email'} required type={'email'} />
        </div>
        <div className={s.control}>
          <label htmlFor={'password'}>Your Password</label>
          <input id={'password'} required type={'password'} />
        </div>
        <div className={s.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button className={s.toggle} onClick={switchAuthModeHandler} type={'button'}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  )
}
