import {ProjectsList} from "@/types/types";
import Image from "next/image";


interface props {
    projects: ProjectsList;
}

const Project = ({projects}: props) => {
    const {title, image, caption, urlLink, hashTags} = projects;

    return (
        // - a card that shows the name of the company, an image as its background, a little description underneath the title of the company/project

        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg" src={image} alt={'Image'} width={400} height={50}/>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{caption}</p>
                <a href={urlLink} target={"_blank"}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800">
                    Link
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div className="px-6 pt-4 pb-2">
                {hashTags.map((tag, index) => {
                    return (
                        <span key={index}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #{tag}
                            </span>
                    )
                })}
            </div>
        </div>
    )
}
export default Project;
