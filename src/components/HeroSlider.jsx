import React from 'react'
import HeroSlider, { Slide } from 'hero-slider'

const HeroSliderComponent = ({ dataSlider }) => {
    return (
        <HeroSlider
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'centers'
            }}
            autoplay={100}
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug('onSliding(nextSlide): ', nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        'onBeforeSliding(previousSlide, nextSlide): ',
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug('onAfterSliding(nextSlide): ', nextSlide)
            }}>
            {dataSlider.map((item, index) => (
                <Slide
                    key={index}
                    background={{
                        backgroundImageSrc: item,
                        backgroundImageStyle: { width: '100%', height: '100%' }
                    }} />
            ))}
        </HeroSlider>
    )
}

export default HeroSliderComponent