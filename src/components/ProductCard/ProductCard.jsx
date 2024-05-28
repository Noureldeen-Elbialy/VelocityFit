import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
    return (
        <>
            <div key={product.id} className='col-lg-3 col-md-4 col-sm-6'>
                <div className="product-card bg- bg-white h-100 p-3 rounded-3">
                    <img src={product.images[0]} className='w-100 rounded-3' height={300} alt="" />
                    <h3>{product.name}</h3>
                    <div className="d-flex justify-content-between">
                        <span>{product.company}</span>
                        <span>{product.category}</span>
                    </div>
                    <p className='text-muted'>{product.description.split(' ').slice(0, 8).join(' ')}</p>
                    <span className='fw-bold d-block'>${product.price}</span>
                    <Link to={`product/${product.id}`} className='btn bg-black text-white fw-bold w-100 mt-3'>see details</Link>
                </div>
            </div>
        </>
    )
}
