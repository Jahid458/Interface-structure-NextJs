import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function dashLayout({ children }: {children: ReactNode}) {
  return (
    <>
        <nav className='flex justify-around w-full bg-blue-400'>
            <ul className='flex gap-5'>
                <li>
                    <Link href={'/next-level'}>Next Level</Link>
                </li>
                <li>
                    <Link href={'/p-hero'}>P Hero</Link>
                </li>
            </ul>
        </nav>
        {children}
    </>
  )
}
