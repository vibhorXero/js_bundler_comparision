import React from 'react';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, world!</h1>
      <p className={styles.text}>
        This is a sample React application to test bundlers.
      </p>
    </div>
  );
};

export default App;
