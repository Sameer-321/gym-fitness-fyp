import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.jpeg";

const Start = () => {
  return (
    <section id="classes">
      <div className="container mx-auto">
        <div className="gap-10 sm:flex">
          <div className="w-full mb-4 sm:w-6/12">
            <img
              className="w-full h-[440px] sm:h-full"
              src={trainerImg}
              alt="img"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="sm:w-6/12"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="mb-3 text-4xl font-normal">
              Ready to make a <span className="text-indigo-500">change?</span>
            </h2>
            <p className="mb-4 text-lg">
              Ready to transform your body and mind? Let's do this! Our gym is
              here to help you make the change you want to see. Take the first
              step, and let's achieve your goals together!
            </p>

            <a href="/login">
              <button className="px-6 py-3 text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
