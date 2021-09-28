import React, { Component } from 'react';
import axios from "axios";
import { APIURL } from "../../API/environment";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Navbar from '../Adminnavibar';

const UserID = localStorage.getItem("LocalUserID");

export default class AllItems extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], Jobs: [], applicantName: "" };
    }

    printDocument() {
        const input = document.getElementById('viewtable');
        html2canvas(input)
            .then((canvas) => {
                var imgWidth = 200;
                var pageHeight = 290;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4')
                var position = 0;
                var heightLeft = imgHeight;
                pdf.addImage(imgData, 'JPEG', 4, position, imgWidth, imgHeight);
                pdf.save("download.pdf");
            });
    }

    componentDidMount() {

        axios.get(`${APIURL}/Events/getAllEvents`)
            .then(response => {

                this.setState({ Jobs: response.data.data });
                console.log(" data getAppliedJob", this.state.Jobs);
                this.setState({ applicantName: this.state.Jobs.Applicant_Name });
            })
    }

    render() {
        return (
            <div>
                <Navbar />

                <button onClick={this.printDocument} style={{ marginTop: "10px", borderRadius: "5px", height: "1cm", marginLeft: "350px" }} className="btn btn-success btn-sm">Generate PDF</button>

                <div id="viewtable" style={{ marginLeft: "300px" }}>
                    <h3 style={{ 'textAlign': 'center' }}>
                        Event Report
                    </h3>
                    <h3 style={{ 'textAlign': 'center' }}>
                        {this.state.applicantName}
                    </h3>
                    <br></br>
                    <table className="table table-striped" id="addSupplier-viewtable" style={{ 'fontSize': '14px', 'padding': '8px', border: '0.5px solid black' }}>
                        <thead>

                            <tr>
                                <th>Event</th>
                                <th>Company Name</th>
                                <th>Event Type</th>
                                <th>Closing Date</th>

                            </tr>
                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (

                                <tr>
                                    <td>{item.eventTitle}</td>
                                    <td>{item.companyName}</td>
                                    <td>{item.eventType}</td>
                                    <td>{item.closingDate}</td>
                                </tr>
                            ))}

                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}