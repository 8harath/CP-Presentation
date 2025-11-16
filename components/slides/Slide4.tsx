import Slide from "../Slide";

export default function Slide4() {
  return (
    <Slide>
      <div className="p-16 space-y-12">
        {/* Title */}
        <div className="inline-block bg-black px-8 py-4 neo-brutal-shadow">
          <h1 className="text-5xl font-bold text-white">
            Architecture
          </h1>
        </div>

        {/* Architecture Flow */}
        <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
          {/* User Layer */}
          <div className="bg-blue-500 neo-border-thin neo-brutal-shadow px-12 py-6 w-full text-center">
            <p className="text-2xl font-bold text-white">User Browser</p>
            <p className="text-sm text-white mt-1">PDF / DOCX / TXT Upload</p>
          </div>
          <div className="text-4xl font-bold text-black">↓</div>

          {/* Frontend/API */}
          <div className="bg-purple-500 neo-border-thin neo-brutal-shadow px-12 py-6 w-full text-center">
            <p className="text-2xl font-bold text-white">Next.js 16 + TypeScript</p>
            <p className="text-sm text-white mt-1">Frontend + API Routes</p>
          </div>
          <div className="text-4xl font-bold text-black">↓</div>

          {/* Processing Pipeline */}
          <div className="bg-green-500 neo-border-thin neo-brutal-shadow px-12 py-6 w-full">
            <p className="text-2xl font-bold text-white text-center mb-4">Processing Pipeline</p>
            <div className="grid grid-cols-3 gap-2 text-sm text-white">
              <p>1. Multi-Strategy Extraction</p>
              <p>2. AI Enhancement</p>
              <p>3. Edge Case Handling</p>
              <p>4. Template Population</p>
              <p>5. PDF Generation</p>
              <p>6. Quality Scoring</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-black">↓</div>

          {/* External Services */}
          <div className="bg-orange-500 neo-border-thin neo-brutal-shadow px-12 py-6 w-full">
            <p className="text-2xl font-bold text-white text-center mb-4">External Services</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-white">
              <p>• Gemini 1.5 Flash API</p>
              <p>• Gemini Vision (OCR)</p>
              <p>• Puppeteer (Chromium)</p>
              <p>• Zod Validation</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 text-center">
            <p className="font-bold text-black">React 19</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 text-center">
            <p className="font-bold text-black">TypeScript 5.6</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 text-center">
            <p className="font-bold text-black">Tailwind CSS</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 text-center">
            <p className="font-bold text-black">Node.js 18+</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
