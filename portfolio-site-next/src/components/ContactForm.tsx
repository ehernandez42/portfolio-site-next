import {useRouter} from "next/navigation";

export default function ContactForm() {
    const router = useRouter();
    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);


        formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY as string);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            alert("Thanks for submitting! I'll get back to you soon!");
            await router.push('/')
        }
    }

    return (
        <div className={'py-8 lg:py-16 px-4 mx-auto max-w-screen-md'}>
            <h2 className="mb-12 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
            <form className={'space-y-8'} onSubmit={handleSubmit}>
                <label className="input input-bordered flex items-center gap-2">
                    Name:
                    <input type="text" name="name" className="grow" placeholder="Full Name"/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email:
                    <input type="text" name="email" className="grow" placeholder="name@site.com"/>
                </label>
                <textarea name="message" className="textarea w-full textarea-bordered" placeholder="Message"></textarea>
                <button className={'btn btn-info'} type="submit">Submit Form</button>
            </form>
        </div>
    );
}
