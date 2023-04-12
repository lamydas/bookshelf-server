import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
//import { getBooks } from "../../landingDb";
import api from "../../utils/api";
import axios from "axios";
import ProductModal from './ProductModal';



const ImageSlider = ({ slides }) => {
  const [books, setBooks] = useState([]);
  const [current, setCurrent] = useState(0);

  const [show,setShow]=useState(false);
  const [bookItem,setItem]=useState();

  const search = "Life+of+the+wild";

  const getBooks = (search) => api.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=10')
    .then(res => (setBooks(res.data.items)))
    .catch(err => console.log(err))
  useEffect(() => { getBooks(search); }, []);


  const length = books.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section id="billboard">
        <div className="container" >
          <div className="row">
            <div className="col-md-12">
              <button className="prev slick-arrow" onClick={prevSlide}>
                <i className="icon icon-arrow-left"></i>
              </button>
              {books?.map((slide, index) => {
                 let thumbnail=slide.volumeInfo.imageLinks && slide.volumeInfo.imageLinks.thumbnail;
                 let amount=slide.saleInfo.listPrice && slide.saleInfo.listPrice.amount;
                 let shortdesc = slide.volumeInfo.description;
                 //if(thumbnail!= undefined && amount !=undefined)

                return (

                  <div>
                    {index === current && (
                      <div className="main-slider pattern-overlay">
                        <div className="slider-item" key={slide.id}>
                          <div className="banner-content">
                            <h2 className="banner-title">{slide.volumeInfo.title}</h2>
                            <p>{ shortdesc && shortdesc.substr(0,250)}</p>
                            <div className="btn-wrap" >
                              <button className="btn btn-outline-accent btn-accent-arrow" onClick={()=>{setShow(true);setItem(slide)}}>Read More<i className="icon icon-ns-arrow-right"></i></button>
                            </div>
                          </div>
                          <div className='banner-image'>
                            <img src={thumbnail} alt="banner" />
                          </div>

                        </div>
                      </div>
                      
                    )}
                   
                  </div>
                );
              })}
               <ProductModal show={show} item={bookItem} onClose={()=>setShow(false)}/>
              <button className="next slick-arrow" onClick={nextSlide}>
                <i className="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ImageSlider;