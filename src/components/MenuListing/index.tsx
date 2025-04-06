import { useState } from 'react';
import { ProductTable } from '../ProductTable'
import { ProductFilterToolBar } from '../ProductTable/ProductTableFilterToolBar'
import { Product } from '../types';
import styles from './MenuListing.module.css'

const MenuListing = () => {
  const [searchTerm, setsearchTerm] = useState("");

  const data: Product[] = [
    { id: 1, name: 'Malt', category: 'Drinks', quantity: 1 },
    { id: 2, name: 'Don Simon', category: 'Drinks', quantity: 45 },
    { id: 3, name: 'Voltic', category: '1201 Drinks', quantity: 20 },
    { id: 4, name: 'Alvaro', category: 'Drinks', quantity: 10 },
    { id: 5, name: 'Alvaro(on-In)', category: 'Drinks', quantity: 12 },
    { id: 6, name: 'Apple Cidar', category: 'Drinks', quantity: 20 },
    { id: 7, name: 'Apple Cidar(on-In)', category: 'Drinks', quantity: 23 },
    { id: 8, name: 'Asti Double', category: 'Pizzaman', quantity: 140 },
    { id: 9, name: 'Asti Double(glovo)', category: 'Pizzaman', quantity: 156 },
    { id: 10, name: 'Asti Double(on-In)', category: 'Pizzaman', quantity: 161 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.greeting}>Good Afternoon, Prince!</h1>
        <span className={styles.description} >
          Create a New Sale
        </span>
      </div>
      <ProductTable
        setGlobalFilter={(arg) => {
          setsearchTerm(arg);
        } }
        productList={data}
        globalFilter={searchTerm}
      >
        <ProductFilterToolBar
          globalFilter={searchTerm}
          setGlobalFilter={(arg) => {
            setsearchTerm(arg);
          }}
         />
      </ProductTable>
    </div>
    

  )
}

export default MenuListing