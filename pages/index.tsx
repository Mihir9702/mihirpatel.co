import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import sun from '../public/2k_sun.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mihir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.fstar} />
          <div className={styles.mstar} />
          <div className={styles.bstar} />
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Mihir</h1>
          </div>
        </header>
        <div className={styles.section}>
          <div className={styles.sun} />
        </div>
      </div>
    </>
  )
}

export default Home
