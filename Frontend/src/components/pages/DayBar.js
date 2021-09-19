import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";


class NavBar extends Component {

    constructor(props) {
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            currentDate: date
        }
    }



    render() {
        return (
            <div>

                <div className="col-auto align-self-center">
                    <a href="#" className="btn btn-sm btn-outline-primary" id="Dash_Date">
                        <span className="day-name" id="Day_Name">Today:</span>&nbsp;
                        <span className id="Select_date">   {this.state.currentDate}</span>
                        <i data-feather="calendar" className="align-self-center icon-xs ml-1" />
                    </a>
                    <a href="#" className="btn btn-sm btn-outline-primary">
                        <i data-feather="download" className="align-self-center icon-xs" />
                    </a>
                </div>
            </div>
        );
    }
}
export default NavBar;