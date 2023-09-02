'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [categories, setCategories] = useState([]);

  // fetch categories data 
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "api/categories"
        );
        const data = await response.json();
        //console.log(data);
        setCategories(data);
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
          <option>Select Parent Category</option>;
          {categories.map((category) => {
            return <option key={category.id}>{category.name}</option>;
          })}
        </select>
        <h4>Sub Category</h4>
        <select className={styles.select}>
          <option>Select Sub-category</option>
        </select>
      </div>
    </main>
  );
}
