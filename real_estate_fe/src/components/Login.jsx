import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

  import React, {useState} from "react";
  import "../Styles/Login.css"

export default function Login(){
    // const [email, setEmail] = useState("");
    // const [passowrd, setPassword] = useState("");
    return (
        <Card color="transparent" shadow={false} className = "card">
         <Typography variant="h4" color="blue-gray">
           Login
         </Typography>
         <Typography color="gray" className="mt-1 font-normal">
           Nice to meet you! Enter your details to login.
         </Typography>
         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" style = {{alignSelf:"center"}}>
           <div className="mb-1 flex flex-col gap-6">
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Your Email
             </Typography>
             <Input
               size="lg"
               placeholder="name@mail.com"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Password
             </Typography>
             <Input
               type="password"
               size="lg"
               placeholder="********"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
           </div>
           <Button className="mt-6" fullWidth>
             Login
           </Button>
         </form>
       </Card>
     )
}