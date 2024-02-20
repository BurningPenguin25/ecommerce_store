

import styles from './MainProductCarousel.module.scss'
import img from '../../../../public/16-9_845Х1500.jpg'
import ProductCard from '@/app/react-slider/mainImageSlider/ProductCard';
import {useEffect, useState} from 'react';
import Image from 'next/image';
// import ProductCard from '../'


//@ToDo: как добавить бесконечный скролл изображений ? https://www.youtube.com/watch?v=oEJR8XEwCSo
//@ToDo: как добавить ограничение в переключении чтобы не перескакивало с 1 по 4 через 2 и 3 слайд и исчезали кнопки(disable+смена стилей)  ?
//@ToDo: автоматический переключение слайдов setInterval

//@ToDo: как поместить 2-4 изображения/карточки на слайдере

//@ToDo: чтобы bullets двигались, а активная оставалась по середине ?
//@ToDo: двойной слайдер дублирующий основной




const MainProductCarousel = ({DataCard}) => {

        const [cardIndex, setCardIndex] = useState(0)


        return (
            <div>


                <div className={styles.header}>
                    <h2>Лучшее Предложение </h2>
                    <div className={styles.navigation}>
                        <button >Влево</button>
                        <button >Вправо</button>
                    </div>
                </div>


                <div className={styles.productCarousel}>
                    <div className={styles.imageContainer}
                    >
                        {DataCard.map((data)=>{
                            return(
                                <ProductCard
                                    key={data.id}
                                    title={data.title}
                                    description={data.description}
                                    price={data.price}
                                    discountSum={data.discountSum}
                                    rating={data.rating}
                                    stock={data.stock}
                                    brand={data.brand}
                                    category={data.category}
                                    images={data.images}
                                    articul={data.articul}
                                    data={data.data}
                                />
                            )
                        })}
                    </div>


                    <div>
                            {/* <button onClick={()=>setCardIndex(val => val+1)}>Влево</button> */}
                            {/* <button onClick={()=>setCardIndex(val => val-1)}>Вправо</button> */}
                    </div>


            </div>

            </div>
        )

};

export default MainProductCarousel;
