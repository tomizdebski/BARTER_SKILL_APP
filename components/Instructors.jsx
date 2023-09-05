"use client";
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

export function CardInstructors({ filter, all }) {
  const [instructors, setInstructors] = useState([]);

  console.log("instructors", instructors);

  useEffect(() => {
    axios.get("http://localhost:4000/api/users").then((req) => {
      const { data } = req;
      const filterInstructor = data.filter((el) => el.instructor.length > 0);
      setInstructors(filterInstructor);
    });
  }, []);

  return (
    <Card className=" mt-6 w-full pt-5 border-2 border-green-600">
      <CardHeader
        color="blue-gray"
        className="relative h-40 flex justify-around rounded border-2 border-gray-700"
      >
        {instructors.map((el) => (
          <Link href="/" className="flex-center flex-col">
            <Image
              src={"http://localhost:4000/" + el.avatar}
              width={50}
              height={50}
              alt="Instructor"
              className="w-20 h-20 rounded-full object-cover mr-4 shadow border-2 border-gray-700"
              onClick={() => filter(el.id)}
              onDoubleClick={all}
            />
            <Typography variant="h6" color="green-600">
              {el.firstName}
            </Typography>
          </Link>
        ))}
      </CardHeader>
      <CardBody className="rounded-full ">
        {instructors.length === 0 && (
          <Image
            src={"/assets/icons/loader.svg"}
            width={50}
            height={50}
            alt="Instructor"
            className="w-20 h-20 rounded-full object-cover mr-4 shadow border border-sky-500"
          />
        )}
        <Typography variant="h5" color="blue-gray">
          Nasi instruktorzy
        </Typography>
      </CardBody>
      {/* <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter> */}
    </Card>
  );
}
