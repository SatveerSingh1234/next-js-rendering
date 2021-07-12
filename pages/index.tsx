import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to next js app by Satveer Singh</title>
        <meta name="description" content="Welcome to next js app by Satveer Singh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is simple next js app to show Static Site Generation (SSG) with next js
        </h1>
        <p className={styles.description}>
          Best of luck!!
        </p>
        <p className={styles.description}>
          Click <Link href="/users">here</Link> to go to list users
        </p>
          
      </main>

      <footer className={styles.footer}>
        <a
          href="http://asiasoftwaresolutions.com/"
          target="_blank"
          rel="noreferrer"
        >
          App By Satveer from Asia Software Solutions
        </a>
      </footer>
    </div>
  )
}
