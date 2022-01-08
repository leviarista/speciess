import Image from 'next/image'
import Meta from '/components/shared/Meta'
import Button from '/components/shared/Button'
import styles from '../styles/modules/Home.module.css'
import logo from '../public/images/speciess-logo.svg';

export default function Home() {
  return (
    <div className='full-height-container'>
      <Meta
        title={" "}
        description={"Explore CSS art of endangered species"}
      />

      <header className={"text-center " + styles.header} >
        <Image src={logo} alt="logo" />
        <h1 className={styles.titleLogo}>
          SPE<span className="text-primary">C</span>IE<span className="text-primary">SS</span>
        </h1>
        CSS art of endangered species
      </header>
      <main className="text-center">
        <section>
          <div className={styles.welcomeCard}>
            <b>What is it?</b>
            <p>
              Here you can create, explore and share CSS art about endangered species (from the IUCN Red List) and so spread raise awareness about it.
            </p>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              href="/create"
              text="Create"
              className="button-secondary text-uppercase"
            />
            <Button
              href="/explore"
              text="Explore"
              className="button-primary text-uppercase"
            />
          </div>
        </section>
      </main>

    </div>
  )
}
