import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "./Book";



const Products = ({ books: { books } }) => {


	return (

		<>

			<section class="padding-large">
				<div class="container">
					<div class="row">

						<div class="col-md-12 title">

							<h1>Search Category: {books[1].volumeInfo.categories[0]}</h1>


						</div>

					</div>
					<div class="row">

						<div class="products-grid grid">

							<Book books={books} />


						</div>

					</div>

				</div>
			</section>
		</>

	);
};

Products.propTypes = {
	books: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
	books: state.searchReducer,
});

export default connect(mapStateToProps)(Products);