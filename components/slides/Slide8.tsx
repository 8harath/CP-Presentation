import Slide from "../Slide";

export default function Slide8() {
  return (
    <Slide>
      <div className="p-16 space-y-10">
        {/* Title */}
        <div className="inline-block bg-black px-8 py-4 neo-brutal-shadow">
          <h1 className="text-5xl font-bold text-white">
            Challenges & Solutions
          </h1>
        </div>

        {/* Challenges */}
        <div className="space-y-6 max-w-6xl">
          {/* Challenge 1 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-6 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6">
              <p className="text-xl font-bold text-black mb-2">Diverse Resume Formats</p>
              <p className="text-sm text-gray-700">Multi-column layouts, tables, custom fonts, image-based PDFs</p>
            </div>
            <div className="text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-6">
              <p className="text-lg font-bold text-white">5-Strategy Extraction + Vision OCR</p>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-6 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6">
              <p className="text-xl font-bold text-black mb-2">AI API Rate Limits</p>
              <p className="text-sm text-gray-700">Gemini: 60 req/min, 1500/day • Each resume = 10-20 calls</p>
            </div>
            <div className="text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-6">
              <p className="text-lg font-bold text-white">Request Batching + Caching</p>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-6 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6">
              <p className="text-xl font-bold text-black mb-2">Memory Constraints</p>
              <p className="text-sm text-gray-700">Puppeteer needs 500MB-1GB • Render free tier: 512MB limit</p>
            </div>
            <div className="text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-6">
              <p className="text-lg font-bold text-white">Browser Reuse + Memory Optimization</p>
            </div>
          </div>

          {/* Challenge 4 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-6 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6">
              <p className="text-xl font-bold text-black mb-2">Data Quality Issues</p>
              <p className="text-sm text-gray-700">Duplicates, inconsistent dates, bullet symbols, malformed data</p>
            </div>
            <div className="text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-6">
              <p className="text-lg font-bold text-white">90+ Edge Cases Handler</p>
            </div>
          </div>

          {/* Challenge 5 */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-6 items-center">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6">
              <p className="text-xl font-bold text-black mb-2">User Experience</p>
              <p className="text-sm text-gray-700">30-60s processing time • Users abandon without feedback</p>
            </div>
            <div className="text-3xl font-bold text-black">→</div>
            <div className="bg-black neo-brutal-shadow-sm p-6">
              <p className="text-lg font-bold text-white">Server-Sent Events (SSE)</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
