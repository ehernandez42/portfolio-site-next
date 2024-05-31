import {ProjectsList} from "@/types/types";


interface props {
    projects: ProjectsList;
}

// refactor this to the actual card
const ProjectsList = ({projects}: props) => {
    const {titles, images, captions, urlLinks} = projects;

    return (
        <div className={'flex flex-col items-center'}>
            <h1 className={'text-3xl font-extrabold mb-3'}>Projects</h1>
            <div className={''}>
                <div
                    className={'bg-info-content rounded-4xl p-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-between font-extrabold'}>
                    {titles.map((title, index, image) => (
                        <section className={'card-body bg-gray-700 mx-3'} key={index}>
                            {image}
                            <section className={'italic '}>
                                {captions}
                            </section>

                        </section>
                    ))}
                </div>

            </div>
        </div>
    )
}


export default ProjectsList;
