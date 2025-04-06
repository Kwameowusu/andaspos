
import { DeleteIcon } from '../../assets/DeleteIcon';
import { PlusIcon } from '../../assets/PlusIcon';
import styles from './CartProductCard.module.css';

export const CartProductCard = ({
  product = {
    id: 1,
    name: 'Product Name',
    price: 2500.00,
    quantity: 1
  },

}) => {


  return (
    <div className={styles.productCard}>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.productPrice}>GHS {product.price.toLocaleString()}</div>
      </div>

      <div className={styles.productActions}>
        <div className={styles.quantityControl}>
          <button
            className={styles.quantityButton}
            // onClick={handleDecreaseQuantity}
            disabled={product.quantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span className={styles.quantityValue}>{product.quantity}</span>

          <button
            className={styles.quantityButton}
            // onClick={handleIncreaseQuantity}
            aria-label="Increase quantity"
          >
            <PlusIcon/>
          </button>
        </div>

        <button
          className={styles.removeButton}
          // onClick={handleRemove}
          aria-label="Remove item"
        >
          <DeleteIcon style={{scale:'2'}} />
        </button>
      </div>
    </div>
  );
};