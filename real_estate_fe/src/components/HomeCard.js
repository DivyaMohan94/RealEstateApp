import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

import ImageCarousel from "./ImageCarousel";

export default function HomeCard({ home }) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = (e) => {
    if (e.target.id === "backdrop") {
      setShowModal(false);
    }
  };

  return (
    <>
      <Card className="mt-6 w-96" id={home.id}>
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={home.thumbnail} alt="card" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {home.address}
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6">
              {home.price} | {home.beds} Beds | {home.bath} Baths | {home.sqft}{" "}
              sqft
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button id={home.id} onClick={(e) => setShowModal(true)}>
            Read More
          </Button>
        </CardFooter>
      </Card>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={closeModal}
            id="backdrop"
          >
            <div className="relative w-auto my-6 mx-auto max-w-7xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{home.address}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div style={{ height: "400px" }}>
                  <ImageCarousel links={home.images} />
                </div>
                <div className="relative p-6 flex-auto">
                  <Typography variant="h6">
                    {home.price} | {home.beds} Beds | {home.bath} Baths |{" "}
                    {home.sqft} sqft | Built in {home.build}
                  </Typography>
                </div>
                <div
                  className="flex gap-2"
                  style={{ flexWrap: "wrap", justifyContent: "center" }}
                >
                  {home.tags.map((tag) => {
                    return <Chip value={tag} />;
                  })}
                </div>
                <div className="relative p-6 flex-auto">
                  <p
                    className="my-4 text-blueGray-500 text-lg leading-relaxed"
                    style={{ textAlign: "justify" }}
                  >
                    {home.description}
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
