import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

type Props = {
  count: number;
}

export async function getStaticProps() {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY ?? ''},
  };
  const res = await fetch('https://hisasann.microcms.io/api/v1/cup-ramen-counter', key);
  const json = await res.json()
  return {
    props: {
      count: json.count,
    },
  }
}

export default function Home({ count }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>カップラーメン食べた回数</title>
        <meta name="description" content="カップラーメン食べた回数" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          カップラーメン食べた回数
        </h1>

        <div className={styles.count}>
          <p>
            { count }
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/hisasann"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            hisasann
          </span>
        </a>
      </footer>
    </div>
  )
}
