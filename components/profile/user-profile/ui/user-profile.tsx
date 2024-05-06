import { ProfileForm } from '@/components/profile'

import s from '../style/user-profile.module.scss'

export const UserProfile = () => {
  // Redirect away if NOT auth

  return (
    <section className={s.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  )
}
