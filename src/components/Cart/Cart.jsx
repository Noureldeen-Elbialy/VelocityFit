// import React, { useState } from 'react'
// import productimg from "../../image/home/pxfuel (1).jpg";
// import Style from "./Cart.module.css";
// export default function Cart() {
//     const [count, setCount] = useState(1);
//     return (<>
//         <section id='cart' className='py-5'>
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col-md-8">
//                         <h2 className='h4'>Card 0</h2>
//                         <div className="items">
//                             <div className="cart-item">
//                                 <div className=" my-4 d-flex align-items-center justify-content-between">
//                                     <img src={productimg} width={100} alt="" />
//                                     <h3 className='m-0'>Lorem ipsum dolor sit.</h3>
//                                     <p className='m-0'>$30</p>
//                                     <div className="count  px-4 border border-1 border-dark rounded-1">
//                                         <button className='bg-transparent mb-1 border-0 text-muted h3' onClick={() => {
//                                             setCount(count - 1)
//                                         }}>-</button>
//                                         <span className='mx-3 h5'>{count}</span>
//                                         <button className='bg-transparent mb-1 border-0 h3' onClick={() => {
//                                             setCount(count + 1)
//                                         }}>+</button>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <p className='m-0'>$30</p>
//                                     <button className='btn btn-danger mb-0'>remove</button>
//                                 </div>
//                             </div>
//                             <div className="cart-item">
//                                 <div className=" my-4 d-flex align-items-center justify-content-between">
//                                     <img src={productimg} width={100} alt="" />
//                                     <h3 className='m-0'>Lorem ipsum dolor sit.</h3>
//                                     <p className='m-0'>$30</p>
//                                     <div className="count  px-4 border border-1 border-dark rounded-1">
//                                         <button className='bg-transparent mb-1 border-0 text-muted h3' onClick={() => {
//                                             setCount(count - 1)
//                                         }}>-</button>
//                                         <span className='mx-3 h5'>{count}</span>
//                                         <button className='bg-transparent mb-1 border-0 h3' onClick={() => {
//                                             setCount(count + 1)
//                                         }}>+</button>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <p className='m-0'>$30</p>
//                                     <button className='btn btn-danger mb-0'>remove</button>
//                                 </div>
//                             </div>
//                             <div className="cart-item">
//                                 <div className=" my-4 d-flex align-items-center justify-content-between">
//                                     <img src={productimg} width={100} alt="" />
//                                     <h3 className='m-0'>Lorem ipsum dolor sit.</h3>
//                                     <p className='m-0'>$30</p>
//                                     <div className="count  px-4 border border-1 border-dark rounded-1">
//                                         <button className='bg-transparent mb-1 border-0 text-muted h3' onClick={() => {
//                                             setCount(count - 1)
//                                         }}>-</button>
//                                         <span className='mx-3 h5'>{count}</span>
//                                         <button className='bg-transparent mb-1 border-0 h3' onClick={() => {
//                                             setCount(count + 1)
//                                         }}>+</button>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <p className='m-0'>$30</p>
//                                     <button className='btn btn-danger mb-0'>remove</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4 mt-5 mt-md-0">
//                         <div className={`${Style.order_summary} py-5 px-5 rounded-2`}>
//                             <h2 className='h4'>Order Summary</h2>
//                             <div className="price-details">
//                                 <div className="price d-flex justify-content-between align-items-center">
//                                     <h3 className='h5'>Price</h3>
//                                     <span>$99.2</span>
//                                 </div>
//                                 <div className="shipping d-flex justify-content-between align-items-center">
//                                     <h3 className='h5'>Shipping</h3>
//                                     <span>$9.2</span>
//                                 </div>
//                                 <div className="tax d-flex justify-content-between align-items-center">
//                                     <h3 className='h5'>Tax</h3>
//                                     <span>$0.5</span>
//                                 </div>
//                             </div>
//                             <hr/>
//                             <div className="total-price d-flex justify-content-between align-items-center">
//                                 <h3 className='h4'>Total Price</h3>
//                                 <span>$100.7</span>
//                             </div>
//                             <div className="checkout">
//                                 <button className='btn btn-dark w-100'>CHECKOUT</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
//     )
// }
