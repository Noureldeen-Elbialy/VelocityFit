import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productsList } from '../../productsData';
export default function ProductDetails() {
    const params = useParams();
    const productId = (params.id);

    const [list, setList] = useState([...productsList])
    const [productDetails, setProductDetails] = useState();
    const filterData = () => {
        setProductDetails((list.filter((item) => `${item.id}` === `${productId}`)));
    }
    useEffect(() => {
        filterData();
    }, []);
    console.log(productDetails);
    return (<>
        <section id="productDetails" className='py-5'>
            <div className="container mt-5">
                <Link to={'/'} className='text-black text-decoration-none'><i className="fa-solid text-muted fa-backward my-3"></i> Back</Link>
                <div className="row align-items-center">
                    {productDetails ? <>
                        <div className="col-md-5">
                            <img height={500} src={productDetails[0].images[0]} className='w-100' alt="" />
                        </div>
                        <div className="col-md-7">
                            <h2>{productDetails[0].name}</h2>
                            <span className='me-5'>{productDetails[0].company}</span>
                            <span>{productDetails[0].category}</span>
                            <p>{productDetails[0].description}</p>
                            <span className='fw-bold d-block'>${productDetails[0].price}</span>
                            <button className='btn bg-black text-white'>Add to cart</button>
                        </div>
                    </> : <></>}
                </div>
            </div>
        </section>
    </>
    )
}
