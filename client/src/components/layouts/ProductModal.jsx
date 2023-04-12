import React from 'react'

const ProductModal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
    let categories = item.volumeInfo?.categories && item.volumeInfo?.categories[0];
    let title = item.volumeInfo?.title && item.volumeInfo?.title;

    return (
        <>
            <section className="bg-sand  padding-large">
                <div className="container ">
                    <div className="row">

                        <div className="col-md-6 " >
                            <div className="description">
                                <h3>Short Description</h3>
                                {item.volumeInfo.description}
                            </div>

                        </div>

                        <div className="col-md-6 pl-5">
                            <div className="product-detail">
                                <div>
                                    <img src={thumbnail} alt='picture' />
                                </div>
                                <button className="close " onClick={onClose}><i className="fas fa-times"></i></button>
                                <h3>{title}</h3>
                                <h4>{categories}</h4>
                                <h3>{item.volumeInfo?.authors}</h3>
                                <h4>{item.volumeInfo?.publisher}<span>{item.volumeInfo?.publishedDate}</span></h4><br />

                                <a href={item.volumeInfo?.previewLink} className='btn'>More</a>

                                {/* <button type="submit" name="add-to-cart" value="27545" className="button">Add to cart</button> */}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductModal