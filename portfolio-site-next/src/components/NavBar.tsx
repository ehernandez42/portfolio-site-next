import Link from "next/link";
import Image from "next/image";


export function NavItems() {
    return (
        <div>
            <ul className={'lg:flex lg:flex-row'}>
                <li><a href={"#About"}>About</a></li>
                <li><a href={'#Contact'}>Contact Me</a></li>
                <li><Link target={'_blank'} href={'https://github.com/ehernandez42'}>
                    Projects
                    <Image src={'/Icons/external-link-svgrepo-com.svg.png'}
                           alt={'external'}
                           width={15}
                           height={15}/>
                </Link>
                </li>
                <li><Link target={'_blank'} href={'/Eleazar_Hernandez_Resume.pdf'}>
                    Resume
                    <Image src={'/Icons/external-link-svgrepo-com.svg.png'}
                           alt={'external'}
                           width={15}
                           height={15}/>
                </Link></li>
            </ul>
        </div>


    )
}

export default function NavBar() {

    return (
        <div className="navbar sticky top-0 bg-base-100 scroll-smooth">
            <div className="navbar-start w-full">
                {/*eleazar hernandez dev logo can go here?*/}
                <ul tabIndex={0} className="menu mt-3 z-[1] p-2 lg:flex items-stretch w-full hidden lg:visible">
                    <NavItems/>
                </ul>
                <div className="dropdown w-full">
                    <div tabIndex={0} role="button" className="btn btn-ghost flex justify-end lg:hidden ml-auto">
                        More
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow rounded-box w-52 right-0">
                        <NavItems/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
