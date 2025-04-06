import { CommonButton } from "../Buttons";
import styles from "./Cart.module.css"
import { CartProductCard } from "../CartProductCard";
export const Cart = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 12500.00,
      quantity: 1,
      imageUrl: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Premium Cotton T-Shirt',
      price: 4500.00,
      quantity: 2,
      imageUrl: '/api/placeholder/80/80'
    }
  ];
  const isEmpty = products.length === 0;
  const isOffline = true; // Set to true to show offline notice

  // Calculate cart totals
  const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const deliveryFee = subtotal > 0 ? 1500.00 : 0;
  const grandTotal = subtotal + deliveryFee;





  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Order Details</h1>
        <p className={styles.subtitle}>
          Please provide customer information, review your shopping cart, and confirm your order.
        </p>
      </div>

      <div className={styles.cartSection}>
        <div className={styles.customerSection}>
          <select className={styles.customerDropdown}>
            <option>—Walk-in Customer—</option>
          </select>

          <div className={styles.cartHeader}>
            <span className={styles.cartCount}>Cart Items: 0</span>
            {isOffline && (
              <button className={styles.clearButton}>Clear all</button>
            )}
          </div>
        </div>

        {isEmpty ? (
          <div className={styles.emptyState}>
            
            <div className={styles.emptyContent}>
              <h2 className={styles.emptyTitle}>Oops!</h2>
              <p className={styles.emptyMessage}>Your shopping cart is currently empty. Add a product!</p>
            </div>
          </div>
        ) : (
            <>
              {products.map(product => (
                <CartProductCard
                  key={product.id}
                  product={product}
                  // onRemove={handleRemoveProduct}
                  // onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </>
        )}

        <div className={styles.summarySection}>
          <div>
            <div className={styles.summaryRow}>
              <span>Subtotal Amount</span>
              <span>GHS {subtotal.toLocaleString()}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery Fee</span>
              <span>GHS {deliveryFee.toLocaleString()}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.grandTotal}`}>
              <strong>Grand Total</strong>
              <strong>GHS {grandTotal.toLocaleString()}</strong>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.methodSection}>
            <h4 className={styles.methodTitle}>Order Method</h4>
            <select className={styles.selectInput}>
              <option>Pick Up</option>
              <option>Delivery</option>
            </select>
          </div>
          <div className={styles.methodSection}>
            <h4 className={styles.methodTitle}>Payment Method</h4>
            <select className={styles.selectInput}>
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Bank Transfer</option>
            </select>
          </div>
        </div>

        <CommonButton isFullwidth >Confirm Order</CommonButton>
      </div>
    </div>
  );
};
