import {ProjectsList} from "@/types/types";


interface props {
    projects: ProjectsList;
}


const ProjectsList = ({projects}: props) => {
    const {titles, images, captions, urlLinks} = projects;

    return (
        <div className={'flex flex-col items-center'}>
            <h1 className={'text-3xl font-extrabold mb-3'}>Projects</h1>
            <div className={''}>
                {/*this is going to be a card for each project you do*/}
                <div className={'bg-info-content rounded p-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-between'}>
                    {titles.map((title, index, image) => (
                        <section className={'card-body bg-gray-700 mx-3'} key={index}>
                            {title}
                            {image}
                        </section>
                    ))}
                </div>

            </div>
        </div>
    )
}


export default ProjectsList;
