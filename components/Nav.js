import Link from "next/link";
import styles from "../styles/Nav.module.css"

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/first/first-post/">First-post</Link>
                </li>
                <li>
                    <Link href="/article/Article">Article</Link>
                </li>
            </ul>
        </nav>
    )
};
export default Nav