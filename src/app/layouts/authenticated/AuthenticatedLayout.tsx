import { Outlet } from '@tanstack/react-router'

import { AuthenticatedSidebar } from '~/widgets/authenticated-sidebar'

import { AuthenticatedHeader } from './AuthenticatedHeader'

export function AuthenticatedLayout() {
  return (
    <>
      <AuthenticatedHeader />
      <div className="grid flex-1 grid-cols-[minmax(--spacing(16),var(--container-3xs))_1fr] md:gap-x-6 lg:gap-x-8">
        {/* Сайдбар рядом с main, а не внутри: в main только содержимое страницы, а сайдбар — отдельная
            landmark-область (https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/). */}
        <AuthenticatedSidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
