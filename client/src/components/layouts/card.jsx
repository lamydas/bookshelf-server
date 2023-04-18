import react, { useState } from "react";
import ProductModal from "./ProductModal";
import RatingMeter from "./RatingMeter";
const Card = ({ books }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
                      {
                books?.map((item) => {

                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    let categories = item.volumeInfo?.categories && item.volumeInfo?.categories[0];
                    let title = item.volumeInfo?.title && item.volumeInfo?.title;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    
                        return (
                            <>
                                 <div class="col-md-3">
                                    <figure class="product-style" >
                                        <img src={thumbnail}  alt="Book" class="product-item" onClick={() => { setShow(true); setItem(item) }} />
                                        <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Want to read</button>
                                        <figcaption>
                                            <h3>{title}</h3>
                                            <RatingMeter></RatingMeter>
                                            <p>{item.volumeInfo.authors}</p>
                                            {/* <div class="item-price">&#x20A6;{item.volumeInfo.amount}</div> */}
                                        </figcaption>
                                    </figure>
                                </div>

                                <ProductModal show={show} item={bookItem} onClose={() => setShow(false)} />
                            </>
                        )
                   

                })
            }
				
				

        </>
    )
}
export default Card;