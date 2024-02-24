import Countdown from "react-countdown";

const CountDown = () => {
  const end = new Date(2024,2,11);

  const Completionist = () => (
    <div className="text-center sm:m-0 mb-16">Registration closed!</div>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="flex  gap-4 justify-center items-center mb-16">
          <div className="relative timer_box bg-transparent border-4 border-[#5100ff] w-fit rounded-lg sm:p-3 p-2 sm:px-5 px-3 text-center">
            {days}
            <span className="block text-xs">Days</span>
          </div>
          <div className="relative timer_box bg-transparent border-4 border-[#5100ff] w-fit rounded-lg sm:p-3 p-2 text-center">
            {hours}
            <span className="block text-xs">Hours</span>
          </div>
          <div className="relative timer_box bg-transparent border-4 border-[#5100ff] w-fit rounded-lg sm:p-3 p-2 text-center">
            {minutes}
            <span className="block text-xs">Minutes</span>
          </div>
          <div className="relative timer_box bg-transparent border-4 border-[#5100ff] w-fit rounded-lg sm:p-3 p-2 text-center">
            {seconds}
            <span className="block text-xs">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative z-10 mt-10 mb-[-40px] text-xl font-semibold">
      <div className="count-down">
        <Countdown date={end.getTime()} renderer={renderer}>
          <Completionist />
        </Countdown>
      </div>
    </div>
  );
};

export default CountDown;
