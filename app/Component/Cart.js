import { useContext } from 'react'
import { CartContext } from '../CartContext'
import { useRouter } from 'next/navigation'

export default function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    const containerStyle = {
        backgroundImage: 'url(https://img.freepik.com/free-photo/colorful-abstract-textured-background-design_53876-108265.jpg?w=1060&t=st=1721988803~exp=1721989403~hmac=25903ce9e9f89ef073ec83501bf868ff8b19bc4cbb4b9b12f4ed716b2826b501)', // Update the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const router = useRouter();

    const handleClick = () => {
      // Add checkout logic here if needed
      console.log('Checkout button clicked');
      router.push('/Checkout'); // Navigate to the checkout route
    };
    return (
      <>
        <div  style={containerStyle} className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
        <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    clearCart()
                  }}
                >
                  Clear cart
                </button>
          <h1 className="text-2xl font-bold">My Cart</h1>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex gap-4">
                  <img src={item.image} alt={item.title} className="rounded-md h-24" />
                  <div className="flex flex-col">
                    <h1 className=" text-sm font-bold">{item.title}</h1>
                    <p className=" mt-6 font-extrabold"> &#x20b9;{item.price}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    className="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(item)
                    }}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      removeFromCart(item)
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          {
            cartItems.length > 0 ? (
              <div className="flex flex-col justify-between items-center">
                <h1 className="text-lg font-bold">Total: &#x20b9;{getCartTotal()}</h1>
                <button
                  className="   px-12 py-6 bg-blue-600 text-white text-xs font-bold uppercase rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  onClick={handleClick}
                >
                  Checkout
                </button>
                
                
                
              </div>
            ) : (
              <h1 className="text-lg font-bold">Your cart is empty</h1>
            )
          }
        </div>
        
      </>
    )
}
