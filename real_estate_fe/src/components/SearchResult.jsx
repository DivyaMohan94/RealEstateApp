import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import data from "../assets/data.json";
import React, { useState } from "react";
import HomeCard from "./HomeCard";

export default function SearchResult() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedHome, setSelectedHome] = useState(0);

//   const closeModal = (e) => {
//     if (e.target.id === "backdrop") {
//       setShowModal(false);
//     }
//   };

//   const cards = data.homes.map((home) => {
//     return (
//         <>
//       <Card className="mt-6 w-96" id={home.id}>
//         <CardHeader color="blue-gray" className="relative h-56">
//           <img
//             src="https://photos.zillowstatic.com/fp/14dcd6eae27f434426ba98c116cb7081-uncropped_scaled_within_1536_1152.webp"
//             alt="card-image"
//           />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             {home.address}
//           </Typography>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <Typography variant="h6">
//               {home.price} | {home.beds} Beds | {home.bath} Baths | {home.sqft}{" "}
//               sqft
//             </Typography>
//           </div>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button
//             id={home.id}
//             onClick={(e) => {
//                 console.log(cards[e.target.id].address);
//               setShowModal(true);
//               setSelectedHome(e.target.id);
//             }}
//           >
//             Read More
//           </Button>
//         </CardFooter>
//       </Card>
//       </>
//     );
//   });

  return (
    <div>
      <Typography variant="h3">Browse homes</Typography>
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-8">
        {data.homes.map((home) => {
            return <HomeCard home = {home}/>
        })}
      </div>
      
    </div>
  );
}



// {showModal ? (
//     <>
//       <div
//         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//         onClick={closeModal}
//         id="backdrop"
//       >
//         <div className="relative w-auto my-6 mx-auto max-w-4xl">
//           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//             <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//               <h3 className="text-3xl font-semibold">{
//               home.address}</h3>
//               <button
//                 className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                 onClick={() => setShowModal(false)}
//               >
//                 <span className="bg-transparent text-black opacity-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                   ×
//                 </span>
//               </button>
//             </div>
//             <img
//               alt="nature"
//               className="h-[24rem] w-full rounded-lg object-cover object-center p-4"
//               src={home.address}
//             />
//             <div className="relative p-6 flex-auto">
//               <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                 {home.description}
//               </p>
//             </div>
//             <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//               <button
//                 className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//                 onClick={() => setShowModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//     </>
//   ) : null}
