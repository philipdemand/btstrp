import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ contactRef, lightClicked }) => {

    const initialFormData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    const [formData, setFormData] = useState(initialFormData)

    const submitContactForm = (e) => {
        e.preventDefault()
        if (formData.name && formData.email && formData.subject && formData.message) {
            emailjs
                .sendForm('service_2uu5qkr', 'template_co6pgdm', contactRef.current, {
                    publicKey: 'hsGvSZS6Ei9_r_cuI',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setFormData(initialFormData);
                        toast.success('Email sent successfully', { autoClose: 3000 });
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setFormData(initialFormData);
                        toast.error('Failed to send email. Please try again later.', { autoClose: 3000 });
                    },
                );
        } else {
            toast.error('Please fill-in everything', { autoClose: 3000 });
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    }

    return (
        <div>
            <Container style={{ paddingTop: "100px", paddingBottom: "40px", width: "50%" }} >
                <h2 style={{ fontFamily: 'Menlo, monospace' }}>Let's Get In Touch!</h2>
                <Form ref={contactRef} onSubmit={submitContactForm} style={{ fontFamily: 'Menlo, monospace' }}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label style={{ fontSize: "18px" }}>Name:</Form.Label>
                        <Form.Control name="name" onChange={handleChange} value={formData.name} type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: "18px" }}>Email Address:</Form.Label>
                        <Form.Control name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Enter Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="subject">
                        <Form.Label style={{ fontSize: "18px" }}>Subject:</Form.Label>
                        <Form.Control name="subject" onChange={handleChange} value={formData.subject} type="text" placeholder="Subject" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label style={{ fontSize: "18px" }}>Message:</Form.Label>
                        <Form.Control as="textarea" rows={5} style={{ resize: "vertical" }} name="message" onChange={handleChange} value={formData.message} type="text" placeholder="Send me a message!" />
                    </Form.Group>
                    <Button
                        className={!lightClicked ? "non-rb-button-light" : "non-rb-button-dark"}
                        type="submit"
                        size="sm"
                    >
                        Submit
                    </Button>
                </Form>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
            </Container>
        </div>
    );
};

export default Contact;