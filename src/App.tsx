import React from "react";
import styles from "./App.module.css";
import Card from './shared/Card/Card';

const App: React.FC = () => {
  const phrases = ["Куплю гараж: +7(937)584-32-87 ", "Текст 2", "Текст 3", "Текст 4"];
  
  return (
    <div className={styles.container}>
      <div className={styles.relativeContainer}>
        <h1 className={styles.heading}>
          i <br /> need a <br /> blowjob :
        </h1>
        <div className={`${styles.diagonalLine} ${styles.line1}`} />
        <div className={`${styles.diagonalLine} ${styles.line2}`} />
      </div>

      <div className={styles.buttons}>
        <a
          className={styles.button}
          href="https://t.me/al_padjino"
          target="_blank"
        >
          TG
        </a>
        <button className={styles.button}>EMAIL</button>
        <button className={styles.button}>GH</button>
      </div>
      <div
        style={{
          maxWidth: "350px",
          maxHeight: "200px",
          zIndex: "1",
          alignSelf: "baseline",
          position: "absolute",
          transform: "rotate(180deg) scale(1, -1)",
        }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src="/Bodrov.png"
          alt="Бодров сидит"
        />
      </div>
      <div className={styles.promo}>Здесь могла быть ваша реклама</div>
      <div
        className={styles.cardContainer}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
        }}
      >
        <Card
          title="Схожу на дейлик, закончу спринт!"
          text={"Дима, 22 года { 1 сообщение от Вас }"}
          buttonName="Ответить"
          buttonHandler={() => {}}
        />
      </div>
      {/* <div style={{ position: 'fixed', bottom: 0, maxWidth: '500px' }}>
        <img src="/Kremlin.png" alt="Кремль.пнг" style={{ width: '100%', height: '100%' }} />
      </div> */}
      <div className={styles.scrollingTextContainer}>
        <div className={styles.scrollingText}>
          {phrases.map((phrase) => (
            <p>{phrase}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
