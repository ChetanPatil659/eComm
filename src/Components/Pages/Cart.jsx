import React from "react";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container mx-auto sm:px-4 flex items-center justify-center">
        <div className="flex flex-wrap h-full w-full">
          <div className="md:w-full pr-4 pl-4 py-5 bg-gray-100 text-center">
            <h4 className="p-6 display-5">Your Cart is Empty</h4>
            <Link to='/' className=" lg:inline-block py-2 px-6 bg-[#6366f1] hover:bg-[#383983] relative text-sm text-white font-bold rounded-xl transition duration-200" href="#">
              Continue Shopping

            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 99;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>

        <div class="h-screen bg-gray-100 pt-20">
          <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              {state.map((data) => {
                return (
                  <div key={state.id} class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img src={data.image} alt="product-image" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">{data.title}</h2>
                        <p class="mt-1 text-xs text-gray-700">$ {data.price}</p>
                      </div>
                      <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => {
                    
                              removeItem(data);
                            }}
                          > - </span>
                          <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" />
                          <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => {
                              addItem(data);

                            }}
                          > + </span>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-sm">$ {subtotal}</p>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}


            </div>

            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">$ {subtotal}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">$4.99</p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">${Math.round(subtotal)}</p>
                  <p class="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Link to='/checkout'><button class="mt-6 w-full rounded-md bg-[#6366f1] py-1.5 font-medium text-blue-50 hover:bg-[#383983]">Checkout</button></Link>
            </div>
          </div>
        </div>

      </>
    );
  };

  return (
    <>
      <div className="w-screen py-3">
        {/* <h1 className="text-center">Cart</h1> */}
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
