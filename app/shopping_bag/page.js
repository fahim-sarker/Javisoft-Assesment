"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Delete, DownIcon, Heart } from "../_components/svg/svgContainer";
import { removeFromCart } from "@/feature/product/CartSlice"; // make sure path is correct

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total price
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0,
  );
  const delivery = cartItems.length > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="min-h-screen container p-4 md:p-12 text-gray-900">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold uppercase tracking-tight">
          Saving to celebrate
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while supplies last. No code needed.
        </p>
        <div className="mt-2 text-sm underline decoration-1 underline-offset-4">
          <a href="#" className="font-medium">
            Join us
          </a>{" "}
          or{" "}
          <a href="#" className="font-medium">
            Sign-in
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Your Bag</h2>
            <p className="mb-6 text-sm text-gray-500">
              Items in your bag not reserved—check out now to make them yours.
            </p>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 sm:flex-row mb-6"
                >
                  {/* Product Image */}
                  <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-40 sm:w-40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold uppercase tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Size: {item.sizeAtr}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Color: {item.colorAtr}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-blue-600">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="mt-4 flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          Quantity {item.cartQuantity}
                        </span>
                        <DownIcon />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex gap-4">
                      <button className="text-gray-500 hover:text-black">
                        <Heart />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        onClick={() => handleRemove(item._id)}
                      >
                        <Delete />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>

          <div className="space-y-3 border-b border-gray-300 pb-6">
            <div className="flex justify-between">
              <span>
                {cartItems.length} ITEM{cartItems.length !== 1 ? "S" : ""}
              </span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Sales Tax</span>
              <span>-</span>
            </div>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full rounded-lg bg-[#212121] py-4 font-bold tracking-widest text-white transition-colors hover:bg-black uppercase">
            Checkout
          </button>

          <button className="block text-sm font-medium underline underline-offset-4">
            Use a promo code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
