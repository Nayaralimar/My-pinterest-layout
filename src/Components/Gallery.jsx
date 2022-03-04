import React from 'react'

import Img1 from '../../images/img1.jpg'
import Img2 from '../../images/img2.jpg'
import Img3 from '../../images/img3.jpg'
import Img4 from '../../images/img4.jpg'
import Img5 from '../../images/img5.jpg'
import Img6 from '../../images/img6.jpg'
import Img7 from '../../images/img7.jpg'
import Img8 from '../../images/img8.jpg'
import { CardStyled, Image, ButtonMore, ButtonQuestion } from './GalleryStyles'

const Gallery= () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        }, 
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
    ]
    return (
        <div>
            <CardStyled>
                {data.map((item, index)=> {
                    return(
                        <Image key={index} src={item.imgSrc} />
                    )
                })}
                </CardStyled>
                <ButtonMore>+</ButtonMore>
                <ButtonQuestion>?</ButtonQuestion>
            
            </div>
    )
}

export default Gallery