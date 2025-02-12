import Link from "next/link"
import cssStyle from "./Header.module.css"
const Header = () => {
    return (
        <div>
            <nav className={cssStyle.navbar}>
                <ul className="gird grid-cols-2 sm:grid-cols-3">
                    <li className={cssStyle.nav_item}><Link href="/home">Home</Link></li>
                    <li className={cssStyle.nav_item}><Link href="/about">About</Link></li>
                    <li className={cssStyle.nav_item}><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header