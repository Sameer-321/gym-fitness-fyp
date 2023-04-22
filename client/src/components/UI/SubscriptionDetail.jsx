import { name } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { SubInfo } from "../../features/subscription/subSlice";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import Moment from "moment";
export function SubscriptionDetail() {
  const UserName = useSelector(name);
  const sub = useSelector(SubInfo);

  const [subscriptionDetail, setSubcriptionDetail] = useState({});
  console.log(subscriptionDetail);
  //css for red:"px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"
  function isExpire(startDate, endDate) {
    const start = Moment(startDate).startOf("day");
    const end = Moment(endDate).startOf("day");

    if (start.isAfter(end)) {
      // return <div>Your subscriptioin has been expired</div>;
      return true;
    }

    const remainingDays = end.diff(start, "days");
    // console.log(remainingDays);
    return <div> {remainingDays}</div>;
  }

  useEffect(() => {
    setSubcriptionDetail(sub);
  }, [sub]);

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Subscription Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Detail about your Subscription
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              User Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {UserName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Subscribtion Tenture
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {sub.subscribtionTier}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Amount Paid
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Rs. {sub.amount / 100}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              From
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {/* if not format,eg: Mon Apr 17 2023 23:00:04 GMT+0545 (Nepal Time)-->will be the result*/}
              {moment(sub.startDate).format("YYYY-MM-DD")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">To</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {moment(sub.endDate).format("YYYY-MM-DD")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Remaining Days
            </dt>
            <dd
              className={
                isExpire(sub.startDate, sub.endDate) === true
                  ? "px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"
                  : `mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`
              }
            >
              {isExpire(sub.startDate, sub.endDate) === true
                ? "Your subscriptioin has been expired"
                : isExpire(sub.startDate, sub.endDate)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Active Status
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {sub.status}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Payment Method
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              "Khalti"
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
