"use server"
import {EmailTemplate} from "@/components/emailTemplate";
import {Resend} from "resend";
import React from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const resend = new Resend(`${process.env.RESEND_API_KEY}`);


export async function sendEmail(prevState: any | undefined, formData: FormData) {

    const fields = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string
    }


    try {
        const {data, error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['eleazarfhernandez@gmail.com'],
            // this is going to be a new field that the user will pass in from the form
            subject: `New message from ${fields.name}`,
            react: EmailTemplate(fields) as React.ReactElement,
        });

        if (error) {
            console.error(error);
        }
        console.log(data)
        return {
            message: "Thanks for reaching out. I'll respond shortly.",
            errors: undefined,
            fieldValues: {
                name: '',
                email: '',
                message: '',
            }
        }


    } catch {
        console.error(error);
        return {
            message: "Oops, sorry. Try again at another time?"
        }
    }
}
