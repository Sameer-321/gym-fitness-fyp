import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { PayWithKhalti } from "../components/Modal/PayWithKhalti";
export default function TrainerRender() {
  const URL = "http://localhost:5000/api/v1";
  const [trainers, setTrainers] = useState([]);

  // console.log(trainers);
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
  // console.log(detail, "sssssssssssssssssssssssssssssssssssss");
  const nav = useNavigate();
  const URL = "http://localhost:5000/api/v1/auth";
  const [pp, setPp] = useState(
    "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
  );
  // console.log(pp);
  const [popUp, setPopUp] = useState(false);
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

  const handleClick = () => {
    nav("profile", {
      state: { detail, pp },
    });
  };
  const handlePay = () => {
    setPopUp(!popUp);
  };
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

        <td className="px-1 py-1 text-xs border relative">
          <div className=" bg-purple-600 rounded-full text-center w-2/5 m-auto my-2 h-auto p-1">
            <span className="font-semibold text-stone-200 tracking-wide">
              Years of Experience:
            </span>
            <span className="font-bold text-slate-900 text-[15px] pt-[12px]">
              {detail.yearsOfExperience}
            </span>
          </div>
          <div className="flex justify-start items-center  flex-wrap my-2">
            <div className="w-1/5 font-bold text-[16px] text-purple-600">
              Fields :
            </div>
            <div className="w-4/5" key={detail._id}>
              {detail.trainerType.map((i) => {
                return (
                  <p className=" bg-blue-200 text-center font-semibold tracking-wide text-white-600 rounded-full inline-block w-2/5 p-1 m-1 ">
                    {i}
                  </p>
                );
              })}
            </div>
          </div>
          <p className="px-2   text-blue-950 hover:bg-gray-300 text-justify">
            {detail.description}
          </p>
          <button
            onClick={() => {
              handlePay();
            }}
            className="rounded-lg mx-auto my-1 mb-2 px-4 py-2 font-bold text-gray-50 bg-purple-600 hover:bg-purple-900"
          >
            Hire(Rs 5000)
          </button>
          <div
            className="absolute bottom-2 right-5 text-purple-400 hover:text-purple-700 hover:cursor-pointer"
            onClick={() => {
              handleClick();
            }}
          >
            <div className="inline-block">View More </div>
            <div className="w-5 h-5 inline-block pt-2">
              <ArrowRightIcon />
            </div>
          </div>
        </td>
        <PayWithKhalti
          state={popUp}
          info={{ amount: 1000, trainer_id: detail.userInfo._id }}
        />
      </tr>
    </>
  );
};
