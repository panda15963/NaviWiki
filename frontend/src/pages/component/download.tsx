import { Navbar } from "../component/navbar";
export default function Download() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        <div className="flex flex-col h-full w-full p-5 rounded-lg">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-bold">Download</h1>
            <div className="flex flex-row">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
