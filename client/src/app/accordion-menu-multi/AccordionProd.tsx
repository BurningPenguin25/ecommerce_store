
import React, {useRef} from 'react';
import styles from './accordion.module.scss'


const AccordionProd = ({prod, isOpen}) => {
    const itemRef = useRef(null)

    return (

        <div
            className={styles.collapseContainer}
        style = {
            isOpen ? {height: itemRef.current.scrollHeight} : {height: 0}
        }
        >
            <div className={styles.product} ref={itemRef}>
                <p>{prod.brandName}</p>
            </div>
        </div>
    )
};
export default AccordionProd;
