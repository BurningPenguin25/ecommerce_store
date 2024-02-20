import Link from 'next/link';
import styles from './productCard.module.scss';
import Image from 'next/image';
import default_image from '../../../../public/16-9_845Х1500.jpg';
import {FaArrowRight} from 'react-icons/fa';
import React from 'react';

const Default = () => {
    return (
        <Link href={'#'} className={styles.link}>

            <div className={styles.link_image}>
                <Image src={default_image} alt={'asd'}/>
            </div>

            <div className={styles.link_content}>

                <h2>Apple MacBook Pro 16 2023, M3 Max (RAM 48 Apple MacBook Pro 16 2023, M3 Max (RAM 48 Apple MacBook Pro 16 2023, M3 Max (RAM 48</h2>

                <div className={styles.link_content_costInfo}>
                    <div className={styles.link_content_costInfo_price}>
                        <h4>529 900 ₽</h4>
                        <h2>394 900 ₽</h2>
                    </div>
                    <span><FaArrowRight/></span>
                </div>

            </div>


        </Link>
    );
}

export default Default
