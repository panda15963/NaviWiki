import { Navbar } from "../component/navbar";
import Footer from "../component/footer";
export default function CCIC() {
    return (
        <div className="wrapper">
            <div className="flex">
                <Navbar />
                <div className="flex-1">
                </div>
            </div>
            <Footer />
        </div>
    )
}