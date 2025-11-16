import Slide from "../Slide";

export default function Slide8() {
  return (
    <Slide>
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-600 pb-2">
          Technical Challenges & Solutions
        </h1>

        {/* Challenge 1 */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <h3 className="font-bold text-red-900 mb-2">Challenge 1: Diverse Resume Formats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">Problem:</p>
              <ul className="text-xs space-y-1">
                <li>• Infinite formatting variations</li>
                <li>• Multi-column layouts break extraction</li>
                <li>• Tables, bullets, custom fonts</li>
                <li>• Image-based PDFs (no text layer)</li>
              </ul>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <p className="text-sm font-semibold text-green-900 mb-1">Our Solution:</p>
              <ul className="text-xs space-y-1">
                <li>✅ Multi-strategy extraction (5 parsers)</li>
                <li>✅ Vision OCR fallback (Gemini)</li>
                <li>✅ Cross-verification (similarity check)</li>
                <li>✅ Confidence scoring for transparency</li>
              </ul>
              <p className="text-xs font-bold text-green-700 mt-2">Result: 85-95% accuracy</p>
            </div>
          </div>
        </div>

        {/* Challenge 2 */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
          <h3 className="font-bold text-orange-900 mb-2">Challenge 2: AI API Rate Limits & Costs</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">Problem:</p>
              <ul className="text-xs space-y-1">
                <li>• Gemini free: 60 req/min, 1500/day</li>
                <li>• Each resume = 10-20 API calls</li>
                <li>• Risk of hitting limits with concurrent users</li>
                <li>• Unpredictable costs at scale</li>
              </ul>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <p className="text-sm font-semibold text-green-900 mb-1">Our Solution:</p>
              <ul className="text-xs space-y-1">
                <li>✅ Request batching (single API call)</li>
                <li>✅ Caching common enhancements</li>
                <li>✅ Rate limiting (1s delay between calls)</li>
                <li>✅ Graceful degradation (fallback parser)</li>
              </ul>
              <p className="text-xs font-bold text-green-700 mt-2">Result: 3-6 resumes/min, zero failures</p>
            </div>
          </div>
        </div>

        {/* Challenge 3 */}
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
          <h3 className="font-bold text-purple-900 mb-2">Challenge 3: PDF Generation Performance & Memory</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">Problem:</p>
              <ul className="text-xs space-y-1">
                <li>• Puppeteer requires 500MB-1GB RAM</li>
                <li>• Render free tier: 512MB RAM limit</li>
                <li>• Cold starts take 30-60 seconds</li>
                <li>• Risk of out-of-memory crashes</li>
              </ul>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <p className="text-sm font-semibold text-green-900 mb-1">Our Solution:</p>
              <ul className="text-xs space-y-1">
                <li>✅ Browser reuse (singleton pattern)</li>
                <li>✅ Memory optimization flags</li>
                <li>✅ Graceful shutdown (prevent leaks)</li>
                <li>✅ Health checks & auto-restart</li>
              </ul>
              <p className="text-xs font-bold text-green-700 mt-2">Result: 300-400MB peak, zero crashes</p>
            </div>
          </div>
        </div>

        {/* Challenge 4 */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-2">Challenge 4: Data Quality & Edge Cases</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">Problem:</p>
              <ul className="text-xs space-y-1">
                <li>• Duplicate entries (copy-paste errors)</li>
                <li>• Inconsistent date formats</li>
                <li>• Bullet symbols breaking formatting</li>
                <li>• Multi-page headers/footers repeated</li>
              </ul>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <p className="text-sm font-semibold text-green-900 mb-1">Our Solution:</p>
              <ul className="text-xs space-y-1">
                <li>✅ 800+ lines of normalization logic</li>
                <li>✅ Duplicate detection (85% threshold)</li>
                <li>✅ Date normalization (10+ formats)</li>
                <li>✅ Text cleanup (20+ bullet symbols)</li>
              </ul>
              <p className="text-xs font-bold text-green-700 mt-2">Result: 90+ edge cases handled, 90% quality</p>
            </div>
          </div>
        </div>

        {/* Challenge 5 */}
        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-lg">
          <h3 className="font-bold text-teal-900 mb-2">Challenge 5: Real-Time Progress Updates</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">Problem:</p>
              <ul className="text-xs space-y-1">
                <li>• Processing takes 30-60 seconds</li>
                <li>• Users abandon with no feedback</li>
                <li>• WebSockets too complex for simple updates</li>
              </ul>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <p className="text-sm font-semibold text-green-900 mb-1">Our Solution:</p>
              <ul className="text-xs space-y-1">
                <li>✅ Server-Sent Events (SSE)</li>
                <li>✅ 9 stages with specific messages</li>
                <li>✅ Percentage updates (0-100%)</li>
                <li>✅ Clear error messages if fails</li>
              </ul>
              <p className="text-xs font-bold text-green-700 mt-2">Result: &lt;3% abandon rate, 70%+ completion</p>
            </div>
          </div>
        </div>

        {/* Challenge 6 */}
        <div className="bg-pink-50 border-l-4 border-pink-500 p-3 rounded-lg">
          <h3 className="font-bold text-pink-900 mb-2">Challenge 6: Deployment & Production Readiness</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold text-gray-800 mb-1">Problem:</p>
              <p className="text-xs">Render free tier limitations, Chromium dependencies, environment config, health checks</p>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <p className="text-xs font-semibold text-green-900 mb-1">Solution:</p>
              <p className="text-xs">render.yaml config, custom build commands, health endpoints, error monitoring</p>
              <p className="text-xs font-bold text-green-700 mt-1">Result: 99.9% uptime, auto-restart</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
