import React, {Component} from 'react';
import M from 'materialize-css';

class addUser extends Component {

    componentDidMount() {
        var datePicker = document.querySelectorAll('.datepicker');
        var date = new Date();
        M.Datepicker.init(datePicker, {
            autoClose:true,
            maxDate: date,
            defaultDate: date,
            setDefaultDate:true
        });
    }

    render() {
        return (
            <div className="container">
                <div className="card p-50">
                    <div>
                        <h4>
                            Add User
                        </h4>
                    </div>
                    <div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="firstName" type="text" className="validate"/>
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="lastName" type="text" className="validate"/>
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email">Email Address</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <input id="phone" type="email" className="validate"/>
                                <label htmlFor="phone">Contact Number</label>
                            </div>

                            <div className="input-field col s6">
                                <input type="text" className="datepicker"/>
                                <label htmlFor="phone">Birth Day</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <div className="d-inline">
                                    <div>
                                        <label className="p-5">
                                            <input name="group1" type="radio" checked />
                                            <span>Male</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="p-5">
                                            <input name="group1" type="radio" />
                                            <span>Female</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-field col s6">
                                <button className="waves-effect waves-light btn col s6">button</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default addUser;
