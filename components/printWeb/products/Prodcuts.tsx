
// CSS
import styles from './Products.module.css'

// Components
import Image from 'next/image'
import { useState } from 'react'

const Products = () => {

    // Use State
    const [showMoreProducts, setshowMoreProdcts] = useState<boolean>(false)
    const [repeats, setRepeats] = useState(8)

    // Functions
    const generateProducts = () => {
        let html: any = []
        for (let index = 0; index < repeats; index++) {
            html.push(
                <div className={styles.card} key={index}>
                    <div>
                        <Image src={'/printWeb/tshirt.svg'} width={200} height={200} />
                    </div>
                    {/* <Image src={'/printWeb/tshirMan.webp'} width={130} height={200} />
                    <Image src={'/printWeb/tshirtWoman.webp'} width={200} height={200} /> */}
                    {/* <Image src={'/printWeb/tshirMan.svg'} width={200} height={200} /> */}
                    <p className={styles.title}>Camisetas</p>
                    <p className={styles.description}>A partir de $186.77 Mx</p>
                    <i>
                        <svg className={styles.svg_icon} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </i>
                    <div className={styles.categories}>
                        <div className={styles.category_data}>
                            <Image src={'/printWeb/tshirt.svg'} width={50} height={50} />
                            <p>Hombre</p>
                        </div>
                        <div className={styles.category_data}>
                            <Image src={'/printWeb/tshirt.svg'} width={50} height={50} />
                            <p>Mujer</p>
                        </div>
                        <div className={styles.category_data}>
                            <Image src={'/printWeb/tshirt.svg'} width={50} height={50} />
                            <p>Niño</p>
                        </div>
                    </div>
                </div>
            )
        }

        return html
    }

    const showMore = () => {
        if (!showMoreProducts) {
            setRepeats(20)
            setshowMoreProdcts(true)
        } else {
            setRepeats(8)
            setshowMoreProdcts(false)
        }
    }

    return (
        <div className={styles.products_container}>
            <h2>Productos personalizados para WuW</h2>
            <p>Impreso y enviado bajo demanda, ¡con tu marca!</p>

            <div className={styles.cards_container}>
                {generateProducts()}
            </div>

            <button className={styles.btn_more} onClick={showMore}>
                {showMoreProducts ? 'Ver menos' : 'Ver más'}
            </button>

            <p className={styles.info}>Visita nuestro <a href="/projects/print-web">Catálogo</a> para descubrir todos nuestros productos.</p>
        </div>
    )
}

export default Products