
// CSS
import { useRef } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {

    return (
        <>
            <NavbarDesktop />
            <NavbarResponsive />
        </>
    )
}

const NavbarDesktop = () => {
    // Use Ref
    const inputSeekerRef = useRef<HTMLInputElement>(null)

    // Functions
    const onFocusInput = () => {
        inputSeekerRef.current?.focus()
    }

    return (
        <div className={styles.container_navbar}>
            <div className={styles.top_navbar}>
                <h2>PRINTWEB</h2>
                <div className={styles.seeker}>
                    <button className={styles.btn_seeker} onClick={onFocusInput}>
                        <svg className={styles.svg_icon} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                    </button>
                    <input ref={inputSeekerRef} className={styles.input_seeker} type="text" placeholder="Buscar en printWeb" />
                </div>

                <div className={styles.options}>
                    <ul>
                        <li>
                            {/* Dark mode */}
                            <i>
                                <svg className={styles.svg_icon} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
                                </svg>
                            </i>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.line} />

            <NavbarItems />

            <div className={styles.line} />
        </div>
    )
}

const NavbarItems = () => {

    return (
        <div className={styles.container_navbar_items}>
            <ul className={styles.navbar_items_ul}>
                <li className={styles.navbar_items_li}>
                    Productos
                    <svg className={styles.svg_items} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </li>
                <li className={styles.navbar_items_li}>
                    Servicios
                    <svg className={styles.svg_items} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </li>
                <li className={styles.navbar_items_li}>
                    Como funciona
                    <svg className={styles.svg_items} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </li>
                <li className={styles.navbar_items_li}>
                    Blog
                    <svg className={styles.svg_items} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </li>
                <li className={styles.navbar_items_li}>
                    Empresas
                    <svg className={styles.svg_items} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </li>
            </ul>
            <div className={styles.container_submenu}>
                <ul className={styles.submenu}>
                    <li>
                        Ropa de hombre
                        <svg className={styles.svg_items} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>

                        <div className={styles.products_submenu_container}>
                            <ul className={`${styles.products_submenu_ul}`}>
                                <li>Toda la ropa personalizada de mujer</li>
                                <li>Todas las camisetas</li>
                                <li>Camisetas</li>
                                <li>Camisetas all over</li>
                                <li>Polos</li>
                                <li>Camisetas de tirantes</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        Ropa de hombre
                        <svg className={styles.svg_items} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                        <div className={styles.products_submenu_container}>
                            <ul className={`${styles.products_submenu_ul}`}>
                                <li><b>Toda la ropa personalizada de mujer</b></li>
                                <li><b>Todas las sudaderas</b></li>
                                <li>Todas las camisetas</li>
                                <li>Todas las capuchas</li>
                                <li><b>Camisetas</b></li>
                                <li>Camisetas all over</li>
                                <li>Polos</li>
                                <li>Camisetas de tirantes</li>
                                <li><b>Camiseta media manga</b></li>
                                <li>Camiseta larga manga</li>
                                <li>Short</li>
                                <li>Camisas</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        Ropa de hombre
                        <svg className={styles.svg_items} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                        <div className={styles.products_submenu_container}>
                            <ul className={`${styles.products_submenu_ul}`}>
                                <li>Toda la ropa personalizada de mujer</li>
                                <li>Todas las camisetas</li>
                                <li>Camisetas</li>
                                <li>Camisetas all over</li>
                                <li>Polos</li>
                                <li>Camisetas de tirantes</li>
                                <li>Camiseta media manga</li>
                                <li>Camiseta larga manga</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        Ropa de hombre
                        <svg className={styles.svg_items} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                    </li>
                </ul>
                <div className={styles.line_submenu} />
                <ul className={styles.submenu}>
                    <li>Marcas</li>
                </ul>
            </div>
        </div>
    )
}

const NavbarResponsive = () => {

    const inputSeekerRef = useRef<HTMLInputElement>(null)

    const onFocusInput = () => {

    }

    return (
        <div className={styles.navbar_responsive_container}>
            <div className={styles.top_navbar}>
                <button className={styles.navbar_responsive_btn_menu}>
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                    Menú
                </button>

                <h1>PrintWeb</h1>

                <button className={styles.navbar_responsive_btn_darkmode}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
                    </svg>
                </button>
            </div>

            <div className={styles.seeker}>
                    <button className={styles.btn_seeker} onClick={onFocusInput}>
                        <svg className={styles.svg_icon} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                    </button>
                    <input ref={inputSeekerRef} className={styles.seeker_responsive_input} type="text" placeholder="Buscar en printWeb" />
                </div>
        </div>
    )
}

export default Navbar