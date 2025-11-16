import Slide from "../Slide";

export default function Slide4() {
  return (
    <Slide>
      <div className="space-y-5">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-900 border-b-4 border-blue-600 pb-3">
          System Architecture
        </h1>

        {/* Architecture Diagram */}
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-4">High-Level Architecture</h2>
          <div className="flex flex-col items-center space-y-4">
            {/* User Layer */}
            <div className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg text-center">
              <p className="font-bold">User (Browser)</p>
              <p className="text-sm">Upload Resume (PDF/DOCX/TXT)</p>
            </div>
            <div className="text-2xl text-gray-400">↓</div>

            {/* Frontend + API Layer */}
            <div className="bg-purple-500 text-white px-8 py-4 rounded-lg shadow-lg w-full text-center">
              <p className="font-bold">Next.js 16 Frontend + API</p>
              <p className="text-sm">React 19 + TypeScript + Tailwind CSS</p>
            </div>
            <div className="text-2xl text-gray-400">↓</div>

            {/* Processing Pipeline */}
            <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg w-full">
              <p className="font-bold text-center mb-3">Resume Processing Pipeline</p>
              <div className="text-sm space-y-1">
                <p>1. File Upload & Validation</p>
                <p>2. Multi-Strategy Extraction</p>
                <p>3. AI Enhancement (Gemini)</p>
                <p>4. Edge Case Handling (90+ cases)</p>
                <p>5. HTML Template Population</p>
                <p>6. PDF Generation (Puppeteer)</p>
              </div>
            </div>
            <div className="text-2xl text-gray-400">↓</div>

            {/* External Services */}
            <div className="bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg w-full">
              <p className="font-bold text-center mb-2">External Services & Storage</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p>• Google Gemini 1.5 Flash API</p>
                <p>• Gemini Vision (OCR)</p>
                <p>• Chromium (Puppeteer)</p>
                <p>• File System (ephemeral)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">Frontend</h3>
            <ul className="text-xs space-y-1">
              <li>• Next.js 16 (App Router)</li>
              <li>• React 19</li>
              <li>• Tailwind CSS + Radix UI</li>
              <li>• TypeScript 5.6</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
            <h3 className="font-bold text-green-900 mb-2">Backend</h3>
            <ul className="text-xs space-y-1">
              <li>• Node.js 18+</li>
              <li>• pnpm 9.12</li>
              <li>• Next.js API Routes</li>
              <li>• Server-Sent Events (SSE)</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
            <h3 className="font-bold text-purple-900 mb-2">AI/ML & Processing</h3>
            <ul className="text-xs space-y-1">
              <li>• Gemini 1.5 Flash</li>
              <li>• Gemini Vision (OCR)</li>
              <li>• Puppeteer (PDF gen)</li>
              <li>• Zod (validation)</li>
            </ul>
          </div>
        </div>

        {/* Key Design Decisions */}
        <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-900 mb-2">Key Design Decisions</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <p className="font-semibold text-gray-800">Why Next.js?</p>
              <p className="text-gray-700">Full-stack framework, SSR, built-in optimization</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Why Gemini over GPT?</p>
              <p className="text-gray-700">Free tier: 60 req/min, Vision API included</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Why Puppeteer?</p>
              <p className="text-gray-700">Pixel-perfect HTML-to-PDF conversion</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Why SSE over WebSockets?</p>
              <p className="text-gray-700">Simpler, better serverless compatibility</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
