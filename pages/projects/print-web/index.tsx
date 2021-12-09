
// CSS
import styles from '../../../styles/printweb/PrintWebIndex.module.css'

// Components
import CardSection from '../../../components/printWeb/cardSection/CardSection'
import PrintWebMain from '../../../components/printWeb/main'
import Navbar from '../../../components/printWeb/navbar/Navbar'
import Products from '../../../components/printWeb/products/Prodcuts'
import Procedures from '../../../components/printWeb/procedures/Procedures'
import WhatMakesAreUnique from '../../../components/printWeb/whatMakesAreUnique/WhatMakesAreUnique'

const PrintWebIndex = () => {

    return (
        <div className={styles.container}>

            <Navbar />

            <div className={styles.container_content}>
                <main>
                    <PrintWebMain />

                    <CardSection />

                    <Products />

                    <Procedures />

                    <WhatMakesAreUnique />
                </main>
            </div>
        </div>
    )
}

export default PrintWebIndex