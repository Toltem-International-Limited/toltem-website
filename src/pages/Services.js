import React from 'react'
import FooterOne from '../common/footer/FooterOne'
import HeaderOne from '../common/header/HeaderOne'
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'
import SEO from '../common/SEO'
import CtaLayoutOne from '../component/cta/CtaLayoutOne'
import SectionTitle from '../elements/section-title/SectionTitle'
import ServiceProp from '../component/service/ServiceProp'
import ServiceData from '../data/service/ServiceMain.json'
import { slugify } from '../utils'

const allData = ServiceData

const Services = () => {
	const itConsultancyData = allData.filter((data) => slugify(data.case ? data.case : '') === 'it-consultancy')
	const enterpriseSolutionData = allData.filter((data) => slugify(data.case ? data.case : '') === 'enterprise-solutions')
	const trainingsData = allData.filter((data) => slugify(data.case ? data.case : '') === 'trainings')
	const procurementData = allData.filter((data) => slugify(data.case ? data.case : '') === 'procurement')

	return (
		<>
			<SEO title="Services" />
			<ColorSwitcher />
			<main className="main-wrapper">
				<HeaderOne />
				<BcrumbBannerOne
					title="Best solutions for your business"
					paragraph="Give your business a unique logo to stand out from crowd. We’ll create logo specifically for your company.
                "
					styleClass=""
					mainThumb="/images/banner/banner-thumb-4.png"
				/>
				<div className="service-scroll-navigation-area">
					{/* Service Nav */}

					<nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
						<div className="container">
							<ul className="nav nav-pills">
								<li className="nav-item">
									<a className="nav-link" href="#section1">
										IT Consultancy
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#section2">
										Enterprise Solutions (ESS)
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#section3">
										Trainings
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#section4">
										Procurement
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<div className="section section-padding" id="section1">
						<div className="container">
							<SectionTitle subtitle="Service" title="IT Consultancy" description="" textAlignment="heading-left" textColor="" />
							<div className="row">
								<ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={itConsultancyData} />
							</div>
						</div>
					</div>

					<div className="section section-padding bg-color-light" id="section2">
						<div className="container">
							<SectionTitle subtitle="Service" title="Enterprise Solutions (ESS)" description="" textAlignment="heading-left" textColor="" />
							<div className="row">
								<ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={enterpriseSolutionData} />
							</div>
						</div>
					</div>

					<div className="section section-padding" id="section3">
						<div className="container">
							<SectionTitle subtitle="Service" title="Trainings" description="" textAlignment="heading-left" textColor="" />
							<div className="row">
								<ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={trainingsData} />
							</div>
						</div>
					</div>

					<div className="section section-padding bg-color-light" id="section4">
						<div className="container">
							<SectionTitle subtitle="Service" title="Procurement" description="" textAlignment="heading-left" textColor="" />
							<div className="row">
								<ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={procurementData} />
							</div>
						</div>
					</div>
				</div>
				<CtaLayoutOne />
				<FooterOne parentClass="" />
			</main>
		</>
	)
}

export default Services
