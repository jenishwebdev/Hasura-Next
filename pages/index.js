import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Link href="/front">
          <button>FRONT</button>
        </Link>
        <Link href="/data">
          <button>DATA</button>
        </Link>
        <Link href="/api">
          <button>API</button>
        </Link>
      </main>
    </div>
  )
}
