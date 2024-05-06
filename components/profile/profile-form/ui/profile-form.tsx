import s from '../style/profile-form.module.scss'

export const ProfileForm = () => {
  return (
    <form className={s.form}>
      <div className={s.control}>
        <label htmlFor={'new-password'}>New Password</label>
        <input id={'new-password'} type={'password'} />
      </div>
      <div className={s.control}>
        <label htmlFor={'old-password'}>Old Password</label>
        <input id={'old-password'} type={'password'} />
      </div>
      <div className={s.action}>
        <button>Change Password</button>
      </div>
    </form>
  )
}
