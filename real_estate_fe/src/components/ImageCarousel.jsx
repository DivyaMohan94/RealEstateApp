import { Carousel } from "@material-tailwind/react";
 
export default function ImageCarousel({links}) {
  return (
    <Carousel className="rounded-sm">
        {
            links.map((link)=>{
                return (
                    <img
                    src={link}
                    alt="Loading"
                    className="h-full w-full object-cover"
                  />
                )
            })
        }
    </Carousel>
  );
}
