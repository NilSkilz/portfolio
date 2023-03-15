import React from 'react';
import AOS from 'aos';
AOS.init();

const whatido = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-xl-3 col-lg-6"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_genius id-color-2"></i>
                            <div className="text">
                                <h3>Design</h3>
                                I specialize in creating beautiful, responsive websites that are optimized for speed, functionality, and user experience.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_genius id-color-2"></i>
                            <div className="text">
                                <h3>Development</h3>
                                With my expertise in HTML, CSS, JavaScript, and other web development tools, I can bring your vision to life and help you stand out in the crowded online marketplace.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6" 
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_tools id-color-2"></i>
                            <div className="text">
                                <h3>Architecture</h3>
                                I'm here to help you streamline your workflow and improve your team's productivity by developing custom admin portals that meet your specific needs. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_camera_alt id-color-2"></i>
                            <div className="text">
                                <h3>Support</h3>
                                I believe in providing ongoing support to my clients after their website is launched, ensuring that any questions or issues that arise are promptly addressed and resolved to their satisfaction.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default whatido;