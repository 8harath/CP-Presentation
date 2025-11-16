import Slide from "../Slide";

export default function Slide3() {
  return (
    <Slide>
      <div className="p-0 space-y-4 md:space-y-6">
        {/* Title */}
        <div className="inline-block bg-black px-4 py-3 md:px-8 md:py-4 neo-brutal-shadow">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our Solution
          </h1>
        </div>

        {/* Main Feature */}
        <div className="bg-white neo-border neo-brutal-shadow-lg p-6 max-w-4xl">
          <p className="text-2xl md:text-4xl font-bold text-black mb-8">
            Upload → AI Enhance → Download
          </p>
          <p className="text-2xl text-gray-700">
            ATS-optimized PDF in under 60 seconds
          </p>
        </div>

        {/* Key Innovation */}
        <div className="space-y-6 max-w-5xl">
          <p className="text-lg md:text-2xl font-bold text-black">Dual AI Approach</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6 md:p-8">
              <p className="text-base md:text-xl font-bold text-black mb-2">Gemini 1.5 Flash</p>
              <p className="text-lg text-gray-700">Content extraction & enhancement</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6 md:p-8">
              <p className="text-base md:text-xl font-bold text-black mb-2">Gemini Vision</p>
              <p className="text-lg text-gray-700">OCR & cross-verification</p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-6xl">
          <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
            <p className="text-xl md:text-3xl font-bold text-white">85-95%</p>
            <p className="text-sm text-white mt-2">Accuracy</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
            <p className="text-xl md:text-3xl font-bold text-white">30-45s</p>
            <p className="text-sm text-white mt-2">Processing</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
            <p className="text-xl md:text-3xl font-bold text-white">90+</p>
            <p className="text-sm text-white mt-2">Tests</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
            <p className="text-xl md:text-3xl font-bold text-white">85%</p>
            <p className="text-sm text-white mt-2">Coverage</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
            <p className="text-xl md:text-3xl font-bold text-white">99.9%</p>
            <p className="text-sm text-white mt-2">Uptime</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
