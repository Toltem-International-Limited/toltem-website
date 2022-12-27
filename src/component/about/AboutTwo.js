import React from 'react'
import FormOne from '../contact/FormOne'
import Accordion from 'react-bootstrap/Accordion'
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa'

const AboutTwo = ({ title, description, list1, list2 }) => {
	const renderList = (listTitle, listData) => {
		return (
			<div className="col-md-12 col-sm-6 mb--30">
				<h4>{listTitle}</h4>
				<ul className="list-style">
					{listData.map((list) => {
						return <li>{list}</li>
					})}
				</ul>
			</div>
		)
	}
	return (
		<div className="section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="why-choose-us">
							<div className="section-heading heading-left">
								<span className="subtitle">Description</span>
								<h3 className="title">{title}</h3>
								<p>{description}</p>
							</div>

							<div className="row">
								{list1 ? renderList(list1.title, list1.data) : ''}

								{list2 ? renderList(list2.title, list2.data) : ''}
							</div>
							{/* <Accordion defaultActiveKey="1">
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										<FaCompress /> Strategy
									</Accordion.Header>
									<Accordion.Body>Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										<FaCode /> Design
									</Accordion.Header>
									<Accordion.Body>Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>
										<FaGlobe /> Development
									</Accordion.Header>
									<Accordion.Body>Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.</Accordion.Body>
								</Accordion.Item>
							</Accordion> */}
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 offset-xl-1">
						<div className="contact-form-box shadow-box mb--30">
							<h3 className="title">Get a free Project quote now</h3>
							<FormOne />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutTwo
