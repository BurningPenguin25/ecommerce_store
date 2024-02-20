import styles from "./sideSale.module.scss";
import {FaAngleDown, FaAngleUp, FaArrowRight} from "react-icons/fa";
import Image from "next/image";
import default_image from '../../../../public/16-9_845Х1500.jpg'
import Link from "next/link";

import ProductCard from './productCard';


const arr = [1,2,3,4,5,6,7,8]



const SideSale = () => {

    return (
        <div className={styles.sideSale}>

            <div className={styles.sideSale_heading}>
                <h2>АКЦИЯ!</h2>
                <div className={styles.sideSale_heading_buttons}>
                    <button><FaAngleUp/></button>
                    <button><FaAngleDown/></button>
                </div>
            </div>

            <div className={styles.sideSale_card}>
                {arr.map(()=>{
                    return(
                        <ProductCard />
                    )
                })}
            </div>

        </div>
    );
}

export default SideSale
