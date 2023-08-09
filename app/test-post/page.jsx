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

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:4000/posts", {
        method: "POST",
        mode: 'no-cors',
        body: JSON.stringify({
          title: lesson.title,
          published: true
        }),
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
