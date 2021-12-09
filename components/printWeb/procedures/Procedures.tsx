
// CSS
import { useEffect, useState } from 'react'
import styles from './Procedures.module.css'

const Procedures = () => {

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
                            procedures_grid_container.style.transform = 'translateX(-25%)'
                            break;
                        case 2:
                            procedures_grid_container.style.transform = 'translateX(-50%)'
                            break;
                        case 3:
                            procedures_grid_container.style.transform = 'translateX(-75%)'
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
            <div className={styles.procedure_grid}>
                <div className={`${styles.procedure_container} 0 show`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5.06 3C4.63 3 4.22 3.14 3.84 3.42S3.24 4.06 3.14 4.5L2.11 8.91C1.86 10 2.06 10.95 2.72 11.77L3 12.05V19C3 19.5 3.2 20 3.61 20.39S4.5 21 5 21H19C19.5 21 20 20.8 20.39 20.39S21 19.5 21 19V12.05L21.28 11.77C21.94 10.95 22.14 10 21.89 8.91L20.86 4.5C20.73 4.06 20.5 3.7 20.13 3.42C19.77 3.14 19.38 3 18.94 3H5.06M18.89 4.97L19.97 9.38C20.06 9.81 19.97 10.2 19.69 10.55C19.44 10.86 19.13 11 18.75 11C18.44 11 18.17 10.9 17.95 10.66C17.73 10.43 17.61 10.16 17.58 9.84L16.97 5L18.89 4.97M5.06 5H7.03L6.42 9.84C6.3 10.63 5.91 11 5.25 11C4.84 11 4.53 10.86 4.31 10.55C4.03 10.2 3.94 9.81 4.03 9.38L5.06 5M9.05 5H11V9.7C11 10.05 10.89 10.35 10.64 10.62C10.39 10.88 10.08 11 9.7 11C9.36 11 9.07 10.88 8.84 10.59S8.5 10 8.5 9.66V9.5L9.05 5M13 5H14.95L15.5 9.5C15.58 9.92 15.5 10.27 15.21 10.57C14.95 10.87 14.61 11 14.2 11C13.89 11 13.61 10.88 13.36 10.62C13.11 10.35 13 10.05 13 9.7V5M7.45 12.05C8.08 12.67 8.86 13 9.8 13C10.64 13 11.38 12.67 12 12.05C12.69 12.67 13.45 13 14.3 13C15.17 13 15.92 12.67 16.55 12.05C17.11 12.67 17.86 13 18.8 13H19.03V19H5V13H5.25C6.16 13 6.89 12.67 7.45 12.05Z" />
                    </svg>

                    <h5>Tú conectas tu tienda a PrintWeb</h5>
                    <p>Conecta tu tienda a Printful, añade tus productos y establece tus propios precios de venta al por menor</p>
                </div>

                <div className={`${styles.procedure_container} 1`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z" />
                    </svg>

                    <h5>Un cliente realiza su pedido</h5>
                    <p>Un cliente compra en tu tienda, nosotros cobramos por su gestión y tú obtienes las ganancias</p>
                </div>

                <div className={`${styles.procedure_container} 2`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17,22V20H20V17H22V20.5C22,20.89 21.84,21.24 21.54,21.54C21.24,21.84 20.89,22 20.5,22H17M7,22H3.5C3.11,22 2.76,21.84 2.46,21.54C2.16,21.24 2,20.89 2,20.5V17H4V20H7V22M17,2H20.5C20.89,2 21.24,2.16 21.54,2.46C21.84,2.76 22,3.11 22,3.5V7H20V4H17V2M7,2V4H4V7H2V3.5C2,3.11 2.16,2.76 2.46,2.46C2.76,2.16 3.11,2 3.5,2H7M13,17.25L17,14.95V10.36L13,12.66V17.25M12,10.92L16,8.63L12,6.28L8,8.63L12,10.92M7,14.95L11,17.25V12.66L7,10.36V14.95M18.23,7.59C18.73,7.91 19,8.34 19,8.91V15.23C19,15.8 18.73,16.23 18.23,16.55L12.75,19.73C12.25,20.05 11.75,20.05 11.25,19.73L5.77,16.55C5.27,16.23 5,15.8 5,15.23V8.91C5,8.34 5.27,7.91 5.77,7.59L11.25,4.41C11.5,4.28 11.75,4.22 12,4.22C12.25,4.22 12.5,4.28 12.75,4.41L18.23,7.59Z" />
                    </svg>

                    <h5>Printful procesa el pedido...</h5>
                    <p>Nosotros nos encargamos de todo</p>
                </div>

                <div className={`${styles.procedure_container} 3`}>
                    <svg className={styles.svg_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16,4L9,8.04V15.96L16,20L23,15.96V8.04M16,6.31L19.8,8.5L16,10.69L12.21,8.5M0,7V9H7V7M11,10.11L15,12.42V17.11L11,14.81M21,10.11V14.81L17,17.11V12.42M2,11V13H7V11M4,15V17H7V15" />
                    </svg>

                    <h5>y se lo manda a tu cliente</h5>
                    <p>Tu cliente recibe su pedido con tu marca en él</p>
                </div>
            </div>
            <div className={styles.circles_container}>
                {btnCircles.length > 0 ? (btnCircles) : null}
                

            </div>
        </section>
    )
}

export default Procedures