import { FormEvent, useRef, useState } from 'react'

import s from '../style/auth-form.module.scss'

const createUser = async (email: string, password: string) => {
  const response = await fetch('/api/auth/signup', {
    body: JSON.stringify({ email, password }),
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data
}

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState)
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    if (isLogin) {
      //some
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword)
      } catch (err) {}
    }
  }

  return (
    <section className={s.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={s.control}>
          <label htmlFor={'email'}>Your Email</label>
          <input id={'email'} ref={emailInputRef} required type={'email'} />
        </div>
        <div className={s.control}>
          <label htmlFor={'password'}>Your Password</label>
          <input id={'password'} ref={passwordInputRef} required type={'password'} />
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
