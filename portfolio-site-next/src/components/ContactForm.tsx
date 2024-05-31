import {useFormState, useFormStatus} from "react-dom";
import React, {ChangeEvent, useState, useEffect} from "react";
import {sendEmail} from "@/app/contact/actions/email-action";

export interface contactProps {
    name: string;
    email: string;
    message: string;
}

let initialState = {
    message: '',
    errors: undefined,
    fieldValues: {
        name: "",
        email: "",
        message: ""
    }
}


export default function ContactForm() {
    const [contactForm, setContactForm] = useState<contactProps>({
        name: "",
        email: "",
        message: ""
    })
    const [formState, formAction] = useFormState(sendEmail, initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let {name, value} = e.target;
        setContactForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function Submit() {
        const {pending} = useFormStatus();
        return <button
            className="w-full px-4 py-2 bg-info text-white rounded hover:bg-blue-950 focus:outline-none">{pending ? "Submitting..." : "Submit"}</button>
    }

    // useEffect(() => {
    //     if (formState.message === "Thanks for reaching out. I'll respond shortly.") {
    //         setContactForm({name: "", email: "", message: ""})
    //     }
    // }, [formState]);

    return (
        <div className={'py-8 lg:py-16 px-4 mx-auto max-w-screen-md'}>
            <h2 className="mb-12 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                Me</h2>
            <div className={'text-green-400 text-center'}>
                {formState.message}
            </div>

            <form className={'space-y-8'} action={formAction}>
                <label className="input input-bordered flex items-center gap-2">
                    Name:
                    <input type="text" name="name" value={contactForm.name} onChange={handleChange} className="grow"
                           placeholder="Full Name"/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email:
                    <input type="text" name="email" value={contactForm.email} onChange={handleChange} className="grow"
                           placeholder="name@site.com"/>
                </label>
                <textarea name="message" value={contactForm.message} onChange={handleChange}
                          className="textarea w-full textarea-bordered h-32" placeholder="Message"></textarea>
                <Submit/>
            </form>
        </div>
    );
}
