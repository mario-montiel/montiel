
// CSS
import styles from './CardSection.module.css'

// Component
import Card from '../../../components/printWeb/card/Card'

const CardSection = () => {

    return (
        <section className={styles.card_section}>
            <h2>Que puede hacer con PrintWeb</h2>

            <div className={styles.container_cards}>
                <Card
                    src={'/printWeb/coffeHand.svg'}
                    width={250}
                    height={250}
                    title="Impresión bajo demanada"
                    description="!Empieza un negocio sin inventarios! Los pedidos se gestionan y envían bajo demanda."
                />
                <Card
                    src={'/printWeb/coffeHand.svg'}
                    width={250}
                    height={250}
                    title="Pedidos personalizados"
                    description="Crea productos personalizads para amigos y familia, ocasiones especiales o para ti mismo."
                />
                <Card
                    src={'/printWeb/coffeHand.svg'}
                    width={250}
                    height={250}
                    title="Esto es una prueba"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis alias, asperiores ex praesentium ipsum."
                />
            </div>
        </section>
    )
}

export default CardSection