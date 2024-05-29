import React from 'react'
import Sidebar from './components/Sidebar'
import CategoryAdmin from './pages/CategoryAdmin'
import ProductsAdmin from './pages/ProductsAdmin'
import StitchTypeAdmin from './pages/StitchTypeAdmin'
import StitchType from '../Guest/pages/StitchType'
import Products from '../Guest/pages/Products'
import Orders from './pages/Orders'
import SingleOrder from './pages/SingleOrder'
import OrderFinal from '../Guest/pages/OrderFinal'
import Navigationbar from '../Guest/components/Navigationbar'
import NavLine from '../Guest/components/NavLine'
import SingleProductDynamic from "./../Guest/pages/SingleProductDynamic"
import StitchBook from "./../Guest/pages/StitchBook"
import SearchedProducts from "./../Guest/pages/SearchedProducts"
import Checkout from '../Guest/pages/Checkout'
import Categories from '../Guest/pages/Categories'
import SingleCategoryDynamic from '../Guest/pages/SingleCategoryDynamic'

import { Routes, Route } from 'react-router-dom'
import AddOrderModal from './components/AddOrderModal'


export default function Admin() {
  return (
    <div>
      <Navigationbar />
      <NavLine />


      <div className="row" style={{ backgroundColor: "#ffecf1" }}>
        <div className="col-md-3 m-0 p-0 border border-secondary" style={{ minHeight: '100vh' }}><Sidebar /></div>
        <div className="col-md-9">

          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/home" element={<Orders />} />
            <Route path="/login" element={<Orders />} />
            <Route path="/categoryAdmin" element={<CategoryAdmin />} />
            <Route path="/productsAdmin" element={<ProductsAdmin />} />
            <Route path="/StitchTypeAdmin" element={<StitchTypeAdmin />} />
            <Route path="/admin-creating-order" element={<AddOrderModal />} />

            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:CategoryName" element={<SingleCategoryDynamic />} />

            <Route path="/products" element={<Products />} />
            <Route path="/get-product-by-id/:_id" element={<SingleProductDynamic />} />

            <Route path="/StitchTypes" element={<StitchType />} />
            <Route path="/StitchTypes/:StitchTypeName" element={<StitchBook />} />

            <Route path="/:Search" element={<SearchedProducts />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:_id" element={<SingleOrder />} />



            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/orderplacement" element={<OrderFinal />} />
            <Route path="*" element={<Orders />} />

          </Routes>
        </div>
      </div>

    </div>

  )
}
