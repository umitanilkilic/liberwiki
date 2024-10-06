import React from 'react'

import Footer from '@/components/aciksozluk/Footer'
import Header from '@/components/aciksozluk/Header'
import LeftColumn from '@/components/aciksozluk/LeftColumn'
import RightColumn from '@/components/aciksozluk/RightColumn'
import { ScrollArea } from '@/components/shadcn/scroll-area'

import RootLayout from '@/app/layout'

export default function TitleLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      <Header />
      <main className="contents">
        <div vaul-drawer-wrapper="">
          <div className="relative flex min-h-screen flex-col bg-background">
            <div className="border-b">
              <div className="container flex-1 items-start md:grid lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_240px] max-md:px-0">
                <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block">
                  <ScrollArea className="h-full py-6 pr-6 lg:py-8">
                    <LeftColumn />
                  </ScrollArea>
                </aside>
                {children}
                <aside className="fixed top-14 z-30 -mr-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 xl:sticky xl:block">
                  <ScrollArea className="h-full py-6 pl-6 lg:py-8">
                    <RightColumn />
                  </ScrollArea>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </RootLayout>
  )
}
