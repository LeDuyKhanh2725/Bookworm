import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';

function Shop() {
  const[state,setState] = useState({
    listbook: [],
    currentBook:'currentbook'
  });
  useEffect(async () =>{
    const getData = await axios.get('http://127.0.0.1:8000/api/book-list');
    const getDataonsale = await axios.get('');
    const getDataPopular = await axios.get('');
    const getDatalow = await axios.get('');
    const getDatahigh = await axios.get('');
    const getDatacate = await axios.get('');
    const getDataauthor = await axios.get('');
  setState({listbook:getData.data,currentBook:'currentbook'})
  },[])

  const chanceFilter = async(type) =>{
    if (type === 'booklist') {
      const shopb = await axios.get('');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'booklist'
      });
      return;
    }
    if (type === 'onsale') {
      const shopb = await axios.get('');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'onsale'
      });
      return;
    }
    if (type === 'popular') {
      const shopb = await axios.get('');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'popular'
      });
      return;
    }
    if (type === 'lowhigh') {
      const shopb = await axios.get('');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'lowhigh'
      });
      return;
    }
    if (type === 'highlow') {
      const shopb = await axios.get('');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'highlow'
      });
      return;
    }

  }
  return (
    <>
    <link rel="stylesheet" media="all" href="https://public-assets.envato-static.com/assets/market/core/index-1fae334a35cdbdf8165d80ef7c0a2acecae6281c39c472e7571fa591b0c1f91c.css" />
    <link rel="stylesheet" media="all" href="https://public-assets.envato-static.com/assets/market/pages/preview/index-004d35cdd5d555cdd3e956d1b916825642de06529f0fe91fd9f390813761d2fc.css" />
    <script src="https://public-assets.envato-static.com/assets/market/pages/full_screen_preview/index-3434ecc8ee72db55dde518bd4f2a3f85d6c73b0dde839027aaedb790e40a4beb.js" nonce="vEM7kqKc5jz/zfCqrNH/uw=="></script>

      <div class="row">
            <div id="primary" class="content-area order-2">
                <div class="shop-control-bar d-lg-flex justify-content-between align-items-center mb-5 text-center text-md-left">
                    <div class="shop-control-bar__left mb-4 m-lg-0">
                        <p class="woocommerce-result-count m-0">Showing 1–12 of 126 results</p>
                    </div>
                    <div class="shop-control-bar__right d-md-flex align-items-center">
                        <form class="woocommerce-ordering mb-4 m-md-0" method="get">

                            <div class="dropdown bootstrap-select js-select dropdown-select orderby"><select class="js-select selectpicker dropdown-select orderby" name="orderby" data-style="border-bottom shadow-none outline-none py-2" tabindex="-98">
                                <option value="popularity" onClick={()=>chanceFilter('popular')}>Sort by popularity</option>
                                <option value="onsale" onClick={()=>chanceFilter('onsale')}>Sort by Onsale</option>
                                <option value="default" onClick={()=>chanceFilter('booklist')} selected="selected">Default sorting</option>
                                <option value="price" onClick={()=>chanceFilter('lowhigh')}>Sort by price: low to high</option>
                                <option value="price-desc" onClick={()=>chanceFilter('highlow')}>Sort by price: high to low</option>
                            </select><button type="button" class="btn dropdown-toggle border-bottom shadow-none outline-none py-2" data-toggle="dropdown" role="button" title="Default sorting"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Default sorting</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div></div>

                        </form>
                        <form class="number-of-items ml-md-4 mb-4 m-md-0 d-none d-xl-block" method="get">

                            <div class="dropdown bootstrap-select js-select dropdown-select orderby fit-width"><select class="js-select selectpicker dropdown-select orderby" name="orderby" data-style="border-bottom shadow-none outline-none py-2" data-width="fit" tabindex="-98">
                                <option value="show10">Show 10</option>
                                <option value="show15">Show 15</option>
                                <option value="show20" selected="selected">Show 20</option>
                                <option value="show25">Show 25</option>
                                <option value="show30">Show 30</option>
                            </select><button type="button" class="btn dropdown-toggle border-bottom shadow-none outline-none py-2" data-toggle="dropdown" role="button" title="Show 20"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Show 20</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div></div>

                        </form>
                    </div>
                </div>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab">

                        <div class="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-wd-4 border-top border-left mb-6">
                            <Product listbook={state.listbook}/>
                        </div>

                    </div>
                </div>

                <nav aria-label="Page navigation example">
                    <ul class="pagination pagination__custom justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                        <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" href="#">1</a></li>
                        <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" href="#">2</a></li>
                        <li class="flex-shrink-0 flex-md-shrink-1 page-item active" aria-current="page"><a class="page-link" href="#">3</a></li>
                        <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" href="#">4</a></li>
                        <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" href="#">5</a></li>
                        <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
            <div id="secondary" class="sidebar widget-area order-1" role="complementary">
                <div id="widgetAccordion">
                    <div id="woocommerce_product_categories-2" class="widget p-4d875 border woocommerce widget_product_categories">
                        <div id="widgetHeadingOne" class="widget-head">
                            <a class="d-flex align-items-center justify-content-between text-dark" href="#" data-toggle="collapse" data-target="#widgetCollapseOne" aria-expanded="true" aria-controls="widgetCollapseOne">
                                <h3 class="widget-title mb-0 font-weight-medium font-size-3">Categories</h3>
                                <svg class="mins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
                                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)" d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"></path>
                                </svg>
                                <svg class="plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
                                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)" d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div id="widgetCollapseOne" class="mt-3 widget-content collapse show" aria-labelledby="widgetHeadingOne" data-parent="#widgetAccordion">
                            <ul class="product-categories">
                                <li class="cat-item cat-item-9 cat-parent">
                                    <a href="../shop/v3.html">Clothing</a>                                   
                                </li>
                                <li class="cat-item cat-item-69 cat-parent">
                                    <a href="../shop/v3.html">Electronics</a>                                   
                                </li>
                                <li class="cat-item cat-item-65 cat-parent">
                                    <a href="../shop/v3.html">Kitchen</a>                               
                                </li>
                                <li class="cat-item cat-item-11 cat-parent"><a href="../shop/v3.html">Music</a>      
                                </li>
                                <li class="cat-item cat-item-12"><a href="../shop/v3.html">Posters</a></li>
                                <li class="cat-item cat-item-31"><a href="../shop/v3.html">Scuba gear</a></li>
                                <li class="cat-item cat-item-45"><a href="../shop/v3.html">Sweatshirts</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="Authors" class="widget widget_search widget_author p-4d875 border">
                        <div id="widgetHeading21" class="widget-head">
                            <a class="d-flex align-items-center justify-content-between text-dark" href="#" data-toggle="collapse" data-target="#widgetCollapse21" aria-expanded="true" aria-controls="widgetCollapse21">
                                <h3 class="widget-title mb-0 font-weight-medium font-size-3">Author</h3>
                                <svg class="mins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
                                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)" d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"></path>
                                </svg>
                                <svg class="plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
                                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)" d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div id="widgetCollapse21" class="mt-4 widget-content collapse show" aria-labelledby="widgetHeading21" data-parent="#widgetAccordion">
                            <ul class="product-categories">
                                <li class="cat-item cat-item-9 cat-parent">
                                    <a href="../others/authors-single.html">A. J. Finn</a>
                                </li>
                                <li class="cat-item cat-item-69 cat-parent">
                                    <a href="../others/authors-single.html">Anne Frank</a>
                                </li>
                                <li class="cat-item cat-item-65 cat-parent">
                                    <a href="../others/authors-single.html">Camille Pagán</a>
                                </li>
                                <li class="cat-item cat-item-11 cat-parent"><a href="../others/authors-single.html">Daniel H. Pink</a>
                                </li>
                                <li class="cat-item cat-item-12"><a href="../others/authors-single.html">Danielle Steel</a></li>
                                <li class="cat-item cat-item-31"><a href="../others/authors-single.html">David Quammen</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="Review" class="widget p-4d875 border">
                        <div id="widgetHeading24" class="widget-head">
                            <a class="d-flex align-items-center justify-content-between text-dark" href="#" data-toggle="collapse" data-target="#widgetCollapse24" aria-expanded="true" aria-controls="widgetCollapse24">
                                <h3 class="widget-title mb-0 font-weight-medium font-size-3">By Review</h3>
                                <svg class="mins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="2px">
                                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)" d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"></path>
                                </svg>
                                <svg class="plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px">
                                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)" d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div id="widgetCollapse24" class="mt-4 widget-content collapse show" aria-labelledby="widgetHeading24" data-parent="#widgetAccordion">
                            <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="rating5"/>
                                        <label class="custom-control-label" for="rating5">
                                            <span class="d-block text-yellow-darker mt-plus-3">
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 "></span>
                                            </span>
                                        </label>
                                </div>
                                <small class="font-size-2 text-gray-600">24</small>
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="rating4"/>
                                        <label class="custom-control-label" for="rating4">
                                            <span class="d-block text-yellow-darker mt-plus-3">
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2 "></span>
                                            </span>
                                        </label>
                                </div>
                                <small class="font-size-2 text-gray-600">15</small>
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="rating3"/>
                                        <label class="custom-control-label" for="rating3">
                                            <span class="d-block text-yellow-darker mt-plus-3">
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2 "></span>
                                            </span>
                                        </label>
                                </div>
                                <small class="font-size-2 text-gray-600">43</small>
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="rating2"/>
                                        <label class="custom-control-label" for="rating2">
                                            <span class="d-block text-yellow-darker mt-plus-3">
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2"></span>
                                            </span>
                                        </label>
                                </div>
                                <small class="font-size-2 text-gray-600">78</small>
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-0">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="rating1"/>
                                        <label class="custom-control-label" for="rating1">
                                            <span class="d-block text-yellow-darker mt-plus-3">
                                                <span class="fas fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2 mr-1"></span>
                                                <span class="far fa-star font-size-2"></span>
                                            </span>
                                        </label>
                                </div>
                                <small class="font-size-2 text-gray-600">21</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop