import cart from '../assets/cart.png';
export const CartWidget = () => {
    return (
        <>
        <img src={cart} alt="cart" />
        <span>45</span>
        </>
    );
}