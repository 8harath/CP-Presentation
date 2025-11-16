import Slide from "../Slide";

export default function Slide5() {
  return (
    <Slide>
      <div className="p-16 space-y-10">
        {/* Title */}
        <div className="inline-block bg-black px-8 py-4 neo-brutal-shadow">
          <h1 className="text-5xl font-bold text-white">
            Processing Pipeline
          </h1>
        </div>

        {/* Pipeline Steps */}
        <div className="space-y-4 max-w-5xl">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-black neo-brutal-shadow-sm px-6 py-3 min-w-[80px] text-center">
              <p className="text-2xl font-bold text-white">01</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm px-8 py-4 flex-1">
              <p className="text-xl font-bold text-black">File Upload & Validation</p>
              <p className="text-sm text-gray-600 mt-1">2s • 10% progress</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-black neo-brutal-shadow-sm px-6 py-3 min-w-[80px] text-center">
              <p className="text-2xl font-bold text-white">02</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm px-8 py-4 flex-1">
              <p className="text-xl font-bold text-black">Multi-Strategy Extraction (5 methods)</p>
              <p className="text-sm text-gray-600 mt-1">5-10s • 30% progress</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-black neo-brutal-shadow-sm px-6 py-3 min-w-[80px] text-center">
              <p className="text-2xl font-bold text-white">03</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm px-8 py-4 flex-1">
              <p className="text-xl font-bold text-black">AI Extraction (Gemini)</p>
              <p className="text-sm text-gray-600 mt-1">10-15s • 50% progress</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4">
            <div className="bg-black neo-brutal-shadow-sm px-6 py-3 min-w-[80px] text-center">
              <p className="text-2xl font-bold text-white">04</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm px-8 py-4 flex-1">
              <p className="text-xl font-bold text-black">AI Enhancement (Action verbs + metrics)</p>
              <p className="text-sm text-gray-600 mt-1">15-20s • 70% progress</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-center gap-4">
            <div className="bg-black neo-brutal-shadow-sm px-6 py-3 min-w-[80px] text-center">
              <p className="text-2xl font-bold text-white">05</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm px-8 py-4 flex-1">
              <p className="text-xl font-bold text-black">Edge Case Handling (90+ cases)</p>
              <p className="text-sm text-gray-600 mt-1">0.1s • 75% progress</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex items-center gap-4">
            <div className="bg-black neo-brutal-shadow-sm px-6 py-3 min-w-[80px] text-center">
              <p className="text-2xl font-bold text-white">06</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm px-8 py-4 flex-1">
              <p className="text-xl font-bold text-black">PDF Generation (Puppeteer)</p>
              <p className="text-sm text-gray-600 mt-1">5-10s • 100% complete</p>
            </div>
          </div>
        </div>

        {/* Total Time */}
        <div className="bg-black neo-brutal-shadow px-12 py-6 max-w-md">
          <p className="text-3xl font-bold text-white text-center">Total: 30-45 seconds</p>
        </div>
      </div>
    </Slide>
  );
}
