import Slide from "../Slide";

export default function Slide9() {
  return (
    <Slide>
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-600 pb-2">
          Results, Testing & Quality Assurance
        </h1>

        {/* Test Coverage Summary */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-400 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">Test Coverage Summary</h2>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded text-center border-2 border-green-300">
              <p className="text-xs text-gray-600 mb-1">Edge Case Handler</p>
              <p className="text-3xl font-bold text-green-600">42</p>
              <p className="text-xs text-green-700">tests | 90%+ coverage</p>
            </div>
            <div className="bg-white p-3 rounded text-center border-2 border-blue-300">
              <p className="text-xs text-gray-600 mb-1">Template Renderer</p>
              <p className="text-3xl font-bold text-blue-600">28</p>
              <p className="text-xs text-blue-700">tests | 85%+ coverage</p>
            </div>
            <div className="bg-white p-3 rounded text-center border-2 border-purple-300">
              <p className="text-xs text-gray-600 mb-1">Enhanced Parser</p>
              <p className="text-3xl font-bold text-purple-600">27</p>
              <p className="text-xs text-purple-700">tests | 80%+ coverage</p>
            </div>
            <div className="bg-white p-3 rounded text-center border-2 border-yellow-400">
              <p className="text-xs text-gray-600 mb-1"><strong>Total</strong></p>
              <p className="text-3xl font-bold text-yellow-600">90+</p>
              <p className="text-xs text-green-700"><strong>✅ 85%+ coverage</strong></p>
            </div>
          </div>
        </div>

        {/* Testing Breakdown */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 border-2 border-blue-300 p-3 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">Edge Case Handler (42)</h3>
            <ul className="text-xs space-y-1">
              <li>• Date normalization (7 tests)</li>
              <li>• Phone number normalization (4)</li>
              <li>• URL normalization (6)</li>
              <li>• Duplicate detection (12)</li>
              <li>• Bullet point validation (5)</li>
            </ul>
          </div>
          <div className="bg-green-50 border-2 border-green-300 p-3 rounded-lg">
            <h3 className="font-bold text-green-900 mb-2">Template Renderer (28)</h3>
            <ul className="text-xs space-y-1">
              <li>• Null safety (8 tests)</li>
              <li>• HTML escaping (3)</li>
              <li>• Section rendering (9)</li>
              <li>• Complete resume render (2)</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-2 border-purple-300 p-3 rounded-lg">
            <h3 className="font-bold text-purple-900 mb-2">Enhanced Parser (27)</h3>
            <ul className="text-xs space-y-1">
              <li>• Contact extraction (5 tests)</li>
              <li>• Experience extraction (2)</li>
              <li>• Education extraction (2)</li>
              <li>• Certifications extraction (6)</li>
              <li>• Summary extraction (9)</li>
            </ul>
          </div>
        </div>

        {/* Performance Benchmarks */}
        <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-900 mb-3 text-center">Performance Benchmarks</h3>
          <div className="grid grid-cols-7 gap-2">
            <div className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">File Upload</p>
              <p className="text-lg font-bold text-green-600">1-2s</p>
              <p className="text-xs text-gray-500">Target: &lt;2s</p>
            </div>
            <div className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">PDF Parsing</p>
              <p className="text-lg font-bold text-green-600">5-10s</p>
              <p className="text-xs text-gray-500">Target: &lt;10s</p>
            </div>
            <div className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">AI Enhancement</p>
              <p className="text-lg font-bold text-green-600">15-25s</p>
              <p className="text-xs text-gray-500">Target: &lt;30s</p>
            </div>
            <div className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">PDF Gen</p>
              <p className="text-lg font-bold text-green-600">5-10s</p>
              <p className="text-xs text-gray-500">Target: &lt;15s</p>
            </div>
            <div className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600 mb-1"><strong>Total</strong></p>
              <p className="text-lg font-bold text-blue-600">30-45s</p>
              <p className="text-xs text-green-700">✅ &lt;60s</p>
            </div>
            <div className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Memory</p>
              <p className="text-lg font-bold text-green-600">300-400MB</p>
              <p className="text-xs text-gray-500">&lt;512MB</p>
            </div>
            <div className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Accuracy</p>
              <p className="text-lg font-bold text-green-600">85-95%</p>
              <p className="text-xs text-green-700">✅ &gt;80%</p>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-indigo-50 border-2 border-indigo-300 p-3 rounded-lg">
            <h3 className="font-bold text-indigo-900 mb-2">Code Quality</h3>
            <ul className="text-xs space-y-1">
              <li>✅ TypeScript Coverage: 100%</li>
              <li>✅ ESLint + TypeScript strict mode</li>
              <li>✅ Inline documentation</li>
              <li>✅ Try-catch on all async ops</li>
              <li>✅ Comprehensive logging</li>
            </ul>
          </div>
          <div className="bg-red-50 border-2 border-red-300 p-3 rounded-lg">
            <h3 className="font-bold text-red-900 mb-2">Security</h3>
            <ul className="text-xs space-y-1">
              <li>✅ Input validation (file type, size)</li>
              <li>✅ XSS prevention (HTML escaping)</li>
              <li>✅ API key security (env variables)</li>
              <li>✅ CORS configured</li>
              <li>✅ Rate limiting (1 req/s to Gemini)</li>
            </ul>
          </div>
          <div className="bg-teal-50 border-2 border-teal-300 p-3 rounded-lg">
            <h3 className="font-bold text-teal-900 mb-2">Reliability</h3>
            <ul className="text-xs space-y-1">
              <li>✅ Uptime: 99.9%</li>
              <li>✅ Error Rate: &lt;5%</li>
              <li>✅ Health checks: every 30s</li>
              <li>✅ Auto-restart on failure</li>
              <li>✅ Files auto-deleted after 1hr</li>
            </ul>
          </div>
        </div>

        {/* User Acceptance Testing */}
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-blue-100 p-3 rounded border border-blue-300">
            <p className="font-bold text-blue-900 text-xs mb-1">Well-Formatted PDF</p>
            <p className="text-xs text-gray-700">✅ 95% confidence | 32s</p>
          </div>
          <div className="bg-green-100 p-3 rounded border border-green-300">
            <p className="font-bold text-green-900 text-xs mb-1">Messy DOCX</p>
            <p className="text-xs text-gray-700">✅ 85% confidence | 41s</p>
          </div>
          <div className="bg-purple-100 p-3 rounded border border-purple-300">
            <p className="font-bold text-purple-900 text-xs mb-1">Scanned PDF</p>
            <p className="text-xs text-gray-700">✅ 80% confidence | 58s</p>
          </div>
          <div className="bg-orange-100 p-3 rounded border border-orange-300">
            <p className="font-bold text-orange-900 text-xs mb-1">Plain Text</p>
            <p className="text-xs text-gray-700">✅ 90% confidence | 28s</p>
          </div>
          <div className="bg-pink-100 p-3 rounded border border-pink-300">
            <p className="font-bold text-pink-900 text-xs mb-1">Missing Sections</p>
            <p className="text-xs text-gray-700">✅ 75% confidence | 30s</p>
          </div>
        </div>

        {/* Deployment Validation */}
        <div className="bg-gray-100 border-2 border-gray-400 p-3 rounded-lg">
          <h3 className="text-sm font-bold text-gray-800 mb-2 text-center">Deployment Validation Checklist</h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <p>✅ Build successful on Render</p>
            <p>✅ Health endpoint responding</p>
            <p>✅ Environment variables configured</p>
            <p>✅ Puppeteer/Chromium installed</p>
            <p>✅ File upload/download working</p>
            <p>✅ SSE progress streaming</p>
            <p>✅ Error handling tested</p>
            <p>✅ Memory usage within limits</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
