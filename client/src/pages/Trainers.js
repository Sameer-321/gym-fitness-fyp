import { useState } from "react";

export default function TrainerRender() {
  const [trainers, setTrainers] = useState([
    {
      image:
        "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
      name: "sameer sunar",
      description:
        "asdfkjhg adf hasdf asdfkjh asdflaosdfl  asdfk asdf lasdf asdfkjhg asdfkjhg adf hasdf asdfkjh asdflaosdfl  asdfk asdf lasdf asdfkjhgasdfkjhg adf hasdf asdfkjh asdflaosdfl  asdfk asdf lasdf asdfkjhgasdfkjhg adf hasdf asdfkjh asdflaosdfl  asdfk asdf lasdf asdfkjhgasdfkjhg adf hasdf asdfkjh asdflaosdfl  asdfk asdf lasdf asdfkjhg",
    },
    {
      image:
        "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
      name: "asdf dola",
      description:
        "asdfkjhg adf hasdf asdfkjh asdflaosdfl  asdfk asdf lasdf asdfasdf asdf asf ",
    },
    {
      image:
        "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
      name: "umanga gay",
      description:
        "asdfkjhg adf hasdf asdfkjh asdflaosdfl  asdfk asdf lasdf asdfasdf asdf asf ",
    },
  ]);

  return (
    <div className="container px-25 mt-[90px] my-5  mx-auto">
      <div className=" font-semibold">Trainers</div>

      <table className="w-full text-gray-700">
        <tbody>
          {trainers.map((i) => {
            return <TrainerPageCard detail={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

const TrainerPageCard = ({ detail }) => {
  return (
    <>
      <tr className=" w-full text-gray-700 mb-2 ">
        <td className="w-2/5  px-4 py-3 border">
          <div className="w-9/10 flex flex-col items-center text-sm">
            <div className="relative w-15 h-16  rounded-full md:block">
              <img
                className="object-cover w-full h-full rounded-full"
                src={
                  detail?.img
                    ? `http://localhost:5000/${detail?.image}`
                    : `https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png`
                }
                // src={`https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png`}
                alt=""
                loading="lazy"
              />
            </div>

            <span className="mt-2  font-semibold text-black">
              {detail.name}
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
