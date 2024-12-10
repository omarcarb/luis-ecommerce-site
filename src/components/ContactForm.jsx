import React from "react";
import Input from "./Input";

function ContactForm(){

    return(
        <section className="flex_row" id="contact_form_group">
            <div>
                <h2>Want to ask a Question?</h2>
                <p>Contact us about any inquiries about a product or service we provide.</p>
            </div>
            <div className="input_form flex_column">
                <div className="input_group flex_column">
                    <label htmlFor="fname_input">Full Name</label>
                    <Input hasIcon={false} placeholderText={"John Smith"} name='fname_input'></Input>
                </div>
                <div className="input_group flex_column">
                    <label htmlFor="email">Email</label>
                    <Input hasIcon={false} placeholderText={"example@domain.com"} name='email'></Input>
                </div>
                <div className="input_group flex_column">
                    <label htmlFor="messages">Message</label>
                    <Input hasIcon={false} placeholderText={'Type Here...'} name='messages' className={'message_box'}></Input>
                </div>
            </div>
        </section>
    )

}

export default ContactForm;