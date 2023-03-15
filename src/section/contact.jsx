import React from 'react';
// import emailjs from 'emailjs-com';
import { Parallax } from "react-parallax";
import AOS from 'aos';
AOS.init();

const image1 ="https://images.unsplash.com/photo-1597798393816-f180596701d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80";
const contact = () => {

//     function sendEmail(e) {

//         console.log('sending email...')

//     const success = document.getElementById("success");
//     const button = document.getElementById("send_message");
//     const failed = document.getElementById("failed");
//     e.preventDefault();

//     const params = {
//         to_name: '',
//         from_name:"",
//         reply_to:"",
//         message:""
//     }

//     emailjs.sendForm('service_ow2y0dh', 'template_i8dn0af', e.target, 'qKKqYdHWYfA8xA5-F')
//       .then((result) => {
//           console.log(result.text);
//           success.classList.add('show');
//           button.classList.add('show');
//           failed.classList.remove('show');
//       }, (error) => {
//           console.log(error.text);
//           failed.classList.add('show');
//       });
//   }

    return(
        <div className="section bg-top bg-bottom py-0">
            <Parallax className="py-5" bgImage={image1} strength={300}>  
                  <div className="py-5 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center"
                                data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="0"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                                >
                                <h2>Contact Me</h2>
                                <div className="space-border"></div>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-2"
                            data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                            >
                                <h4 style={{textAlign:'center'}}>Feel free to get in touch!</h4>
                            {/* <div className="contact_form_wrapper">
                                <form name="contactForm" id="contact_form" className="form-border" onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="field-set">
                                                <input type="text" name="Name" id="name" className="form-control" placeholder="Your Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="field-set">
                                                <input type="text" name="Email" id="email" className="form-control" placeholder="Your Email" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="field-set">
                                                <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="field-set">
                                            <textarea name="message" id="message" className="form-control" placeholder="Your Message" required></textarea>
                                        </div>
                                        <div id='success' className='hide'>Your message has been sent...</div>
                                        <div id='failed' className='hide'>Message failed...</div>
                                        <div id='submit' className="mt30">
                                            <button type='submit' id='send_message' className="btn-main">
                                                Send Message
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div> */}
                            <div className="spacer-double"></div>
                            <div className="row text-center">
                                <div className="col-md-4"
                                    data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="0"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                                    >
                                    <div className="wm-1"></div>
                                    <h6>Email Me</h6>
                                    <p>rob@aperture-labs.co.uk</p>
                                </div>
                                <div className="col-md-4"
                                    data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                                    >
                                    <div className="wm-1"></div>
                                    <h6>Call Me</h6>
                                    <p>07906 888 994</p>
                                </div>
                                <div className="col-md-4"
                                    data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                                    >
                                    <div className="wm-1"></div>
                                    <h6>Address</h6>
                                    <p>Crackington Haven, Cornwall, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default contact;