import styles from './style.module.scss'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

export default function Header(){

    const { signOut } = useContext(AuthContext)

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <h1>Pizzaria</h1>
                </Link>


                <nav className={styles.menuNav}>
                    <Link href="/category">
                        <a>categoria</a>
                    </Link>

                    <Link href="/product">
                        <a>Cardapio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#fff' size={24} />
                    </button>
                </nav>
            </div>
        </header>
    )
}