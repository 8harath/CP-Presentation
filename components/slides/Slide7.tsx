import Slide from "../Slide";

export default function Slide7() {
  return (
    <Slide>
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-600 pb-2">
          Prototype Demonstration
        </h1>

        {/* Demo Flow */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">Step 1: Upload Resume</h3>
            <ul className="text-xs space-y-1">
              <li>• Drag-and-drop upload zone</li>
              <li>• PDF/DOCX/TXT accepted</li>
              <li>• File size validation (max 5MB)</li>
              <li>• Instant feedback on success</li>
            </ul>
          </div>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
            <h3 className="font-bold text-green-900 mb-2">Step 2: Real-Time Processing</h3>
            <ul className="text-xs space-y-1">
              <li>• Animated progress bar (0-100%)</li>
              <li>• Stage-specific messages</li>
              <li>• Estimated time remaining</li>
              <li>• Confidence score displayed</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-2 border-purple-300 p-4 rounded-lg">
            <h3 className="font-bold text-purple-900 mb-2">Step 3: Download PDF</h3>
            <ul className="text-xs space-y-1">
              <li>• Clean, professional format</li>
              <li>• All content preserved</li>
              <li>• Enhanced bullet points</li>
              <li>• Properly formatted dates</li>
            </ul>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-2 gap-4">
          {/* Before */}
          <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
            <h3 className="font-bold text-red-900 mb-3 text-center">Input Resume (Before)</h3>
            <div className="bg-white p-3 rounded text-xs font-mono space-y-2">
              <p className="font-bold">John Doe</p>
              <p>john@email.com</p>
              <p className="mt-2 font-bold">EXPERIENCE</p>
              <p>Google Inc</p>
              <p>Software Engineer, Jan 2020 - Present</p>
              <p>• Worked on team projects</p>
              <p>• Fixed bugs</p>
              <p>• Helped with features</p>
              <p className="mt-2 font-bold">EDUCATION</p>
              <p>MIT</p>
              <p>Bachelor's Degree Computer Science, 2016-2020</p>
            </div>
          </div>

          {/* After */}
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
            <h3 className="font-bold text-green-900 mb-3 text-center">Output Resume (After)</h3>
            <div className="bg-white p-3 rounded text-xs font-mono space-y-2">
              <p className="font-bold">JOHN DOE</p>
              <p>john@email.com | +1234567890 | linkedin.com/in/johndoe</p>
              <p className="mt-2 font-bold">PROFESSIONAL SUMMARY</p>
              <p className="text-xs">Results-driven Software Engineer with 5+ years building scalable web apps...</p>
              <p className="mt-2 font-bold">EXPERIENCE</p>
              <p className="font-semibold">Software Engineer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jan 2020 - Present</p>
              <p>Google Inc</p>
              <p>• Architected microservices handling 10M+ daily requests, improving reliability by 35%</p>
              <p>• Resolved 150+ bugs, reducing incidents by 40% for 2M+ users</p>
              <p className="mt-2 font-bold">EDUCATION</p>
              <p className="font-semibold">Massachusetts Institute of Technology &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aug 2016 - May 2020</p>
              <p>Bachelor of Science in Computer Science | GPA: 3.8/4.0</p>
            </div>
          </div>
        </div>

        {/* Key Improvements */}
        <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-900 mb-2">Key Improvements Shown</h3>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <p>✅ <strong>Bullet Enhancement:</strong> "Worked on" → "Architected microservices handling 10M+ requests"</p>
            <p>✅ <strong>Professional Summary:</strong> Auto-generated based on experience</p>
            <p>✅ <strong>Date Formatting:</strong> Consistent "Mon YYYY" format</p>
            <p>✅ <strong>Contact Info:</strong> Properly formatted and normalized</p>
            <p>✅ <strong>Action Verbs:</strong> "Worked" → "Architected", "Developed", "Led"</p>
            <p>✅ <strong>Metrics Added:</strong> 35%, 40%, 25% improvements quantified</p>
          </div>
        </div>

        {/* Demo Scenarios */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-blue-100 p-3 rounded border border-blue-300">
            <p className="font-bold text-blue-900 text-sm mb-1">Scenario 1: Well-Formatted PDF</p>
            <p className="text-xs text-gray-700">Time: 30-35s | Confidence: 95%</p>
          </div>
          <div className="bg-green-100 p-3 rounded border border-green-300">
            <p className="font-bold text-green-900 text-sm mb-1">Scenario 2: Messy DOCX</p>
            <p className="text-xs text-gray-700">Time: 40-45s | Confidence: 85%</p>
          </div>
          <div className="bg-purple-100 p-3 rounded border border-purple-300">
            <p className="font-bold text-purple-900 text-sm mb-1">Scenario 3: Scanned PDF</p>
            <p className="text-xs text-gray-700">Time: 50-60s | Confidence: 80%</p>
          </div>
        </div>

        {/* Deployment Info */}
        <div className="bg-gray-100 border-2 border-gray-300 p-3 rounded-lg">
          <div className="grid grid-cols-4 gap-3 text-xs text-center">
            <div>
              <p className="font-semibold text-gray-800">Live URL</p>
              <p className="text-blue-600">kairoscv.onrender.com</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Hosting</p>
              <p className="text-gray-700">Render.com (free tier)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Uptime</p>
              <p className="text-green-600">99.9%</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Response Time</p>
              <p className="text-gray-700">30-45s (warm)</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
