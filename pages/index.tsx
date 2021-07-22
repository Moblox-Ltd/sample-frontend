import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useQuery } from '@apollo/client'

import LANGUAGE_QUERY from './LanguagesQuery.graphql';

export default function Home() {
  const {data, loading, error} = useQuery(LANGUAGE_QUERY);

  if (error) {
    return <p>an error ocurred</p>;
  }

  console.log("###################");
  console.log(data);
  console.log("###################");
  return (
    <div className={styles.container}>
      <Head>
        <title>Getting data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Language</h1>
      { loading && <p>loading...</p>}
      <div>
       {data && data.language_by_id.name}
      </div>      
    </div>
  )
}
