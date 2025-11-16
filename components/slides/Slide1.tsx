import Slide from "../Slide";

export default function Slide1() {
  return (
    <Slide className="flex flex-col items-center justify-center bg-white">
      <div className="text-center space-y-10">
        {/* Main Title */}
        <div className="space-y-6">
          <div className="inline-block bg-black px-12 py-6 neo-brutal-shadow-lg">
            <h1 className="text-7xl font-bold text-white tracking-tight">
              KairosCV
            </h1>
          </div>
          <p className="text-3xl font-medium text-black">
            AI-Powered Resume Optimization Platform
          </p>
        </div>

        {/* Tagline */}
        <div className="bg-white neo-border neo-brutal-shadow px-12 py-6 inline-block">
          <p className="text-2xl font-bold text-black">
            Transform Any Resume into ATS-Optimized Perfection
          </p>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6">
            <p className="text-sm font-bold text-black mb-2">TEAM</p>
            <p className="text-lg text-black">Bharath K, Lochan S, Tobith</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6">
            <p className="text-sm font-bold text-black mb-2">INSTITUTION</p>
            <p className="text-lg text-black">Jain University</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-block bg-black neo-border-thin neo-brutal-shadow-sm px-8 py-4">
          <span className="text-xl font-bold text-white">
            MVP - PRODUCTION READY
          </span>
        </div>
      </div>
    </Slide>
  );
}
