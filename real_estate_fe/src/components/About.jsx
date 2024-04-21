import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

  import "../Styles/Login.css"
   
  export default function About() {
    return (
        <div className = "card">
      <Card className="w-full max-w-[120 rem] flex-row" >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            HomeGuideAI Startup
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Launching AI based Real Estate App this month!
          </Typography>
          <Typography color="gray" className="mb-8 font-normal" style={{textAlign:"justify"}}>
          At HomeGuideAI, we empower home buyers and sellers with innovative AI-driven solutions to streamline the real estate process. Our advanced search technology allows you to find homes that perfectly match your desired features and lifestyle. With our app, you can monitor bids and receive AI-generated insights to guide you towards the best possible offer. We simplify the entire journey, from initial search to closing the deal, by eliminating time-consuming documentation review and providing seamless, efficient transactions. Discover the future of real estate with HomeGuideAI-your trusted partner for smarter home buying and selling.
          </Typography>
        </CardBody>
      </Card>
      </div>
    );
  }