import React from 'react';

const FormRight = () => {
    return(
        <div className="col-lg-5 col-md-5 col-12 right-col">
            <div className="form_content">
                <h3 className="title">Are you ready to begin your journey with React Js?</h3>
                <form action="">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-md-12 col-12">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-md-12 col-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-md-12 col-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="City" />
                            </div>
                        </div>
                        <div className="col-12 radio_col">
                            <div className="form-group">
                                <h6>What property type will you open the store at?</h6>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadioInline1">Owned</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadioInline2">Rented/Leased</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 btn-col">
                            <div className="form-group">
                            <button type="button" className="btn-link">Submit Request</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default FormRight;
