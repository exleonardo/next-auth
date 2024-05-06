import s from '../style/starting-page.module.scss'
export const StartingPageContent = () => {
  // Show Link to Login page if NOT auth

  return (
    <section className={s.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  )
}
