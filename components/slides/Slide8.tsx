import Slide from "../Slide";

export default function Slide8() {
  return (
    <Slide>
      <div className="p-0 space-y-4 md:space-y-6">
        {/* Title */}
        <div className="inline-block bg-black px-4 py-3 md:px-8 md:py-4 neo-brutal-shadow">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Debugging
          </h1>
        </div>

        {/* Challenges */}
        <div className="space-y-6 max-w-6xl">
          {/* Challenge 1 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">Parsing Failures</p>
              <p className="text-sm text-gray-700">Multi-column layouts, tables, custom fonts, image-based PDFs</p>
            </div>
            <div className="text-xl md:text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-white">5-Strategy Extraction + Vision OCR</p>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">API Limit Errors</p>
              <p className="text-sm text-gray-700">Gemini: 60 req/min, 1500/day • Each resume = 10-20 calls</p>
            </div>
            <div className="text-xl md:text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-white">Request Batching + Caching</p>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">Out-of-Memory Crashes</p>
              <p className="text-sm text-gray-700">Puppeteer needs 500MB-1GB • Render free tier: 512MB limit</p>
            </div>
            <div className="text-xl md:text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-white">Browser Reuse + Memory Optimization</p>
            </div>
          </div>

          {/* Challenge 4 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">Data Quality Bugs</p>
              <p className="text-sm text-gray-700">Duplicates, inconsistent dates, bullet symbols, malformed data</p>
            </div>
            <div className="text-xl md:text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-white">90+ Edge Cases Handler</p>
            </div>
          </div>

          {/* Challenge 5 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">Progress Feedback Gaps</p>
              <p className="text-sm text-gray-700">30-60s processing time • Users abandon without feedback</p>
            </div>
            <div className="text-xl md:text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-white">Server-Sent Events (SSE)</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
