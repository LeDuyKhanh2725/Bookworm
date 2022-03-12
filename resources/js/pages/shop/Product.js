import React from 'react'
import bootstrap from 'bootstrap'

function Product({list}) {
    const renderListItem = (list = []) =>{
        return list.map((item) =>{
            return(
                <div class="product col">
                <div class="product__inner overflow-hidden p-3 p-md-4d875">
                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                        <div class="woocommerce-loop-product__thumbnail">
                            <a href="" class="d-block"><img src={"/bookcover/" + item.book_cover_photo + ".jpg"} class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description"/></a>
                        </div>
                        <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                            <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="../shop/single-product-v1.html">Paperback</a></div>
                            <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v1.html">{item.book_title}</a></h2>
                            <div class="font-size-2  mb-1 text-truncate"><a href="../others/authors-single.html" class="text-gray-700">{item.author_name}</a></div>
                            <div class="price d-flex align-items-center font-weight-medium font-size-3">
                                <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>{item.book_price}/{item.discount_price}</span>
                            </div>
                        </div>
                        <div class="product__hover d-flex align-items-center">
                            <a href="../shop/single-product-v1.html" class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="" data-original-title="ADD TO CART">
                                <span class="product__add-to-cart">ADD TO CART</span>
                                <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                            </a>
                            <a href="../shop/single-product-v1.html" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                                <i class="flaticon-switch"></i>
                            </a>
                            <a href="../shop/single-product-v1.html" class="h-p-bg btn btn-outline-primary border-0">
                                <i class="flaticon-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }
    return (
        <>
            {renderListItem(list)}
        </>
    )
}



export default Product