import { Button } from 'antd';
import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.notFound}>
    <span className={styles.notFound__label}>Page not found</span>
    <a href="/">
      <Button type="ghost">Homepage</Button>
    </a>
  </div>
);

export default NotFound;
