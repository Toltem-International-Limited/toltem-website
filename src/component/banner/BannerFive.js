import React from 'react'
import { Link } from 'react-router-dom'
import FormOne from '../contact/FormOne'

const BannerFive = () => {
	return (
		<div className="banner banner-style-5" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/toltem/banner-tech.jpg'})` }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-xl-7">
						<div className="banner-content">
							<h1 className="title">People, Innovation &amp; Technology</h1>
							<div>
								<Link to={process.env.PUBLIC_URL + '/services'} className="axil-btn btn-fill-white btn-large">
									View Services
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-xl-5">
						<div className="banner-form">
							<div className="contact-form-box shadow-box">
								<h3 className="title">Get a free Project quote now</h3>
								<FormOne />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerFive
