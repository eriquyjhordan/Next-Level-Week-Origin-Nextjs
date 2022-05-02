import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.navBar}>
          <img src="/Logo.svg" alt="Doctor Care logo" />
          <div>
            <a href="/">
              <img src="/menu-icon.svg" alt="menu button" />
            </a>
          </div>
        </div>
        <div className={styles.headerContainer}>
          <h4>BOAS-VINDAS A DOCTORCARE 👋</h4>
          <h1>Assistência médica simplificada para todos</h1>
          <h2>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </h2>
          <button>
            <img src="/whatsapp-icon.svg" alt="whatsapp icon" />
            <span>Agende sua consulta</span>
          </button>
          <div className={styles.mainFoto}>
            <img
              src="/main-photo.png"
              alt="Mulher negra com casaco verde sorrindo"
            />
          </div>
          <div className={styles.highlights}>
            <div>
              <h3>+3.500</h3>
              <p>Pacientes atendidos</p>
            </div>
            <div>
              <h3>+15</h3>
              <p>Especialistas disponíveis</p>
            </div>
            <div>
              <h3>+10</h3>
              <p>Anos no mercado</p>
            </div>
          </div>
        </div>
      </header>
      {/* <main>
        <div className={styles.mainContainer}>
          <div className={styles.mainContent}>
            <div className={styles.services}>
              <p>Serviços</p>
              <h2>
                Como podemos <br /> ajudá-lo a se sentir <br /> melhor?
              </h2>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
}
