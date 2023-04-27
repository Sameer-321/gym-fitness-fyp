export default function TrainerRender() {
  return (
    <div className="container px-25 my-40 mx-auto">
      <table className="w-full text-gray-700">
        <tbody className="my-40">
          <tr className=" w-full text-gray-700 my-40 ">
            <td className="w-2/5  px-4 py-3 border">
              <div className="w-9/10 flex flex-col items-center text-sm">
                <div className="relative w-15 h-16  rounded-full md:block">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    //   src={
                    //     userProfile?.profilePicture?.link
                    //       ? `http://localhost:5000/${userProfile?.profilePicture?.link}`
                    //       : `https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png`
                    //   }
                    src={`https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png`}
                    alt=""
                    loading="lazy"
                  />
                </div>

                <span className="mt-2  font-semibold text-black">
                  Sameer Sunar
                </span>
              </div>
            </td>

            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                data.status
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
