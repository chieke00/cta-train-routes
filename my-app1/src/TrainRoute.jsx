import React from 'react'
import styles from './TrainRoute.module.css'

const TrainRoute = ({
  route,
  color = '#000000',
  textColor = '#FFFFFF',
  status,
  statusColor = '#404040',
  url
}) => {
  return (
    <div
      className={styles.routeCard}
      style={{ backgroundColor: `#${color}`, color: `#${textColor}` }}
    >
      <h2>{route}</h2>
      <p>
        <strong>Status:</strong>{' '}
        <span style={{ color: `#${statusColor}` }}>{status}</span>
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Route Details
      </a>
    </div>
  );
};

export default TrainRoute