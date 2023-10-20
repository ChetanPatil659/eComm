import React from "react";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <div className="md:w-full pr-4 pl-4 py-5 bg-gray-100 text-center">
            <h4 className="p-6 display-5">No item in Cart</h4>
            <Link to="/" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white bg-white hover:bg-gray-900 mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
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
        <div className="container mx-auto sm:px-4 py-5">
          <div className="flex flex-wrap  my-4">
            <div className="md:w-2/5 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 order-md-last">
              <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4">
                <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900 py-3 bg-gray-100">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="flex-auto p-6">
                  <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300 ">
                    <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4">
              <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4">
                <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900 py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="flex-auto p-6">
                  <form className="needs-validation" novalidate>
                    <div className="flex flex-wrap  g-3">
                      <div className="sm:w-1/2 pr-4 pl-4 my-1">
                        <label for="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                          id="firstName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div className="hidden mt-1 text-sm text-red">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="sm:w-1/2 pr-4 pl-4 my-1">
                        <label for="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                          id="lastName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div className="hidden mt-1 text-sm text-red">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="w-full my-1">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                          id="email"
                          placeholder="email@example.com"
                          required
                        />
                        <div className="hidden mt-1 text-sm text-red">
                          Please enter a valid email address
                        </div>
                      </div>

                      <div className="w-full my-1">
                        <label for="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                          id="address"
                          placeholder="street House No"
                          required
                        />
                        <div className="hidden mt-1 text-sm text-red">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="w-full">
                        <label for="address2" className="form-label">
                          Address 2{" "}
                          <span className="text-gray-700">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="md:w-2/5 pr-4 pl-4 my-1">
                        <label for="country" className="form-label">
                          Country
                        </label>
                        <br />
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>Pakistan</option>
                          <option>Korea</option>
                          <option>London</option>
                        </select>
                        <div className="hidden mt-1 text-sm text-red">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="md:w-1/3 pr-4 pl-4 my-1">
                        <label for="state" className="form-label">
                          State
                        </label>
                        <br />
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Punjab</option>
                          <option>KPK</option>
                          <option>Sindh</option>
                          <option>Balochistan</option>
                        </select>
                        <div className="hidden mt-1 text-sm text-red">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="md:w-1/4 pr-4 pl-4 my-1">
                        <label for="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="hidden mt-1 text-sm text-red">
                          Zip code required.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>
                    <div className="md:w-1/4 pr-4 pl-4 my-1">
                      <input type="radio" id="COD" value="option1" name="payment" />
                      <label for="option1">Cash On Delivery</label>
                         <br/>
                      <input type="radio" id="Card" value="option2" name="payment" />
                      <label for="option2">Card</label>
                    </div>

                    <button
                      className="w-full inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-900 text-white hover:bg-gray-900 "
                      type="submit" disabled
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container mx-auto sm:px-4 my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
