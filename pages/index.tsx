import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

type Props = {
  count: number;
}

// SSG のタイミングで呼び出される Props を渡すための非同期処理
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

const name = `ひささん`
const title = `${name}がカップラーメン食べた回数`;

export default function Home({ count }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="`${title}`" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {name}{title}
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
