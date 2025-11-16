import Slide from "../Slide";

export default function Slide5() {
  return (
    <Slide>
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-600 pb-2">
          Data Flow & Processing Pipeline
        </h1>

        {/* Processing Steps */}
        <div className="space-y-3">
          {/* Step 1 */}
          <div className="bg-blue-100 border-l-4 border-blue-600 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-blue-900">STEP 1: File Upload & Validation</p>
                <p className="text-xs text-gray-700">Accept PDF, DOCX, TXT (max 5MB) • Security check • Generate unique file ID</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-blue-700">2s</p>
                <p className="text-xs text-gray-600">Progress: 10%</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-green-100 border-l-4 border-green-600 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-green-900">STEP 2: Multi-Strategy Extraction</p>
                <p className="text-xs text-gray-700">Try 5 methods (pdfjs, pdf-parse, etc.) • Select best extraction • Gemini Vision OCR</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-green-700">5-10s</p>
                <p className="text-xs text-gray-600">Progress: 30%</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-purple-100 border-l-4 border-purple-600 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-purple-900">STEP 3: AI Extraction (Gemini)</p>
                <p className="text-xs text-gray-700">Extract structured JSON • Identify sections • Fallback regex parser • Validate schema</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-purple-700">10-15s</p>
                <p className="text-xs text-gray-600">Progress: 50%</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-orange-100 border-l-4 border-orange-600 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-orange-900">STEP 4: AI Enhancement (Gemini)</p>
                <p className="text-xs text-gray-700">Enhance bullets (action verbs + metrics) • Generate summary • Categorize skills • ATS keywords</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-orange-700">15-20s</p>
                <p className="text-xs text-gray-600">Progress: 70%</p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-red-100 border-l-4 border-red-600 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-red-900">STEP 5: Edge Case Handling</p>
                <p className="text-xs text-gray-700">Remove duplicates (85% threshold) • Normalize dates • Clean bullet symbols • Validate contacts</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-red-700">0.1s</p>
                <p className="text-xs text-gray-600">Progress: 75%</p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-pink-100 border-l-4 border-pink-600 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-pink-900">STEP 6: Confidence Scoring</p>
                <p className="text-xs text-gray-700">Score sections: Contact (30%), Experience (25%), Education (20%), Skills (15%), Overall (10%)</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-pink-700">0.1s</p>
                <p className="text-xs text-gray-600">Progress: 80%</p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-indigo-100 border-l-4 border-indigo-600 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-indigo-900">STEP 7: HTML Template Population</p>
                <p className="text-xs text-gray-700">Use Jake's Resume template • Populate enhanced data • Apply CSS styling • Proper spacing</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-indigo-700">1s</p>
                <p className="text-xs text-gray-600">Progress: 90%</p>
              </div>
            </div>
          </div>

          {/* Step 8 */}
          <div className="bg-teal-100 border-l-4 border-teal-600 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-teal-900">STEP 8: PDF Generation (Puppeteer)</p>
                <p className="text-xs text-gray-700">Launch headless Chromium • Render HTML to PDF • Optimize file size • Save to uploads/</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-teal-700">5-10s</p>
                <p className="text-xs text-gray-600">Progress: 100%</p>
              </div>
            </div>
          </div>

          {/* Step 9 */}
          <div className="bg-green-200 border-l-4 border-green-800 p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-green-900">✓ STEP 9: Download Link Ready</p>
                <p className="text-xs text-gray-700">Return download URL • File available immediately • Auto-cleanup after 1 hour</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-green-900">Complete!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Handling */}
        <div className="bg-gray-100 border-2 border-gray-300 p-3 rounded-lg">
          <h3 className="text-sm font-bold text-gray-800 mb-2">Error Handling & Fallbacks</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <p>• Parsing Fails → Regex fallback parser</p>
            <p>• AI Fails → Return original content</p>
            <p>• PDF Gen Fails → Error with retry option</p>
            <p>• Vision Fails → Text-only extraction</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
