import { Navbar } from "./component/navbar";
import { BsWikipedia } from "react-icons/bs";
import styles from "../styles/index.module.scss";
export default function Home() {
  type MainMenu = {
    name?: string;
    items?: {
      maintitle?: string;
      subtitle?: string;
      link?: any;
    }[];
  };
  const data: MainMenu[] = [
    {
      name: "General",
      items: [
        { maintitle: "Login", subtitle: "Sign in page", link: "/component/login" },
        { maintitle: "Register", subtitle: "Sign up page", link: "/component/register" },
        {
          maintitle: "Download",
          subtitle: "Download and install a program for platform",
          link: "/component/download",
        },
        {
          maintitle: "Manual Guide",
          subtitle:
            "Descriptions page about the program. More details are in this page",
          link: "/component/manualguide",
        },
      ],
    },
    {
      name: "Platforms",
      items: [
        {
          maintitle: "STD5",
          subtitle: "Guide about STD5",
          link: "/platforms/std5",
        },
        {
          maintitle: "STD5W",
          subtitle: "Guide about STD5W",
          link: "/platforms/std5w",
        },
        {
          maintitle: "PRM5",
          subtitle: "Guide about PRM5",
          link: "/platforms/prm5",
        },
        {
          maintitle: "PRM6",
          subtitle: "Guide about PRM6",
          link: "/platforms/prm6",
        },
        {
          maintitle: "ccIC",
          subtitle: "Guide about ccIC",
          link: "/platforms/ccic",
        },
        {
          maintitle: "ccIC27",
          subtitle: "Guide about ccIC27",
          link: "/platforms/ccic27",
        },
        {
          maintitle: "ccNC",
          subtitle: "Guide about ccNC",
          link: "/platforms/ccnc",
        },
      ],
    },
  ];
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
                {data.map((item, index) => (
                  <div key={index}>
                    <div className="text-2xl font-semibold uppercase tracking-wider text-gray-400">
                      {item.name}
                    </div>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      {item.items?.map((item, index) => (
                        <a
                          key={index}
                          className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                          href={item.link}
                        >
                          <div className="font-medium text-gray-200 group-hover:text-gray-50">
                            {item.maintitle}
                          </div>
                          <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                            {item.subtitle}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
