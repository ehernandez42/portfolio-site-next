import Link from "next/link";
import Image from "next/image";


function NavItems() {
    return (
        <>
            <li><a href={"#About"}>About</a></li>
            <li><a href={"#Services"}>Services</a></li>
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
        </>
    )
}

export default function NavBar() {
    return (
        <div className="navbar sticky top-0 bg-base-100 z-20">
            <div className="navbar-start hidden lg:block"></div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <NavItems/>
                </ul>
            </div>
            <div className="navbar-end hidden lg:block"></div>
            <div className="navbar-end flex lg:hidden w-full">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        More
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow rounded-box w-52">
                        <NavItems/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
