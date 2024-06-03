import { Link } from '@inertiajs/react';

function Logo() {
    return (
        <div>
            <Link href="/" className="text-decoration-none ">
                <span className="h1 text-uppercase px-2" style={{ color: '#8529cd' }}>chad</span>
                <span lang="no" className="h1 text-uppercase text-dark px-2 ml-n4">_Shop</span>
            </Link>
        </div>
    )
}

export default Logo;
