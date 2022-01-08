import React from 'react';
import '../App.css'
import { MDBNavbar } from 'mdb-react-ui-kit';

export default function Header() {
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var formattedStamp = today.toLocaleString("en-US", options);

    return (
        <MDBNavbar style={{ position: "fixed", backgroundColor: "white", zIndex: 1, boxShadow: "0px 0px 1px" }} >
            <div className="headerItems" >
                <a href="/">
                    <img src="https://firebasestorage.googleapis.com/v0/b/waego1.appspot.com/o/sg.svg?alt=media&token=b116c5bc-a940-4866-b45e-ac7f2c8b00fd"
                        style={{ cursor: "pointer" }}></img>
                </a>
                {formattedStamp}
            </div>
        </MDBNavbar>
    );
}