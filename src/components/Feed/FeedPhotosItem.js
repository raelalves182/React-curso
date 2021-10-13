import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.tilte} />
      <span className={styles.visualizar}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
