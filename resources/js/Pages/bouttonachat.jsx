import React from 'react'
import { Link } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia';
function ButtonAchetez({product}) {
    const handleClick = () => {
        Inertia.visit(`/acheter/${product.id}`);
    };

    return (
        <div className='BtnContact'>
        <p className="text-dark mr-1">
            <button onClick={handleClick}  className="btn py-2 px-4" type="button" id="sendMessageButton">
                <Link  href={`/acheter/${product.id}`} style={{ textDecoration: 'none', color: '#fff' }}>Acheter</Link>
            </button>
        </p>
    </div>
    )
}

export default ButtonAchetez
