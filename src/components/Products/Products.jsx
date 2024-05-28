import React, { useContext } from 'react'
import { productContext } from '../../context/ProductContext';
import { productsList } from '../../productsData';
import ProductCard from '../ProductCard/ProductCard';

export default function Product() {
    const { products, setProducts, filterData } = useContext(productContext);
    const category = [...new Set(productsList.map((val) => val.category))];

    return (<>
        <section id='products'>
            <div className="container-fluid my-3">
                <h2 className='text-center mb-3'>Find your perfect fit with our wide selection of sneakers.</h2>
                <div className="row">
                    <div className="col-md-2">
                        <div className="category-card p-3 rounded-3 bg-white">
                            <h3 className='mb-3'>Category</h3>
                            <hr />
                            <span className='d-block cursor-pointer' onClick={() => {
                                setProducts([...productsList]);
                            }}>All</span>
                            {category.map((cat) => <span key={cat} onClick={() => {
                                filterData(cat);
                            }} className='d-block cursor-pointer'>{cat}</span>)}
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row g-3">
                            {products.map((product) => <ProductCard key={product.id} product={ product} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}