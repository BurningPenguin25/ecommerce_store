

import styles from './productCard.module.scss'
import img from '../../../../public/16-9_845Х1500.jpg'
// import ProductCard from '../'
import image_default from '../../../../public/16-9_845Х1500.jpg'
import Image from 'next/image';
import {FaCartShopping} from 'react-icons/fa6';

const ProductCard = (prodData) => {

    const {title, description, price, discountSum, rating, stock, brand, category, images, data, articul} = prodData;

            const discount = () => {
                return(
                    price - discountSum
                )
            }

            const stockProd = () => {

                if (stock>10) {
                   return (
                       <div className={styles.avaliableSign_in}>
                           <p>на складе</p>
                       </div>
                   )
                } else {
                    return (
                        <div className={styles.avaliableSign_out}>
                        <p>нет в наличии</p>
                        </div>
                    )
                }
            }

    return (

        <div className={styles.productCardFirst}>
            <div className={styles.productCardFirst_mainInfo}>

                <div className={styles.productCardFirst_mainInfo_image}>
                    <Image src={image_default} alt={'sd'}/>
                </div>

                <div className={styles.productCardFirst_mainInfo_title}>
                    <h2>{title}</h2>
                </div>

                <div className={styles.signs}>

                            <div className={styles.infoSign}>
                                <div className={styles.newSign}>
                                    <p>NEW!</p>
                                </div>
                                <div className={styles.hitSign}>
                                    <p>HIT</p>
                                </div>
                            </div>

                            <div className={styles.avaliableSign}>
                                {stockProd()}
                            </div>

                            <div className={styles.articul}>
                                <p>артикул :</p>
                                <span> {articul} </span>
                            </div>

                        </div>

                        <div className={styles.description}>

                            <p> Apple iPhone 15 128 ГБ розовый — представлен компанией Apple в
                                сентябре
                                2023 года. Он являются более бюджетной версией серии Pro, но стоит
                                отметить, что это совершенно новый смартфон с экраном 6,1-дюйма и
                                разрешением 2556 на 1179 пикселей с плотностью 460 ppi. Одной из
                                новинок
                                данной версии является просто огроменные камеры и там и тут и везде
                                просто
                                обфотографируйсся нахрен а потоб обвыкладывайся к чертям
                            </p>

                        </div>

                        <div className={styles.parameters}>
                            <ul>
                                <li>
                                    <p>Бренд</p>
                                    <span/>
                                    <p>Apple</p>
                                </li>
                                <li>
                                    <p>Бренд</p>
                                    <span/>
                                    <p>Apple</p>
                                </li>
                                <li>
                                    <p>Бренд</p>
                                    <span/>
                                    <p>Apple</p>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className={styles.productCardFirst_addCart}>

                        <div className={styles.price}>

                            <div className={styles.price_current}>
                                <p>{price} ₽</p>
                                <span>{discount()} ₽</span>
                            </div>

                            { discountSum && <div className={styles.price_signSale}>
                                <p>-{discountSum}</p>
                            </div>}

                        </div>

                        <div className={styles.button}>

                            <div className={styles.button_quantity}>
                                <button>+</button>
                                <input type={"number"}/>
                                <button>-</button>
                            </div>

                            <div className={styles.button_toCart}>
                                <FaCartShopping/>
                                <p>Купить</p>
                            </div>
                        </div>

                    </div>

                </div>

    )

};

export default ProductCard
