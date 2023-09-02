'use client'
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import axios from "axios";
   
  export function CardInstructors() {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:4000/api/users")
        .then((response) => {
          console.log('users', response)
        });
  
    }, []);

    return (
      <Card className=" mt-6 w-full pt-5">
        <CardHeader color="blue-gray" className="relative h-40">
          
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" >
            Nasi instruktorzy
          </Typography>
          
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter> */}
      </Card>
    );
  }