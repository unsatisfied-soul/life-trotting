import React from 'react';
import Flickity from 'react-flickity-component';
import './AdventurePic.css'


const flickityOptions = {
    initialIndex: 3,
    wrapAround: true
  }
const AdventurePic = () => {
    return (
        <div className='adventurePic py-24 w-4/5 mx-auto'>
            <div className="adventure-heading text-center">
                <h4 className='text-[#81d8f3] text-2xl font-bold mb-2'>Adventure</h4>
                <h2 className='text-7xl font-bold mb-12'>Pick Your Passion</h2>
            </div>
            <div className="featureProjects pb-14 text-left">
            <Flickity className='' options={flickityOptions} >
                <div id="carousel-cell-1" className="carousel-cell gap-5">
                    <div className="carousel-cell-img">
                        <img src="https://www.australia.com/content/australia/en/things-to-do/family/jcr:content/hero/desktop.adapt.1920.high.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h3 className=''>Family</h3>
                    </div>
                </div>
                <div id="carousel-cell-2" className="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://www.australia.com/content/australia/en/things-to-do/food-and-drinks/jcr:content/hero/desktop.adapt.1920.high.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h3>Food And Drink</h3>
                    </div>
                </div>
                <div id="carousel-cell-3" className="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://www.australia.com/content/australia/en/things-to-do/wildlife/_jcr_content/imagePortrait.adapt.740.medium.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h3>WildLife</h3>
                    </div>
                </div>
                <div id="carousel-cell-4" className="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://www.australia.com/content/australia/en/things-to-do/aboriginal-australia/_jcr_content/imagePortrait.adapt.740.medium.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h3>Aborginal Bangladesh</h3>
                    </div>
                </div>
                <div id="carousel-cell-5" className="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://www.australia.com/content/australia/en/things-to-do/luxury/_jcr_content/imagePortrait.adapt.740.medium.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h3>Luxary Experiences</h3>
                    </div>
                </div>
                <div id="carousel-cell-5" className="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://www.australia.com/content/australia/en/things-to-do/nature-and-national-parks/_jcr_content/imagePortrait.adapt.740.medium.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h3>Nature And National Parks</h3>
                    </div>
                </div>
                <div id="carousel-cell-5" className="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://www.australia.com/content/australia/en/things-to-do/arts-and-culture/_jcr_content/imagePortrait.adapt.740.medium.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h3>Art and Cuture</h3>
                    </div>
                </div>
            </Flickity>
            </div>
        </div>
    );
};

export default AdventurePic;