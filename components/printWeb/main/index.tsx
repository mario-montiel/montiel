
// CSS
import Image from 'next/image'
import styles from './Index.module.css'

const PrintWebMain = () => {

    return (
        <section className={styles.grid}>
            <div className={styles.description}>
                <h1>Diseña y vende productos personalizados online!</h1>
                <p>Servicios de impresión bajo demanda y personalizados en la comarca lagunera</p>

                <button className={`${styles.btn_main} ${styles.btn_main_1}`}>
                    Empieza a vender
                </button>

                <div className={`${styles.places} ${styles.places_1}`}>
                    <span>
                        Entregamos en toda la comarca lagunera, con más de 100 artículos vendidos cada mes
                    </span>
                    <div className={styles.grid_places}>
                        <div className={styles.container_places}>
                            <svg className={styles.svg_places} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                            </svg>
                            <span>Torreón, Mx</span>
                        </div>
                        <div className={styles.container_places}>
                            <svg className={styles.svg_places} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                            </svg>
                            <span>Gómez Palacio, Mx</span>
                        </div>
                        <div className={styles.container_places}>
                            <svg className={styles.svg_places} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                            </svg>
                            <span>Lerdo, Mx</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.image}>
                <Image className={styles.main_image} src={'/printWeb/whiteTshit.svg'} width={580} height={450} objectFit="cover" priority layout="fixed" />
                <img className={styles.polygon_1} src="/printWeb/polygon.svg" alt="" />
                {/* <Image className={styles.polygon_1} src={'/printWeb/polygon.svg'} width={30} height={30} /> */}
            </div>

            <div className={`${styles.places} ${styles.places_2}`}>
                <span>
                    Entregamos en toda la comarca lagunera, con más de 100 artículos vendidos cada mes
                </span>
                <div className={styles.grid_places}>
                    <div className={styles.container_places}>
                        <svg className={styles.svg_places} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                        </svg>
                        <span>Torreón, Mx</span>
                    </div>
                    <div className={styles.container_places}>
                        <svg className={styles.svg_places} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                        </svg>
                        <span>Gómez Palacio, Mx</span>
                    </div>
                    <div className={styles.container_places}>
                        <svg className={styles.svg_places} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                        </svg>
                        <span>Lerdo, Mx</span>
                    </div>
                </div>
            </div>

            <button className={`${styles.btn_main} ${styles.btn_main_2}`}>
                    Empieza a vender
                </button>

        </section>
    )
}

export default PrintWebMain