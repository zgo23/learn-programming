import React from 'react';
import { Header } from './Header';
import { HomePage } from './HomePage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
