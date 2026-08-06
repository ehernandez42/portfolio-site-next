import * as React from "react";

interface EmailProps { name: string; email: string; company: string; projectType: string; timeline: string; message: string; }

export const EmailTemplate: React.FC<Readonly<EmailProps>> = ({ name, email, company, projectType, timeline, message }) => (
  <div>
    <h1>New project inquiry from {name}</h1>
    <p><strong>Email:</strong> {email}</p>
    {company && <p><strong>Company or team:</strong> {company}</p>}
    <p><strong>Project type:</strong> {projectType}</p>
    {timeline && <p><strong>Desired timing:</strong> {timeline}</p>}
    <p><strong>Project context:</strong></p>
    <p>{message}</p>
  </div>
);
