import {ProjectsList} from "@/types/types";
import Link from "next/link";


interface props {
    projects: ProjectsList;
}

const Project = ({projects}: props) => {
    const {title, image, caption, urlLink, hashTags} = projects;

    return (
        // - a card that shows the name of the company, an image as its background, a little description underneath the title of the company/project
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="max-w-56 mx-16 card" src={image} alt="Rotate_Translation" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {caption}
                    </p>
                </div>
            <Link href={urlLink}>
                <div className={'btn-link rounded px-4'}>
                    Link
                </div>
                </Link>
                <div className="px-6 pt-4 pb-2">
                    {hashTags.map((tag) => {
                        return(
                            <span
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
