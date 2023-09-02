'use client';
import { useEffect } from 'react';
import styles from './page.module.css';



export default function Home() {

  // fetch categories data 
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "api/categories"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchCategories();
  }, []);

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
