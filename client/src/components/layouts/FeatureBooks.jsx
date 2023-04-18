import React, { useState, useEffect } from 'react';

import api from "../../utils/api";
import Card from './card'
const FeatureBooks = () => {

	const [bookItems,setItems]=useState();
  
	const search = "Life+of+the+wild";
  
	const getBooks = (search) => api.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=4')
	  .then(res => (setItems(res.data.items)))
	  .catch(err => console.log(err))
	useEffect(() => { getBooks(search); }, []);
	
  return (
    <section id="featured-books">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

			<div className="section-header align-center">
				<div className="title">
					<span>Some quality items</span>
				</div>
				<h2 className="section-title">Featured Books</h2>
			</div>

			<div className="product-list" >
				<div className="row">

				<Card books={bookItems}/>

			    </div>				
			</div>


			</div>
		</div>
		
		<div className="row">
			<div className="col-md-12">

				<div className="btn-wrap align-right">
					<a href="#" className="btn-accent-arrow">View all products <i className="icon icon-ns-arrow-right"></i></a>
				</div>
				
			</div>		
		</div>
	</div>
</section>
  )
}

export default FeatureBooks