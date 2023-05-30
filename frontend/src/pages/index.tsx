import { Navbar } from "./component/navbar";
export default function Home() {
  return (
    <>
      <div className="flex">
        <div>
          <Navbar />
        </div>
        <div>
          <h1>Home</h1>          
        </div>
      </div>
    </>
  );
}
