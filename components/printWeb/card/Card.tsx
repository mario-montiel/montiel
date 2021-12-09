
// CSS
import styles from './Card.module.css'

// Components
import Image from 'next/image'
import { useEffect } from 'react'

type Card = {
    src: string,
    width: number,
    height: number,
    title: string,
    description: string
}

const Card = (props: Card) => {

    // Functions
    const addStyles = (width: number, height: number) => {
        // const image = document.querySelector('.image') as HTMLImageElement
        // image.style.width = width.toString()
        // image.style.height = height.toString()
    }

    useEffect(() => {
        // addStyles(props.width, props.height)
    }, [props])

    return (
        <div className={styles.card}>
            <div className={styles.image_container}>
                <Image
                    className="image"
                    src={props.src}
                    width={props.width}
                    height={props.height}
                />
                {/* <img style={{
                    width: props.width + 'px',
                    height: props.height + 'px',
                }} src={props.src} alt="" /> */}
            </div>

            <p className={styles.title}>{props.title}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

export default Card