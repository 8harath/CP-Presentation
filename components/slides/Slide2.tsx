import Slide from "../Slide";

export default function Slide2() {
  return (
    <Slide>
      <div className="space-y-8">
        {/* Title */}
        <div className="inline-block bg-black px-4 py-3 md:px-8 md:py-4 neo-brutal-shadow">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            The Problem
          </h1>
        </div>

        {/* Main Stat */}
        <div className="bg-white neo-border neo-brutal-shadow-lg p-8 max-w-4xl">
          <div className="text-center">
            <p className="text-4xl md:text-7xl font-bold text-black mb-3">75%</p>
            <p className="text-xl md:text-3xl font-medium text-black">
              of resumes rejected by ATS
            </p>
            <p className="text-xl text-gray-600 mt-4">
              before reaching human recruiters
            </p>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl">
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-base md:text-xl font-bold text-black">Job seekers spend hours formatting manually</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-base md:text-xl font-bold text-black">Inconsistent quality reduces callbacks</p>
          </div>
        </div>

        {/* Market */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-5xl">
          <div className="bg-black neo-brutal-shadow px-4 py-3 md:px-8 md:py-6 flex-1">
            <p className="text-2xl md:text-4xl font-bold text-white">$2.3B</p>
            <p className="text-lg text-white">Market Size</p>
          </div>
          <div className="bg-black neo-brutal-shadow px-4 py-3 md:px-8 md:py-6 flex-1">
            <p className="text-2xl md:text-4xl font-bold text-white">300M+</p>
            <p className="text-lg text-white">Applications/Year</p>
          </div>
          <div className="bg-black neo-brutal-shadow px-4 py-3 md:px-8 md:py-6 flex-1">
            <p className="text-2xl md:text-4xl font-bold text-white">4-6h</p>
            <p className="text-lg text-white">Time Spent</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
