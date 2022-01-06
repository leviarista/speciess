import Image from 'next/image'
import styles from '../styles/modules/Home.module.css'
import Meta from '/components/shared/Meta'
import logo from '../public/images/speciess-logo.svg';

export default function Home() {
  return (
    <div>
      <Meta />

      <main className="container text-center">
        <header className={styles.header} >
          <Image src={logo} alt="logo" />
          <h1 className={styles.titleLogo}>
            SPE<span className="text-primary">C</span>IE<span className="text-primary">SS</span>
          </h1>
          CSS art of endangered species
        </header>

        <section className={styles.welcomeCard}>
          <b>What is it?</b>
          <p>
          Here you can create, explore and share CSS art about endangered species (from the IUCN Red List) and so spread raise awareness about it.
          </p>
        </section>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

    </div>
  )
}
