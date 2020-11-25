import React from 'react';
import '../../styles/DealerDetailsStyles/AboutAndSummary.css';

import usauto from '../../images/dealerdetails/usauto-sales.png';
import AboutBorderBottom from '../../images/dealerdetails/about-border-bottom.png';
import SummaryBorderBottom from '../../images/dealerdetails/summary-border-bottom.png';
import arrowForward from '../../images/dealerdetails/arrow-forward.png';

// Component
import SummaryCar from '../SubComponents/SummaryCar/SummaryCar';

const AboutAndSummary = () => {
	return (
		<section className='About__And__Summary custom__container py-5'>
			<div className='row'>
				<div className='col-sm-12 col-lg-7'>
					<div className='About__And__Summary__Title'>
						<div className='d-flex justify-content-start align-items-center'>
							<h2 className='text-capitalize my-2'>About</h2>
						</div>
						<img
							className='img-fluid mt-3'
							src={AboutBorderBottom}
							alt='About Border Bottom'
						/>
					</div>
					<div className='Title__And__Inputs__Container d-flex py-4 mt-1'>
						<div className='Title__And__Inputs__Image'>
							<img
								className='img-fluid'
								src={usauto}
								alt='About Border Bottom'
							/>
						</div>
						<div className='About__And__Summary__Inputs d-flex'>
							<select className='About__And__Summary__Select'>
								<option value='' disabled selected>
									Select Countary
								</option>
								<option>op1</option>
								<option>op2</option>
							</select>
							<select className='About__And__Summary__Select'>
								<option value='' disabled selected>
									Select Make
								</option>
								<option>op1</option>
								<option>op2</option>
							</select>
						</div>
					</div>
					<div className='About__And__Summary__Map'>
						<div class='mapouter'>
							<div class='gmap_canvas'>
								<iframe
									width='100%'
									height='530'
									id='gmap_canvas'
									src='https://maps.google.com/maps?q=burj%20khalifa%20dubi&t=&z=13&ie=UTF8&iwloc=&output=embed'
									frameborder='0'
									scrolling='no'
									marginheight='0'
									marginwidth='0'
								></iframe>
								<a href='https://thevpndeal.com/private-internet-access-coupon/'></a>
							</div>
						</div>
					</div>
				</div>
				<div className='col-sm-12 col-lg-5'>
					<div className='About__And__Summary__Title'>
						<div className='d-flex justify-content-start align-items-center'>
							<h2 className='text-capitalize my-2'>Summary</h2>
						</div>
						<img
							className='img-fluid mt-3'
							src={SummaryBorderBottom}
							alt='Summary Border Bottom'
						/>
					</div>
					<div className='About__And__Summary__Details py-4 mt-1'>
						<div className='About__And__Summary__Details_Item py-3'>
							<div className='align-items-center d-flex'>
								<img
									className='img-fluid'
									src={arrowForward}
									alt='arrowForward'
								/>
								<h5 className='font-weight-bold text-capitalize mb-0 ml-3'>
									Location
								</h5>
							</div>
							<div>
								<p className='ml-4 mt-3 mb-0 main__gary'>
									4th St - Al QuozAl Quoz Industrial Area 3 -
									Dubai - United Arab Emirates
								</p>
							</div>
						</div>
						{/* ============================================= */}
						<div className='About__And__Summary__Details_Item py-3'>
							<div className='align-items-center d-flex'>
								<img
									className='img-fluid'
									src={arrowForward}
									alt='arrowForward'
								/>
								<h5 className='font-weight-bold text-capitalize mb-0 ml-3'>
									Numbers
								</h5>
							</div>
							<div>
								<p className='ml-4 mt-3 mb-0 main__gary'>
									+97143387773. - +97143387774. - +97143387775
								</p>
							</div>
						</div>
						{/* ============================================= */}
						<div className='About__And__Summary__Details_Item py-3'>
							<div className='row'>
								<div className='col'>
									<SummaryCar
										carTitle='SUV'
										carAmount='122'
									/>
								</div>
								<div className='col'>
									<SummaryCar
										carTitle='Sedan'
										carAmount='0'
									/>
								</div>
								<div className='col'>
									<SummaryCar
										carTitle='Trucks'
										carAmount='2'
									/>
								</div>
								<div className='col'>
									<SummaryCar
										carTitle='Luxury'
										carAmount='142'
									/>
								</div>
								<div className='col offset-4 offset-sm-0'>
									<SummaryCar
										carTitle='Hybrid'
										carAmount='3'
									/>
								</div>
							</div>
						</div>
						{/* ============================================= */}
						<div className='About__And__Summary__Details_Item py-3'>
							<div className='row'>
								<div className='col'>
									<SummaryCar
										carTitle='Van'
										carAmount='122'
									/>
								</div>
								<div className='col'>
									<SummaryCar
										carTitle='Family'
										carAmount='0'
									/>
								</div>
								<div className='col'>
									<SummaryCar
										carTitle='Sport'
										carAmount='2'
									/>
								</div>
								<div className='col'>
									<SummaryCar
										carTitle='S.Sport'
										carAmount='142'
									/>
								</div>
								<div className='col offset-4 offset-sm-0'>
									<SummaryCar
										carTitle='Electric'
										carAmount='3'
									/>
								</div>
							</div>
						</div>
						{/* ============================================= */}
						<div className='About__And__Summary__Details_Item py-3'>
							<div className='align-items-center d-flex'>
								<img
									className='img-fluid'
									src={arrowForward}
									alt='arrowForward'
								/>
								<h5 className='font-weight-bold text-capitalize mb-0 ml-3'>
									Start date
								</h5>
							</div>
							<div>
								<p className='ml-4 mt-3 mb-0 main__gary'>
									Jun, 1988
								</p>
							</div>
						</div>
						{/* ============================================= */}
						<div className='About__And__Summary__Details_Item py-3'>
							<div className='align-items-center d-flex'>
								<img
									className='img-fluid'
									src={arrowForward}
									alt='arrowForward'
								/>
								<h5 className='font-weight-bold text-capitalize mb-0 ml-3'>
									Total number of cars they have
								</h5>
							</div>
							<div>
								<p className='ml-4 mt-3 mb-0 main__gary'>199</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutAndSummary;
