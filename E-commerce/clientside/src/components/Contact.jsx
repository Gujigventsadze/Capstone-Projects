import React from "react";
import "../../src/Contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-box">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" />
                <div className="button">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}