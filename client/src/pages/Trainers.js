import { useState, useEffect } from "react";
import axios from "axios";
export default function TrainerRender() {
  const URL = "http://localhost:5000/api/v1";
  const [trainers, setTrainers] = useState([]);
  console.log(trainers);
  useEffect(() => {
    const trainerFetch = async () => {
      try {
        const response = await axios.get(URL + "/trainer-profile");
        setTrainers(response.data);
        // return response;
      } catch (err) {
        console.log(err);
      }
    };
    trainerFetch();
  }, []);

  return (
    <div className="container px-25 mt-[93px] my-5  mx-auto">
      <div className=" font-semibold">Trainers</div>

      <table className="w-full text-gray-700">
        <tbody>
          {trainers.map((i) => {
            return <TrainerPageCard detail={i} />; //import from this page
          })}
        </tbody>
      </table>
    </div>
  );
}

const TrainerPageCard = ({ detail }) => {
  const URL = "http://localhost:5000/api/v1/auth";
  const [pp, setPp] = useState(
    "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
  );
  // console.log(pp);
  useEffect(() => {
    const trainerFetch = async () => {
      try {
        const response = await axios.get(
          URL + `/profilePicture/${detail.userInfo._id}`
        );
        // console.log(response.data, 43333333333333333);
        setPp(`http://localhost:5000/${response.data.data}`);
        // return response;
      } catch (err) {
        setPp(
          `https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png`
        );
        console.log(err);
      }
    };
    trainerFetch();
  }, [detail]);
  return (
    <>
      <tr className=" w-full text-gray-700 mb-2 ">
        <td className="w-2/5  px-4 py-3 border">
          <div className="w-9/10 flex flex-col items-center text-sm">
            <div className="relative w-15 h-16  rounded-full md:block">
              <img
                className="object-cover w-full h-full rounded-full"
                src={pp}
                alt=""
                loading="lazy"
              />
            </div>

            <span className="mt-2  font-semibold text-black">
              {detail.firstName + " " + detail.lastName}
            </span>
          </div>
        </td>

        <td className="px-1 py-1 text-xs border">
          <p className="px-2   text-blue-950 hover:bg-gray-300 text-justify">
            {detail.description}
          </p>
          <button className="rounded-lg  my-1 mb-0 px-4 py-2 font-bold text-gray-50 bg-purple-600 hover:bg-purple-900">
            Hire(Rs 5000)
          </button>
        </td>
      </tr>
    </>
  );
};
