import * as React from "react";

interface EmailProps {
    name: string;
    email: string;
    message: string;
}


export const EmailTemplate: React.FC<Readonly<EmailProps>> = ({name, email, message}) => {
    return (
        <div>
            <div className={'text-2xl font-bold'}>
                New message from: {name}
            </div>
            <div>
                Email: {email}
            </div>
            <div>
                Message: {message}
            </div>
        </div>
    )
}
