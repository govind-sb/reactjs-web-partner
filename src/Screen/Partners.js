import React from 'react';
import Header from '../Components/Header';
import FormRight from '../Components/FormRight';
import Footer from '../Components/Footer';



const Partners = () => {
    return(
         <div className="main_wrap">
            
            <Header />

            <div className="content_wrap partner_content">
               <div className="container">
                <div className="row">
                 
                    <div className="col-lg-7 col-md-7 col-12 left-col">
                        <div className="inner_left">
                          
                            <div className="partner_join_txt">
                                <h4>Don't wait to build a business; own a successful one with React Js! </h4>
                                <h1 className="title">Join As A React Js Partner!</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                          

                           
                            <div className="partner_offer">
                                <h4>Earnings that we offer to our business partners</h4>
                                <div className="offer_row row">
                                    <div className="col-md-4 col-12 offer-col">
                                        <figure>
                                            <i className="fas fa-chart-bar"></i>
                                        </figure>
                                        <span>30-40% Margin</span>
                                    </div>
                                    <div className="col-md-4 col-12 offer-col">
                                        <figure>
                                            <i className="fas fa-chart-bar"></i>
                                        </figure>
                                        <span>Rapidly Breakeven</span>
                                    </div>
                                    <div className="col-md-4 col-12 offer-col">
                                        <figure>
                                            <i className="fas fa-chart-bar"></i>
                                        </figure>
                                        <span>High ROI</span>
                                    </div>
                                </div>
                            </div>
                         

                         
                           <div className="why_partner_row">
                            <h2 className="title">Why Partner With Us?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                           </div>
                         

                           
                            <div className="partner_store">
                                <h3 className="title">Store Formats</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            

                           
                            <div className="testimonial_row">
                                <div className="testimonial_img">
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div className="testimonial_txt">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <h5>Govind Bisht</h5>
                                </div>
                            </div>
                          

                          
                            <div className="questions_row">
                                <h3 className="title">Have Questions?</h3>
                                <p>Reach us at:</p>
                                <div className="question_ftr">
                                    <a href="mailto:befranchise@paislei.com" className="mail">
                                        <i className="far fa-envelope"></i>
                                      <span>reactjs@react.com</span>
                                    </a>
                                    <span className="lineSpan">&nbsp;</span>
                                    <a href="tel:+91 9910008999" className="number">
                                        <i className="fas fa-phone-alt"></i>
                                        <span>+91 9910012345</span>
                                    </a>
                                </div>
                            </div>
                          


                        </div>
                    </div>
                   
                   <FormRight />
                   
                </div>
            </div>
            </div>

          <Footer />


         </div>

    )

}

export default Partners;