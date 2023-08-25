"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateLesson = () => {
  const router = useRouter();
  //const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [lesson, setLesson] = useState({});
  console.log(lesson)

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('przed fetch',lesson);
       const response = await fetch("http://localhost:4000/api/lesson", {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }

      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Dodaj'
      lesson={lesson}
      setLesson={setLesson}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreateLesson;
