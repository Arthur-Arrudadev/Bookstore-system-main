import { Home, UserCog, Bookmark, Star, BookCopy, TableOfContents } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Dashboard() {

    const Links = [
        {
            key: 0,
            name: "Página Inicial",
            icon: Home,
            link: "/main/user"
        },
        {
            key: 1,
            name: "Minha Conta",
            icon: UserCog,
            link: "/main/user/my-account"
        },
        {
            key: 2,
            name: "Favoritos",
            icon: Bookmark,
            link: "/main/user/favorites"
        },
        {
            key: 3,
            name: "Lista de Desejos",
            icon: Star,
            link: "/main/user/wish-list"
        },
        {
            key: 4,
            name: "Novidades",
            icon: BookCopy,
            link: "/main/user/recents"
        },
        {
            key: 5,
            name: "FAQ",
            icon: TableOfContents,
            link: "/main/user/faq"
        }
    ]

    const location = useLocation()

    const current_path = location.pathname === "/main/user" || location.pathname === "/main/user/"

    return (
        <section className="flex min-h-screen">
            <aside className="w-24 sm:w-52 px-4 py-4 bg-dashboard-sidebar-bg border-r-4 border-dashboard-sidebar-border">
                <nav className="flex flex-col gap-4 mt-20">
                    {Links.map((links) => (
                        <Link key={links.key} to={links.link} className='bg-dashboard-sidebar-links-bg hover:border-l-2 hover:bg-dashboard-sidebar-links-hover w-10 sm:w-auto px-1.5 py-2 rounded-sm flex items-center justify-center sm:justify-start gap-2'>
                            <span><links.icon width={20} className='text-dashboard-sidebar-links-icons' /></span>
                            <h1 className="hover:underline hidden sm:block text-sm text-dashboard-sidebar-links-text">{links.name}</h1>
                        </Link>
                    ))}
                </nav>
            </aside>
            <main className="w-full flex items-center justify-center px-4 py-4 mt-14">
                {current_path && (
                    <>
                        <section className='flex flex-col gap-5 items-center justify-center'>
                            <h1 className='text-lg sm:text-5xl text-center w-[60%] bg-gradient-to-r bg-clip-text text-transparent from-[#4c5a70]  to-[#111827]  uppercase font-bold'>Boas Vindas ao Universo de Conhecimento.</h1>
                            <p className='w-[40%] text-center text-xs sm:text-base font-medium'>Como o universo se desdobra em mistérios sem fim, cada livro é um cosmos de conhecimento esperando para ser explorado.</p>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Explorar
                                </span>
                            </button>
                        </section>
                    </>
                )}
                <Outlet />
            </main>
        </section>
    )
}

export default Dashboard