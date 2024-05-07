import { getLayout } from '@/components/layout/main-navigation'
import { StartingPageContent } from '@/components/starting-page'

function HomePage() {
  return <StartingPageContent />
}
HomePage.getLayout = getLayout
export default HomePage
