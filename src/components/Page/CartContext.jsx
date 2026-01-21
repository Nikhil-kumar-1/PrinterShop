import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const hasLoaded = useRef(false);

  // Load cart from localStorage on initial render - ONLY ONCE
  useEffect(() => {
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    try {
      const savedCart = localStorage.getItem("printCart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        // Validate parsed data
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        }
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      // Clear invalid data
      localStorage.removeItem("printCart");
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return;

    try {
      localStorage.setItem("printCart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems, isInitialized]);

  // Debug log to check cart state
  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem("printCart");
    } catch (error) {
      console.error("Failed to clear cart from localStorage:", error);
    }
  };

  const cartTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(String(item.price).replace(/,/g, "")) || 0;
    return total + price * (item.quantity || 1);
  }, 0);

  const cartCount = cartItems.reduce(
    (count, item) => count + (item.quantity || 1),
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInitialized,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
