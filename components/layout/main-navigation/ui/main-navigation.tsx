import { PropsWithChildren, ReactElement } from 'react'

import { Layout } from '@/components/layout/layout'
import { NextPage } from 'next'
import Link from 'next/link'

import s from '../style/main-navigation.module.scss'

export const MainNavigation = () => {
  return (
    <header className={s.header}>
      <Link href={'/'}>
        <div className={s.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/auth'}>Login</Link>
          </li>
          <li>
            <Link href={'/profile'}>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export const BaseLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>
}

export const getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
