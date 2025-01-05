import { useEffect, useState } from 'react';
import styles from "./Card.module.css";
import classNames from 'classnames';

interface ICardProps {
  title: string;
  text: string;
  buttonHandler?: () => void;
  buttonName?: string;
};

const Card = ({ title, text, buttonHandler, buttonName }: ICardProps) => {
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  
  const [isCardClose, setIsCardClose] = useState<boolean>(false);
  
  const handleCloseCard = () => {
    setIsCardClose(true);
  };
  
  useEffect(() => {
    let timer: number | undefined;

    if (isCardClose) {
      timer = setTimeout(() => {
        setIsCardClose(false);
      }, 4000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    }
  }, [isCardClose]);

  const cardClassname = classNames(styles.card, {
    [styles.close]: isCardClose,
  });

  return (
    <div className={cardClassname}>
      <div className={styles.buttonClose}>
        <button onClick={handleCloseCard}>x</button>
      </div>
      <div className={styles.cardMain}>
        <div className={styles.cardLeft}>
          <img />
        </div>
        <div className={styles.cardRight}>
          <span>{title}</span>
          <span>{text}</span>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.currentTime}>
          <span>
            {currentHour.toString().length === 1
              ? `0${currentHour}`
              : currentHour}
            :
            {currentMinutes.toString().length === 1
              ? `0${currentMinutes}`
              : currentMinutes}
          </span>
        </div>
        {buttonHandler && (
          <button className={styles.buttonReply} onClick={buttonHandler}>
            {buttonName}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
