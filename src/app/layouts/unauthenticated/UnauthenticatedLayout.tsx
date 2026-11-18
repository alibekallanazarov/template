import { Outlet } from '@tanstack/react-router'

import { UnauthenticatedFooter } from './UnauthenticatedFooter'
import { UnauthenticatedHeader } from './UnauthenticatedHeader'

export function UnauthenticatedLayout() {
  return (
    <>
      <UnauthenticatedHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <UnauthenticatedFooter />
    </>
  )
}
