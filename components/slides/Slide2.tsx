import Slide from "../Slide";

export default function Slide2() {
  return (
    <Slide>
      <div className="space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-900 border-b-4 border-blue-600 pb-4">
          Problem Definition & Market Need
        </h1>

        {/* Problem Statement */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-900 mb-4">The Resume Black Hole Problem</h2>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span><strong>75% of resumes</strong> are rejected by Applicant Tracking Systems (ATS) before human review</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span>Job seekers spend <strong>hours formatting resumes manually</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span>Inconsistent resume quality reduces interview callbacks</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">•</span>
              <span>No easy way to convert different resume formats into ATS-friendly versions</span>
            </li>
          </ul>
        </div>

        {/* Target Users */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">1. Job Seekers</h3>
            <p className="text-sm text-gray-700">Need ATS-optimized resumes quickly</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">2. Students & Graduates</h3>
            <p className="text-sm text-gray-700">Lack professional resume writing experience</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">3. Career Changers</h3>
            <p className="text-sm text-gray-700">Need to reformat existing resumes</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">4. Professionals</h3>
            <p className="text-sm text-gray-700">Want to update resumes efficiently</p>
          </div>
        </div>

        {/* Market Validation */}
        <div className="bg-green-50 border-2 border-green-300 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-green-900 mb-3">Market Validation</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800">Global Market Size:</p>
              <p className="text-2xl font-bold text-green-700">$2.3 Billion</p>
              <p className="text-xs text-gray-600">(2024)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Annual Applications:</p>
              <p className="text-2xl font-bold text-green-700">300M+</p>
              <p className="text-xs text-gray-600">(India alone)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Time Spent Formatting:</p>
              <p className="text-2xl font-bold text-green-700">4-6 hours</p>
              <p className="text-xs text-gray-600">(average)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Willingness to Pay:</p>
              <p className="text-2xl font-bold text-green-700">$5-$30</p>
              <p className="text-xs text-gray-600">(per resume)</p>
            </div>
          </div>
        </div>

        {/* Refinements from CA1 */}
        <div className="bg-purple-50 border-2 border-purple-300 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-purple-900 mb-3">Refinements from CA1 Review</h3>
          <div className="space-y-2 text-sm text-gray-800">
            <p><strong>Original Scope:</strong> Multiple templates + job matching</p>
            <p><strong>Refined MVP Scope:</strong> Single proven template (Jake's Resume) + AI enhancement</p>
            <p><strong>Reason:</strong> Focus on core value proposition first, iterate based on feedback</p>
            <p><strong>Added Feature:</strong> Real-time progress tracking with Server-Sent Events (SSE)</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
