import React from 'react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "../layout/AnimatedProgressProvider";

import AOS from 'aos';
AOS.init();


const hero = () => {
	return(
		<div className="v-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2 data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true">About Me</h2>
	                <div className="space-border"
	                	data-aos="fade-up"
                        data-aos-delay="20"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true"
	                	></div>
	            </div>
	            <div className="col-md-8 text-center m-auto"
	            	data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
	            	>
	            	<p>Hi there! I'm Rob, and I'm a passionate website developer with over 15 years of experience in the field. I specialize in creating beautiful, responsive websites that are optimized for speed, functionality, and user experience.</p>
						<p>Whether you're looking to build a new website from scratch, improve an existing one or create an admin dashboard to manage your unique business challenges, I'm here to help you achieve your goals.</p>
						<p> With my expertise in HTML, CSS, JavaScript, and other web development tools, I can bring your vision to life and help you stand out in the crowded online marketplace. Let's work together to create a website that represents your brand and drives results!
                     </p>
	            </div>
			</div>
			<div className="row" style={{display: 'flex', justifyContent: 'space-evenly'}}>
				<div className="col-lg-4 p-5 text-center"
					data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
					style={{width: '250px'}}
					>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={90}>
				        {value => {
		
				          return (
							<div >
								<CircularProgressbar
								value={value}
								strokeWidth={10}
								//   text={'Web Design'}
								styles={buildStyles({
										pathTransition: "none",
										textColor: "white",
										textSize: "12px",
										pathColor: "#50BEC2",
										trailColor: "#2f3134"
										})}
															/>
							</div>
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Web Design</h4>
                </div>
                <div className="col-lg-4 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
					style={{width: '250px'}}
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={80}>
				        {value => {
				      
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={10}
				            //   text={`SEO`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "12px",
							          pathColor: "#50BEC2",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">SEO & Marketing</h4>
                </div>
                <div className="col-lg-4 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
					style={{width: '250px'}}
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={95}>
				        {value => {
				      
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={10}
				            //   text={'Web Apps'}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "12px",
							          pathColor: "#50BEC2",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Web Apps & Admin Portals</h4>
                </div>
                {/* <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={75}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={10}
				              text={``}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#50BEC2",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Web Design</h4>
                </div> */}
			</div>
		</div>
		</div>
	);
}

export default hero;