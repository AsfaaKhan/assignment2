import Link from "next/link"
import cssStyle from "./Header.module.css"
const Header = () => {
    return (
        <div>
            <nav className={cssStyle.navbar}>

                <ul>
                    <li className={cssStyle.nav_item}><Link href="/home">Home</Link></li>
                    <li className={cssStyle.nav_item}><Link href="/about">About</Link></li>
                    <li className={cssStyle.nav_item}><Link href="/contact">Contact</Link></li>

                </ul>
            </nav>

        </div>

    )
}
export default Header