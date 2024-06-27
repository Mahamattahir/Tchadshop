import React from 'react'
import { Link } from '@inertiajs/react'
function ButtonAchetez({product}) {

    return (
        <div className='BtnContact'>
        <p className="text-dark mr-1">
            <button  className="btn py-2 px-4" type="button" id="sendMessageButton">
                <Link  href={`/acheter/${product.id}`} style={{ textDecoration: 'none', color: '#fff' }}>Acheter</Link>
            </button>
        </p>
    </div>
    )
}

export default ButtonAchetez
