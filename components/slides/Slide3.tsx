import Slide from "../Slide";

export default function Slide3() {
  return (
    <Slide>
      <div className="space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-900 border-b-4 border-blue-600 pb-4">
          Solution Overview & Objectives
        </h1>

        {/* Our Solution */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">KairosCV Platform</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-700">✓ Accepts resumes in any format (PDF, DOCX, TXT)</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-700">✓ Uses AI to extract and enhance content</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-700">✓ Generates ATS-optimized PDFs in seconds</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-700">✓ Provides real-time progress updates</p>
            </div>
          </div>
        </div>

        {/* Key Innovation */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
          <h3 className="text-xl font-bold text-yellow-900 mb-2">Key Innovation: Dual AI Approach</h3>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-blue-900">Google Gemini 1.5 Flash</p>
              <p className="text-sm text-gray-600">Content extraction and enhancement</p>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-purple-900">Gemini Vision</p>
              <p className="text-sm text-gray-600">OCR and cross-verification</p>
            </div>
          </div>
        </div>

        {/* Objectives - Two Columns */}
        <div className="grid grid-cols-2 gap-6">
          {/* Primary Objectives */}
          <div className="bg-green-50 border-2 border-green-300 p-5 rounded-lg">
            <h3 className="text-xl font-bold text-green-900 mb-3">Primary Objectives (Achieved)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span><strong>Accurate Parsing:</strong> 80%+ accuracy achieved (85-95%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span><strong>AI Enhancement:</strong> Action verbs and metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span><strong>ATS Optimization:</strong> 98%+ compatibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span><strong>Fast Processing:</strong> Under 60 seconds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span><strong>Zero Data Loss:</strong> All info preserved</span>
              </li>
            </ul>
          </div>

          {/* Secondary Objectives */}
          <div className="bg-blue-50 border-2 border-blue-300 p-5 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Secondary Objectives (Achieved)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✅</span>
                <span><strong>Real-time Feedback:</strong> SSE implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✅</span>
                <span><strong>Edge Case Handling:</strong> 90+ cases handled</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✅</span>
                <span><strong>Production Deploy:</strong> Live on Render.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✅</span>
                <span><strong>Quality Assurance:</strong> 90+ tests, 85% coverage</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-purple-100 border-2 border-purple-400 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-purple-900 mb-3">Success Metrics</h3>
          <div className="grid grid-cols-5 gap-3">
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Parsing Accuracy</p>
              <p className="text-2xl font-bold text-green-600">85-95%</p>
              <p className="text-xs text-gray-500">Target: 80%</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Processing Time</p>
              <p className="text-2xl font-bold text-green-600">30-45s</p>
              <p className="text-xs text-gray-500">Target: &lt;60s</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Data Quality</p>
              <p className="text-2xl font-bold text-green-600">90%</p>
              <p className="text-xs text-gray-500">Target: 85%</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Test Coverage</p>
              <p className="text-2xl font-bold text-green-600">85%+</p>
              <p className="text-xs text-gray-500">Target: 80%</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <p className="text-xs text-gray-600 mb-1">Uptime</p>
              <p className="text-2xl font-bold text-green-600">99.9%</p>
              <p className="text-xs text-gray-500">Render.com</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
