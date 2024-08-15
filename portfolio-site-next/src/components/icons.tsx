import Image from "next/image";
import Link from "next/link";

export default function Icons() {

    const socialIcons: {[key: string]: string} = {
        "/Socials/github-svgrepo-com.svg.png": "https://github.com/ehernandez42",
        "/Socials/linkedin-svgrepo-com.svg.png": "https://linkedin.com/in/eleazarfhernandez",
        "/Socials/twitter-svgrepo-com.svg.png": "https://twitter.com/ehernandezdev",
        "/Socials/substack-reader-svgrepo-com.svg.png": "https://kickedrocks.substack.com"
    }

    return (
        <div className={'flex flex-row gap-2'}>
            {Object.entries(socialIcons).map(([image, site]) => (
                <Link target={"_blank"} href={site} key={site}>
                    <Image src={image}
                           alt={site}
                           width={55}
                           height={55}
                           className={'rounded bg-white hover:bg-gray-200'}/>
                </Link>
            ))}
        </div>
    )
}
