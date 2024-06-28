"use client"
import Link from "next/link";

export default function Home() {

    return (
        <div data-theme="dark">

            <main>
                <div className="py-1 px-1 w-10/12 text-center mx-auto my-24 max-w-screen-xl p-32 lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Eleazar Hernandez</h1>
                    <h2 className="mb-4 font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                        Software Engineer</h2>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Welcome to my site! Please select from the options below.
                    </p>
                    <div
                        className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link href={'portfolio'}
                              className={'btn btn-info'}>
                            Developer Portfolio
                        </Link>
                        {/*<Link href={'freelance'}*/}
                        {/*      className={'btn btn-info'}>*/}
                        {/*    Freelance Services*/}
                        {/*</Link>*/}
                    </div>
                    <Link href={'contact'} className={'btn btn-info'}>
                        Contact Me
                    </Link>

                </div>
            </main>

        </div>
    );
}
