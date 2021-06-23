import React from 'react';
import Header from '../Components/Header';
import FormRight from '../Components/FormRight';
import Footer from '../Components/Footer';


const Landlord = () => {
    return(
        <div className="main_wrap">

            <Header />

            <div className="content_wrap landlord_content">
                <div className="container">
            
                    <div className="text_col left-col">
                        <h1 className="title">Landlords</h1>   
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>You can also chat with us on WhatsApp- <b>+91 9910012345</b></p>
                        <p>Please fill the form given below; one of our local development agents will contact you shortly.</p>
                    </div>

                    <div className="form_container">
                        <div className="personal_form form_row">
                            <h2 className="title">Personal Details</h2>
                            <div className="row">
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">First Name* :</label>
                                        <input type="text" className="form-control" placeholder="Enter Your First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Last Name* :</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Last Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Email Id* :</label>
                                        <input type="email" className="form-control" placeholder="Enter Your Email Id" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Mobile No.* :</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Mobile No" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">City * :</label>
                                        <input type="text" className="form-control" placeholder="Enter Your City" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">State* :</label>
                                        <select className="form-control">
                                            <option value="" selected>Select State</option>
                                            <option value="">India</option>
                                            <option value="">USA</option>
                                            <option value="">UK</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="location_form form_row">
                            <h2 className="title">Location Details</h2>
                            <div className="row">
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Landlord Type* :</label>
                                        <select className="form-control">
                                            <option value="" selected>Select Landlord Type</option>
                                            <option value="">Landlord Type</option>
                                            <option value="">Landlord Type</option>
                                            <option value="">Landlord Type</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Property Address* :</label>
                                        <textarea  className="form-control" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">City* :</label>
                                        <input type="text" className="form-control" placeholder="Location" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Super Area*</label>
                                        <input type="email" className="form-control" placeholder="In sq.ft" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Frontage* :</label>
                                        <input type="text" className="form-control" placeholder="Frontage in sq.ft" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Carpet Area*:</label>
                                        <input type="text" className="form-control" placeholder="Size in sq.ft" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 form-field">
                                    <div className="form-group">
                                        <label className="label">Catchment:</label>
                                        <select className="form-control" placeholder="Select State">
                                            <option value="">Neighborhood Market</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12 col-12 form-field btn-field">
                                    <div className="form-group">
                                        <button className="btn-link">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
            </div>

            <Footer />

        </div>
    )
    
}

export default Landlord;