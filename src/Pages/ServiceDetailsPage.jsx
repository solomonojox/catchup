import { useLocation } from "react-router-dom"
import Navbar from "../Components/Navbar"

// import { FaWhatsapp } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";

const ServiceDetailsPage = () => {
  const location = useLocation()
  const info = location.state
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div>
        <p>{info.description}</p>

        <div className="flex">
          <div className="w-40 h-40 rounded-full bg-gray-50 p-2 flex items-center justify-center ">
            <MdPayments className="text-[80px] "/>
          </div>
          <div className="bg-gray-500">
            <p>Make payment</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceDetailsPage