import React from 'react'
import Cart from './Panier'
import Layout from './Layout'
function CartPage({product}) {
    return (
        <Layout  product={product} >
         <div style={{ padding:'5%' }}>
            <Cart/>
        </div>
        </Layout>

    )
}

export default CartPage
