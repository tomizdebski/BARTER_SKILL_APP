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
    .post(process.env.NEXT_PUBLIC_URL_API + "/api/skills/", {
      name: name,
      level: +score,
      userId : +userInfo.id
    })
    .then(() => router.push("/user-skills"));
  };

  return (
    <div className="flex-col w-auto h-auto">
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
      className="text-gray-600 bg-yellow-300 p-3 rounded-full sw-50 hover:bg-white hover:border-yellow-300 hover:border-2"
      onClick={handleSaveClick}
      >
        Zapisz do bazy
      </button>
      <button 
      className="text-gray-600 bg-green-300 m-5 p-3 rounded-full w-50 hover:bg-white hover:border-green-300 hover:border-2"
      onClick={() => router.push("/")}
      >
        Koniec
      </button>
    </div>
  );
};

export default DonutChartt;
