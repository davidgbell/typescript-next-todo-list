import Head from 'next/head';
import { TodosContainer } from '../components/TodosContainer';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript Todos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Do Stuff</h1>
        <TodosContainer />
      </main>
    </div>
  );
}
