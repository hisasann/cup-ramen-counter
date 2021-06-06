import Head from 'next/head'
//import Image from 'next/image'
import React, { useEffect } from 'react'
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

const name = `@hisasann`
const title = `がカップラーメンを食べた回数カウンター`;

export default function Home({ count }: Props) {
  useEffect(() => {
    location.hash = '🍜';
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>{name}{title}</title>
        <meta name="description" content="@hisasannがカップラーメンをなるべく食べないように健康に気を使うために作ったサイトです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {name}{title}
        </h1>

        <div className={styles.count}>
          <p>
            { count }🍜
          </p>
        </div>
        <div className={styles.badge}>
          <div><a href="https://github.com/hisasann/cup-ramen-counter/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"><img src="https://img.shields.io/github/issues/hisasann/cup-ramen-counter" alt="GitHub issues" /></a></div>
          <div><a href="https://github.com/hisasann/cup-ramen-counter"><img src="https://img.shields.io/github/forks/hisasann/cup-ramen-counter" alt="GitHub forks" /></a></div>
          <div><a href="https://github.com/hisasann/cup-ramen-counter"><img src="https://img.shields.io/github/stars/hisasann/cup-ramen-counter" alt="GitHub stars" /></a></div>
          <div><a href="https://github.com/hisasann/cup-ramen-counter/blob/main/license.md"><img src="https://img.shields.io/github/license/hisasann/cup-ramen-counter" alt="GitHub license" /></a></div>
          <div><a href="https://twitter.com/hisasann"><img src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fhisasann%2Fcup-ramen-counter" alt="Twitter" /></a></div>
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
