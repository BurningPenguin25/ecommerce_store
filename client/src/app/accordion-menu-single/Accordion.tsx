import styles from './accordion.module.scss'
import { FaAlignJustify, FaAngleDown } from "react-icons/fa";
import React, {useState} from 'react';
import Link from 'next/link';
import {number} from 'prop-types';
import AccordionCat from '@/app/accordion-menu-single/AccordionCat';

const Accordion = ({CatData}) => {
    {/* Открывает только по одной вкладоке в аккордион меню */}

    const [openCategorySingle, setOpenCategorySingle] = useState(null) //false/true


//@ToDo: можно и надо ли тут пропсы заменить на reduxToolkit ?
//     https://www.youtube.com/watch?v=uht6vUDd6BQ&t=237s
    return (
             <div className={styles.accordionMenu}>

                <div className={styles.accordionMenu_head}>
                    <FaAlignJustify/>
                    <h2>КАТАЛОГ ТОВАРОВ</h2>
                </div>

                <div className={styles.accordionMenu_list}>
                    {CatData.map((category) => {
                            return <AccordionCat
                                category={category}
                                onClick={()=>(category.categoryId === openCategorySingle ? setOpenCategorySingle(null) : setOpenCategorySingle(category.categoryId))}
                                isOpen={category.categoryId === openCategorySingle}
                                key={category.categoryId}
                            />
                    })}

                </div>

            </div>

    )
};
export default Accordion;
