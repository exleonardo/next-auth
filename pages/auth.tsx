import { AuthForm } from '@/components/auth'
import { getLayout } from '@/components/layout/main-navigation'

function AuthPage() {
  return <AuthForm />
}
AuthPage.getLayout = getLayout
export default AuthPage
