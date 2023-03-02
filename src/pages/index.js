import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import ErrorBoundary from './ErrorBoundary';
import Vid from  '/src/components/Videos'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <ErrorBoundary>
        <Vid />
      </ErrorBoundary>
    </>
  )
}
