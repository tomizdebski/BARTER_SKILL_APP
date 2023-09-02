'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

    console.log("instructors", instructors)

    useEffect(() => {
      axios
        .get("http://localhost:4000/api/users")
        .then((req) => {
         const {data} = req;
         const filterInstructor = data.filter((el)=>  el.instructor.length > 0)
         setInstructors(filterInstructor);
        });
  
    }, []);

    return (
      <Card className=" mt-6 w-full pt-5">
        <CardHeader color="blue-gray" className="relative h-40 flex justify-around rounded">
          {instructors.map(el => (
            <Link href="/" className="flex-center">
            <Image
              src={"http://localhost:4000/" + el.avatar}
              width={50}
              height={50}
              alt="Instructor"
              className="w-20 h-20 rounded-full object-cover mr-4 shadow border border-sky-500"
            />
          </Link>
          ))}
        </CardHeader>
        <CardBody className="rounded-full">
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