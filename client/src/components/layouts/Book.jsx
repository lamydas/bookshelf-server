import react, { useState } from "react";
import ProductModal from "./ProductModal";

const Book = ({ books }) => {

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

                            <figure class="product-style" onClick={() => { setShow(true); setItem(item) }}>
                                <img src={thumbnail} alt="Book" class="product-item" />
                                <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Want to read</button>
                                <figcaption>
                                    <h3>{title}</h3>
                                    <p>{item.volumeInfo.authors}</p>
                                    {/* <div class="item-price">&#x20A6;{item.volumeInfo.amount}</div> */}
                                </figcaption>
                            </figure>
                           

                            <ProductModal show={show} item={bookItem} onClose={() => setShow(false)} />
                        </>
                    )


                })
            }



        </>
    )
}
export default Book;