import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <h2>Multi-Level Forms task:</h2>
        <h4>Parent Category</h4>
        <select className={styles.select}>
          <option>Select Parent Category</option>
        </select>
        <h4>Sub Category</h4>
        <select className={styles.select}>
          <option>Select Sub-category</option>
        </select>
      </div>
    </main>
  );
}
