import React from 'react'
import Link from 'next/link';
import styles from "../styles/Header.module.css"
import Image from 'next/image';

const Header = () => {
    return (
        <>
        <nav className={styles.navbar}>
        <div className="site-header sticky-top navbar navbar-expand-md z-3 border-bottom position-fixed vw-100">
            <div className="container-fluid ">
                <Link className="navbar-brand p-0 m-0 mt-0 d-flex d-inline-block align-items-center" href="/" >
                    <Image src="/Icon.svg" width={100} height={100} alt="" className='col '/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-5 fs-5 fw-semibold">
                        <li className="nav-item my-2 ms-3">
                        <Link className={styles.navLinks} href="/">Home</Link>
                        </li>
                        <li className="nav-item my-2 ms-3">
                        <a className={styles.navLinks} href="#">About Me</a>
                        </li>
                        <li className="nav-item my-2 ms-3">
                        <a className={styles.navLinks} href="#">Contact Me</a>
                        </li>
                    </ul>                    
                </div>
            </div>
        </div>
    </nav>
    </>
    )
}

export default Header;