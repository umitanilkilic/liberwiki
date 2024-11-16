import Link from 'next/link'

import React from 'react'

import { sUseTranslation } from '@/i18n'

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const { t } = await sUseTranslation(['common'])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-2">
      {children}
      <div className="w-100 flex justify-center">
        <Link prefetch={true} href={{ pathname: '/' }} className="hover:underline">
          {t('common:backToWebsite')}
        </Link>
      </div>
    </main>
  )
}
