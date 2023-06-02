import { Navbar } from "./component/navbar";
import { BsWikipedia } from "react-icons/bs";
import styles from "../styles/index.module.scss";
export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        <div className={styles.main_style}>
          <div className="rounded-lg bg-black p-6">
            <div className="space-y-8">
              <BsWikipedia className="text-7xl  text-gray-300 text-center">
                ModiM Wiki
              </BsWikipedia>
              <div className="space-y-10 text-white">
                <div className="space-y-5">
                  <div className="text-m font-semibold uppercase tracking-wider text-gray-400">
                    General
                  </div>
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <a
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      href="/streaming"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        Login
                      </div>
                      <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                        Sign in page
                      </div>
                    </a>
                    <a
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      href="/ssg"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        Register
                      </div>
                      <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                        Sign up page
                      </div>
                    </a>
                    <a
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      href="/ssr"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        DownLoad
                      </div>
                      <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                        Download and install a program for platform
                      </div>
                    </a>
                    <a
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      href="/isr"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        Manual Guide
                      </div>
                      <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                        Descriptions page about the program. More details are in this page
                      </div>
                    </a>
                  </div>
                </div>                
                <div className="space-y-5">
                  <div className="text-m font-semibold uppercase tracking-wider text-gray-400">
                    Misc
                  </div>
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <a
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      href="/hooks"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        Client Component Hooks
                      </div>
                      <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                        Preview the routing hooks available in Client Components
                      </div>
                    </a>
                    <a
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      href="/styling"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        CSS and CSS-in-JS
                      </div>
                      <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                        Preview the supported styling solutions
                      </div>
                    </a>
                    <a
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      href="/snippets"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        Code Snippets
                      </div>
                      <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                        A collection of useful App Router code snippets
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
