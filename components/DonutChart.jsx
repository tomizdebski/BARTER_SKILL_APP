import DonutChart from "react-donut-chart";
import { UserContext } from "@components/UserContext";
import axios from "axios";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

const DonutChartt = ({ score, name }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const router = useRouter();

  const handleSaveClick = () => {
    axios
    .post("http://localhost:4000/api/skills/", {
      name: name,
      level: +score,
      userId : +userInfo.id
    })
    .then(() => router.push("/user-skills"));
  };

  return (
    <div className="flex-col">
      <DonutChart
        data={[
          {
            label: "Dobrych odpowiedzi",
            value: score * 10,
          },
          {
            label: "Błędnych odpowiedzi ",
            value: 100 - score * 10,
            // isEmpty: true,
          },
        ]}
      />
      <button 
      className="text-gray-600 bg-yellow-600 p-3 rounded-full w-50 hover:bg-white hover:border-yellow-600 hover:border-4"
      onClick={handleSaveClick}
      >
        Zapisz do bazy
      </button>
    </div>
  );
};

export default DonutChartt;
