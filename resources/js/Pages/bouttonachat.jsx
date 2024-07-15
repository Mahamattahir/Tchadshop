import React from 'react';
import { Link, usePage } from '@inertiajs/react';

function ButtonAchetez({ product }) {
  const { url } = usePage();

  return (
    <div className="btnCommander d-flex align-items-center justify-content-center mb-1">
      <Link href={`/acheter/${product.id}`} className="btn py-2 px-4" style={{ textDecoration: 'none', color: '#fff' }}>
          Acheter
      </Link>
    </div>
  );
}

export default ButtonAchetez;
