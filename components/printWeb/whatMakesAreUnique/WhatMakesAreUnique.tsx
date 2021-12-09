// Nextjs React
import { useEffect, useState } from 'react'

// CSS
import styles from './WhatMakesAreUnique.module.css'

const WhatMakesAreUnique = () => {
    // Use State
    const [btnCircles, setBtnCircles] = useState<any>([])

    // Functions
    const circles = () => {
        let html: any = []
        const procedures = document.querySelectorAll(`.${styles.procedure_container}`) as NodeListOf<HTMLElement>

        setBtnCircles([]);

        for (let index = 0; index < procedures.length; index++) {
            setBtnCircles((oldValue: any) => [...oldValue,
            <div onClick={() => selectCircle(index)} className={styles.btn_circles} key={index}></div>
            ])
        }

        return html.lenth ? html : (<div>Cargando</div>)
    }

    const changeBtnCircleColor = (index: number) => {
        const circles = document.querySelectorAll(`.${styles.btn_circles}`) as NodeListOf<HTMLElement>

        circles.forEach(btnCircle => {
            btnCircle.style.backgroundColor = 'white'
        });

        circles[index].style.backgroundColor = '#535353'
    }

    const selectCircle = async (index: any) => {
        const procedures = document.querySelectorAll(`.${styles.procedure_container}`) as NodeListOf<HTMLElement>
        const procedures_grid_container = document.querySelector(`.${styles.procedure_grid}`) as HTMLElement
        if (procedures.length) {
            changeBtnCircleColor(index)
            procedures.forEach((procedure, i) => {
                if (procedures[index] == procedure) {
                    switch (i) {
                        case 0:
                            procedures_grid_container.style.transform = 'translateX(0%)'
                            break;
                        case 1:
                            procedures_grid_container.style.transform = 'translateX(-16.6%)'
                            break;
                        case 2:
                            procedures_grid_container.style.transform = 'translateX(-33.2%)'
                            break;
                        case 3:
                            procedures_grid_container.style.transform = 'translateX(-49.9%)'
                            break;
                        case 4:
                            procedures_grid_container.style.transform = 'translateX(-66.5%)'
                            break;
                        case 5:
                            procedures_grid_container.style.transform = 'translateX(-83.1%)'
                            break;

                    }
                }
            });
        }
    }

    // Use Effect
    useEffect(() => {
        circles()
    }, [])

    return (
        <section className={styles.procedure}>
            <h2>Qué nos hace únicos</h2>
            <div className={styles.procedure_grid}>
                <div className={`${styles.procedure_container} 0 show`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
                    </svg>

                    <h5>Gestión local</h5>
                    <p>Velocidad y coherencia: nuestras instalaciones propias y de socios ofrecen gastos de envío competitivos y una calidad fiable.</p>
                </div>

                <div className={`${styles.procedure_container} 1`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.12C5.31,13.5 4.68,13.5 4.29,13.12L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.07V20A1,1 0 0,1 16,21M20.42,9.58L16.11,5.28C15.8,5.63 15.43,5.94 15,6.2C14.16,6.7 13.13,7 12,7C10.3,7 8.79,6.32 7.89,5.28L3.58,9.58L5,11L8,9H9V19H15V9H16L19,11L20.42,9.58Z" />
                    </svg>

                    <h5>Herramientas de branding personalizadas</h5>
                    <p>Construye tu reputación manteniendo tu marca a la vanguardia. Somos un socio de marca blanca, por lo que tus clientes no verán nuestro nombre en tus productos.</p>
                </div>

                <div className={`${styles.procedure_container} 2`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
                    </svg>

                    <h5>Calidad que se nota</h5>
                    <p>Causa una impresión duradera usando nuestra tecnología líder en el sector, tintas de calidad y materiales premium. El 99,4% de nuestros pedidos llegan a los clientes sin ningún problema.</p>
                </div>

                <div className={`${styles.procedure_container} 3`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
                    </svg>

                    <h5>Herramientas de diseño intuitivas</h5>
                    <p>Crea piezas únicas con nuestro Creador de diseños integrado, ¡aunque no tengas experiencia en diseño! Sencillo o complejo, con estampado o minimalista... nuestras funcionalidades son versátiles.</p>
                </div>

                <div className={`${styles.procedure_container} 3`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
                    </svg>

                    <h5>Automatización en unos clics</h5>
                    <p>Cuando los clientes te compran algún producto, recibimos y gestionamos sus pedidos automáticamente, para que te puedas centrar en llevar tu negocio.</p>
                </div>

                <div className={`${styles.procedure_container} 3`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z" />
                    </svg>

                    <h5>Sin pedidos mínimos</h5>
                    <p>Ahorra dinero y evita las existencias sobrantes. Los productos que vendes no se crean hasta que tu cliente ha hecho un pedido.</p>
                </div>
            </div>
            <div className={styles.circles_container}>
                {btnCircles.length > 0 ? (btnCircles) : null}


            </div>
        </section>
    )
}

export default WhatMakesAreUnique