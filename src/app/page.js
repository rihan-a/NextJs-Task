'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [parentCategoryId, setParentCategoryId] = useState(0);
  const [subCategories, setSubCategories] = useState([]);

  const handleMainCategory = (event) => {
    setParentCategoryId(event.target.value);
    console.log(event.target.value);
  };

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


  //get selected sub categories using the selected parent Id 
  useEffect(() => {
    if (parentCategoryId) {
      const selectedCategory = categories.filter((category) => category.id == parentCategoryId);
      if (selectedCategory && selectedCategory[0].children) {
        console.log(selectedCategory[0].children);
        setSubCategories(selectedCategory[0].children);
      }
    } else {
      setSubCategories([]);
    }
  }, [parentCategoryId, categories]);

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <h2>Multi-Level Forms task:</h2>
        <h4>Parent Category</h4>

        <select className={styles.select} value={parentCategoryId} onChange={handleMainCategory}>
          <option>Select Parent Category</option>;
          {categories.map((category) => {
            return <option key={category.id} value={category.id}>{category.name}</option>;
          })}
        </select>

        <h4>Sub Category</h4>

        <select className={styles.select}>
          <option>Select Sub-category</option>
          {subCategories.map((category) => {
            return <option key={category.id} >{category.name}</option>;
          })}
        </select>

      </div>
    </main>
  );
}
