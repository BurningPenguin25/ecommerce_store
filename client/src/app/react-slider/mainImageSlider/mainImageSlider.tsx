
import styles from './mainImageSlider.module.scss'

import Image from 'next/image'






const MainProductCarousel = ({carray}) => {



    return (
        <div className={styles.mainImageSlider}>

            <div className={styles.mainImageSlider_imageContainer}>
                {carray.map(elem=>{
                   return (
                       <div className={styles.mainImageSlider_imageContainer_imageTwo}>
                           <Image src={elem} alt={'asd'} />
                       </div>
                   )
                })}
            </div>



        </div>
    )

};

export default MainProductCarousel;
