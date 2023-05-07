import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Acordeon from '@/components/Acordeon'
import content from '../../public/content.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Diccionario</title>
        <meta name="description" content="Diccionario de Ignacio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.counter}>
          {content.length / 2 + " palabras"}
        </div>
        <Acordeon data={content} />
      </main>
    </>
  )
}
