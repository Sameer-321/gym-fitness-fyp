import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../components/Fetch/UserFetch";

export const SubscriberListCard = ({ data }) => {
  const nav = useNavigate();
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    getUser(data.userInfo._id)
      .then((data) => {
        setUserProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const subscriberProfile = () => {
    nav(`profile`, {
      state: { subscriptionDetail: data, userProfile: userProfile },
    });
  };

  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 border">
        <div className="flex items-center text-sm">
          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src={
                userProfile?.profilePicture?.link
                  ? `http://localhost:5000/${userProfile?.profilePicture?.link}`
                  : `https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png`
              }
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold text-black">{userProfile?.name}</p>
            <p className="text-xs text-gray-600"> {userProfile?.email}</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3 text-xs border">
        <span className={statusCss(data.status)}> {data.status} </span>
      </td>
      <td className="px-4 py-3 text-sm border">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            subscriberProfile();
          }}
        >
          View
        </button>
      </td>
    </tr>
  );
};

//button styles:
const statusCss = (status) => {
  if (status === "active") {
    return "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm";
  } else if (status === "pending") {
    return "px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm";
  } else if (status === "expire") {
    return "px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm";
  }
};
