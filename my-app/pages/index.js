import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Comp from '../components/pageComp'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Comp/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
