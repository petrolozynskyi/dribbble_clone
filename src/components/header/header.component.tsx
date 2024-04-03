
export default function Header() {

    return (
        <>
            <div className='flex items-center justify-between px-[40px]'>
                <div className="h-[100px] flex  items-center :hover-pointer">
                    <nav>
                        <ul className='xyu flex row justify-center items-center'>
                            <li className="group hover-trigger ">
                                <a className='pidor relative lox' href="/">Find designers</a>
                                <ul className='before w-[247px] overflow-visible flex flex-col nowrap hover-target bg-white rounded-xl p-[25px] top-[75px] absolute h-[152px] bg-inherit rounded'>
                                    <li className="">
                                        <a className='bg-white flex flex-col text-[15px]' href="/about">Designer Search
                                            <span className="text-[12px] text-[#3d3d4e] min-w-[200px]">Quickly find your next design</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a className='bg-white rounded-b-xl text-[#3d3d4e] mt-[18px] text-[15px] flex flex-col' href="/contact">Post a job
                                            <span className="text-[12px] min-w-[200px] text-[#3d3d4e]">The #1 job board for design talent</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a className='pidor' href="https://dribbble.com/about">Inspiration</a>
                            </li>
                            <li className="group hover-trigger">
                                <a className='pidor noob relative lox pt-[25px] flex' href="/contact">Courses</a>
                                {/* before hover-target flex w-[297px] bg-white p-[32px] rounded-xl group top-[75px] absolute h-[232px] text-black bg-inherit rounded text-sm */}
                                <ul className="before hover-target flex flex-col w-[297px] bg-white p-[32px] rounded-xl group top-[75px] absolute h-[232px] text-black bg-inherit rounded text-sm ">
                                    <li className="nav-v2-sub__item">
                                        <a className="bg-white flex flex-col text-[15px]" data-nav-event-clicked="UX Diploma" href="/ux-diploma">
                                            UX Diploma
                                            <span className="text-[12px] min-w-[300px] text-[#3d3d4e]">Learn UX design from scratch in 6 months</span>
                                        </a>              </li>
                                    <li className="nav-v2-sub__item">
                                        <a className="bg-white rounded-b-xl text-[#3d3d4e] mt-[18px] text-[15px] flex flex-col" data-nav-event-clicked="UI Certificate" href="/ui-certificate">
                                            UI Certificate
                                            <span className="text-[12px] min-w-[200px] text-[#3d3d4e]">12-week UI skill building for designers</span>
                                        </a>              </li>
                                    <li className="nav-v2-sub__divider"></li>
                                    <li className="nav-v2-sub__item">
                                        <a className="bg-white rounded-b-xl text-[#3d3d4e] mt-[18px] text-[15px] flex flex-col" data-nav-event-clicked="Workshops" href="/workshops">
                                            Live interactive workshops
                                            <span className="text-[12px] min-w-[200px] text-[#3d3d4e]">with design professionals</span>
                                        </a>              </li>
                                </ul>
                            </li>
                            <li>
                                <a className='pidor' href="https://dribbble.com/blog">Jobs</a>
                            </li>
                            <li>
                                <a className='pidor' href="https://dribbble.com/contact">Go Pro</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='gandon'></div>

                <div className="flex items-center">
                    <form className="flex relative pl-[48px] pr-[24px]">
                        <svg href="./" className="cursor-pointer opacity-[0.5] absolute top-[50%] left-[70px] translate-y-[-50%]" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" role="img">
                            <path d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.814 12.8132L15.5 15.4999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <input placeholder="Search...." className="cursor-pointer h-[48px] rounded-full pl-[48px] pr-[24px]"></input>
                    </form>
                    <button>Log in</button>
                    <button className="items: center text-white bg-black rounded-full ml-4 p-[12px] justify-center">Sign up</button>
                </div>
            </div>
        </>
    )
}
