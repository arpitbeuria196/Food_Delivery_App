import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-5">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Your Cart</h1>
            <div className="flex justify-between items-center mb-4">
                <button
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                <p className="text-lg font-medium text-gray-600">
                    {cartItems.length === 0 ? "Cart is Empty. Add Items to the Cart!" : `${cartItems.length} items in your cart`}
                </p>
            </div>
            {cartItems.length > 0 ? (
                <ItemList items={cartItems} />
            ) : (
                <div className="flex justify-center items-center h-48">
                    <h2 className="text-xl text-gray-500">Your cart is empty.</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
