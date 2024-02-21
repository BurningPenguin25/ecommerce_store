'use client';

import CatData from '../../public/categoryData'
import Accordion from '@/app/accordion-menu-single/Accordion';
import AccordionMulti from './accordion-menu-multi/Accordion'
import styles from './main.module.scss'
import Slider from './react-slider/slider'

import ProductCard from './react-slider/mainImageSlider/ProductCard'


import MainImageSlider from '@/app/react-slider/mainImageSlider/mainImageSlider';
import MainProductCarousel from './react-slider/mainProductSlider/MainProductCarousel';

import DataCard from '../../public/productCardData'

import img1 from '../../public/16-9_1500х845.jpg'
import img2 from '../../public/16-9_1500х845.jpg'
import img3 from '../../public/16-9_1500х845.jpg'
import img4 from '../../public/16-9_1500х845.jpg'
import img5 from '../../public/16-9_1500х845.jpg'
import SideProductSlider from '@/app/react-slider/sideProductSlider/sideProductCard';
import SideSale from '@/app/react-slider/sideProductSlider/sideSale';
import SetStarRating from '@/app/set-star-rating/SetStarRating';
import DisplayStarRating from '@/app/display-star-rating/DisplayStarRating';
const carray = [img1, img2, img3, img4, img5]

const Home = () => {
    const starval = 4.5


        return (
            <div>

                <div
                    style={{
                        width: '1125px',
                        background: 'red'
                    }}
                >

                    <div>
                        display
                        <DisplayStarRating/>
                    </div>

                    <div>
                        set
                        <SetStarRating/>
                    </div>


                    <div
                        style={{
                            width: '1200px',
                            background: 'red',
                            border: '3px solid black'
                        }}
                    >
                        <MainProductCarousel DataCard={DataCard}/>
                    </div>


                    <div
                        style={{
                            width: '1200px',
                            background: 'red',
                            border: '3px solid black'
                        }}
                    >
                        <MainImageSlider carray={carray}/>
                    </div>


                </div>

                <div
                    style={{
                        marginTop: "40px",
                        width: "300px",
                        background: 'blue'
                    }}
                >

                    <div>
                        <SideSale/>
                    </div>

                </div>

            </div>
        )
    }
;

export default Home;
