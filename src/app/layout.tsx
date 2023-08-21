import Link from 'next/link';

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Busque informações de livros pelo ISBN',
  description: 'Encontre informações de livros publicados no Brasil, como capa, autor, ano, editora, assunto, número de páginas e sinopse através do código ISBN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <nav id="navbar" className='flex flex-row gap-1'>
          <Link href="/" className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14.8185 11.795C15.2156 11.2028 15.4474 10.49 15.4474 9.72368C15.4474 7.66715 13.7802 6 11.7237 6C9.66715 6 8 7.66715 8 9.72368C8 11.7802 9.66715 13.4474 11.7237 13.4474C12.49 13.4474 13.2028 13.2156 13.795 12.8185L16.2711 15.2945L16.3381 15.3524L16.3455 15.3579C16.629 15.5682 17.031 15.5451 17.288 15.288C17.5707 15.0054 17.5707 14.5472 17.288 14.2646L14.8185 11.795ZM11.7237 7.44737C12.9809 7.44737 14 8.46651 14 9.72368C14 10.9809 12.9809 12 11.7237 12C10.4665 12 9.44737 10.9809 9.44737 9.72368C9.44737 8.46651 10.4665 7.44737 11.7237 7.44737ZM6.5 2C5.11929 2 4 3.11929 4 4.5V19.5C4 20.8807 5.11929 22 6.5 22H19.75C20.1642 22 20.5 21.6642 20.5 21.25C20.5 20.8358 20.1642 20.5 19.75 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5H19.75C20.1642 19.5 20.5 19.1642 20.5 18.75V4.5C20.5 3.11929 19.3807 2 18 2H6.5ZM19 18H5.5V4.5C5.5 3.94772 5.94772 3.5 6.5 3.5H18C18.5523 3.5 19 3.94772 19 4.5V18Z" fill="#212121"/>
            </svg>
            <span>Busca ISBN</span>
          </Link>
        </nav>
        {children}
        </body>
    </html>
  )
}
