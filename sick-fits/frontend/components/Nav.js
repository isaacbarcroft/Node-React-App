import Link from 'next/link';

export default function Nav() {

    return (
        <nav>
            <Link href="/products">P roducts</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/accounts">Accounts</Link>
        </nav>
    )
}