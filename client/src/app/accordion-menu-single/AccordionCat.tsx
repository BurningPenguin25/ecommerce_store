
import React, {useState} from 'react';
import AccordionProd from '@/app/accordion-menu-single/AccordionProd';

import styles from './accordion.module.scss'
import {FaAngleDown} from 'react-icons/fa';


const AccordionCat = ({category, onClick, isOpen}) => {

    //@ToDo: можно и надо ли тут пропсы заменить на reduxToolkit ?
    return (
        <div>

            <div
                className={styles.categ}
                onClick={()=>onClick()}
            >
                <h4>{category.categoryName}</h4>
                <span><FaAngleDown/></span>
            </div>

            {category.products.map((el)=>{
                return(
                   <AccordionProd
                       prod={el}
                       isOpen={isOpen}
                   />
                )
            })}

        </div>
    )
};
export default AccordionCat;
