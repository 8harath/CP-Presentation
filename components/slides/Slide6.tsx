import Slide from "../Slide";

export default function Slide6() {
  return (
    <Slide>
      <div className="space-y-5">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-600 pb-2">
          Implementation Highlights & Code Quality
        </h1>

        {/* Key Features */}
        <div className="grid grid-cols-2 gap-4">
          {/* Feature 1 */}
          <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">1. Multi-Strategy PDF Extraction</h3>
            <p className="text-xs text-gray-700 mb-2"><strong>File:</strong> lib/parsers/pdf-parser-enhanced.ts</p>
            <ul className="text-xs space-y-1">
              <li>• 5 extraction methods (pdfjs, pdf-parse, etc.)</li>
              <li>• Adaptive selection - picks best result</li>
              <li>• Confidence scoring (0-100%)</li>
              <li>• 400+ lines with error handling</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
            <h3 className="font-bold text-green-900 mb-2">2. Gemini Vision Integration</h3>
            <p className="text-xs text-gray-700 mb-2"><strong>File:</strong> lib/parsers/vision-extractor.ts</p>
            <ul className="text-xs space-y-1">
              <li>• OCR for scanned/image-based PDFs</li>
              <li>• Cross-verification with text extraction</li>
              <li>• Smart selection based on confidence</li>
              <li>• Graceful fallback if unavailable</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-purple-50 border-2 border-purple-300 p-4 rounded-lg">
            <h3 className="font-bold text-purple-900 mb-2">3. Edge Case Handler</h3>
            <p className="text-xs text-gray-700 mb-2"><strong>File:</strong> lib/parsers/edge-case-handler.ts</p>
            <ul className="text-xs space-y-1">
              <li>• 90+ edge cases handled</li>
              <li>• Duplicate detection (85% threshold)</li>
              <li>• Date normalization (10+ formats)</li>
              <li>• 800+ lines of normalization logic</li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-orange-50 border-2 border-orange-300 p-4 rounded-lg">
            <h3 className="font-bold text-orange-900 mb-2">4. Template Rendering</h3>
            <p className="text-xs text-gray-700 mb-2"><strong>File:</strong> lib/templates/template-renderer.ts</p>
            <ul className="text-xs space-y-1">
              <li>• Handlebars-based templates</li>
              <li>• Type-safe with null safety</li>
              <li>• XSS protection (HTML escaping)</li>
              <li>• 13+ sections supported</li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="bg-pink-50 border-2 border-pink-300 p-4 rounded-lg">
            <h3 className="font-bold text-pink-900 mb-2">5. Confidence Scoring System</h3>
            <p className="text-xs text-gray-700 mb-2"><strong>File:</strong> lib/validation/confidence-scorer.ts</p>
            <ul className="text-xs space-y-1">
              <li>• Weighted scoring algorithm</li>
              <li>• Contact Info: 30%</li>
              <li>• Experience: 25%, Education: 20%</li>
              <li>• Skills: 15%, Overall: 10%</li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="bg-teal-50 border-2 border-teal-300 p-4 rounded-lg">
            <h3 className="font-bold text-teal-900 mb-2">6. Production Error Handling</h3>
            <ul className="text-xs space-y-1 mt-2">
              <li>• Graceful degradation (AI fails → original)</li>
              <li>• Retry logic with exponential backoff</li>
              <li>• User-friendly error messages</li>
              <li>• Comprehensive logging</li>
            </ul>
          </div>
        </div>

        {/* Code Quality Metrics */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-400 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Code Quality Metrics</h3>
          <div className="grid grid-cols-6 gap-3">
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Test Coverage</p>
              <p className="text-2xl font-bold text-green-600">85%+</p>
              <p className="text-xs text-green-700">✅ Excellent</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Test Cases</p>
              <p className="text-2xl font-bold text-green-600">90+</p>
              <p className="text-xs text-green-700">✅ Comprehensive</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Type Safety</p>
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="text-xs text-blue-700">✅ TypeScript</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Edge Cases</p>
              <p className="text-2xl font-bold text-purple-600">90+</p>
              <p className="text-xs text-purple-700">✅ Production</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Documentation</p>
              <p className="text-2xl font-bold text-orange-600">✓</p>
              <p className="text-xs text-orange-700">✅ Inline</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Lines of Code</p>
              <p className="text-2xl font-bold text-teal-600">5K+</p>
              <p className="text-xs text-teal-700">✅ Substantial</p>
            </div>
          </div>
        </div>

        {/* Testing Strategy */}
        <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-900 mb-2">Testing Strategy</h3>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Unit Tests (42 tests)</p>
              <p className="text-gray-700">Edge case handler, template renderer, enhanced parser</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Integration Tests</p>
              <p className="text-gray-700">Full pipeline, AI quality validation, error recovery</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Test Files</p>
              <p className="text-gray-700">600+ lines edge case tests, 500+ template tests, 385 parser tests</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
