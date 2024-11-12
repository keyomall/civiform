import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>CiviForm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/">
                <a className="flex-shrink-0 flex items-center">
                  <img className="h-8 w-auto" src="/logo.svg" alt="CiviForm" />
                </a>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/">
                  <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Home
                  </a>
                </Link>
                <Link href="/citizens">
                  <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Citizens
                  </a>
                </Link>
                <Link href="/forms">
                  <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Forms
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 CiviForm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}