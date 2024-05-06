import { getLayout } from '@/components/layout/main-navigation'
import { UserProfile } from '@/components/profile'

function ProfilePage() {
  return <UserProfile />
}
ProfilePage.getLayout = getLayout
export default ProfilePage
