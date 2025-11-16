import Slide from "../Slide";

export default function Slide10() {
  return (
    <Slide>
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-600 pb-2">
          Conclusions, Future Work & Next Steps
        </h1>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-400 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Project Achievements</h2>
          <div className="grid grid-cols-4 gap-3 text-xs">
            <p>✅ Full-Stack Web Application</p>
            <p>✅ AI-Powered Processing (Gemini)</p>
            <p>✅ Multi-Strategy PDF Extraction</p>
            <p>✅ 90+ Edge Cases Handled</p>
            <p>✅ Production Deployment (Render)</p>
            <p>✅ 90+ Tests, 85% Coverage</p>
            <p>✅ Real-Time Progress (SSE)</p>
            <p>✅ ATS-Optimized PDF Generation</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-green-100 p-3 rounded border-2 border-green-400 text-center">
            <p className="text-xs text-gray-600 mb-1">Parsing Accuracy</p>
            <p className="text-2xl font-bold text-green-700">85-95%</p>
            <p className="text-xs text-green-600">✅ Exceeded 80%</p>
          </div>
          <div className="bg-blue-100 p-3 rounded border-2 border-blue-400 text-center">
            <p className="text-xs text-gray-600 mb-1">Processing Time</p>
            <p className="text-2xl font-bold text-blue-700">30-45s</p>
            <p className="text-xs text-blue-600">✅ Exceeded &lt;60s</p>
          </div>
          <div className="bg-purple-100 p-3 rounded border-2 border-purple-400 text-center">
            <p className="text-xs text-gray-600 mb-1">Test Coverage</p>
            <p className="text-2xl font-bold text-purple-700">85%+</p>
            <p className="text-xs text-purple-600">✅ Exceeded 80%</p>
          </div>
          <div className="bg-orange-100 p-3 rounded border-2 border-orange-400 text-center">
            <p className="text-xs text-gray-600 mb-1">Data Quality</p>
            <p className="text-2xl font-bold text-orange-700">90%</p>
            <p className="text-xs text-orange-600">✅ Exceeded 85%</p>
          </div>
          <div className="bg-teal-100 p-3 rounded border-2 border-teal-400 text-center">
            <p className="text-xs text-gray-600 mb-1">Uptime</p>
            <p className="text-2xl font-bold text-teal-700">99.9%</p>
            <p className="text-xs text-teal-600">✅ Exceeded 99%</p>
          </div>
        </div>

        {/* Future Enhancements Roadmap */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-blue-50 border-2 border-blue-300 p-3 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">Phase 1: User Experience (1-2 mo)</h3>
              <ul className="text-xs space-y-1">
                <li>• Multiple Templates (Modern, Creative, Academic)</li>
                <li>• Manual Edit Mode</li>
                <li>• Side-by-Side Comparison</li>
                <li>• Preview Mode</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-300 p-3 rounded-lg">
              <h3 className="font-bold text-green-900 mb-2">Phase 2: User Accounts (3-4 mo)</h3>
              <ul className="text-xs space-y-1">
                <li>• Authentication (Firebase/Supabase)</li>
                <li>• Resume History & Versioning</li>
                <li>• Save Drafts</li>
                <li>• Analytics Dashboard</li>
              </ul>
            </div>
            <div className="bg-purple-50 border-2 border-purple-300 p-3 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-2">Phase 3: Job Matching (5-6 mo)</h3>
              <ul className="text-xs space-y-1">
                <li>• Job Description Upload</li>
                <li>• ATS Score Calculator</li>
                <li>• Keyword Optimization</li>
                <li>• Tailored Bullet Points</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-orange-50 border-2 border-orange-300 p-3 rounded-lg">
              <h3 className="font-bold text-orange-900 mb-2">Phase 4: Premium Features (7-12 mo)</h3>
              <ul className="text-xs space-y-1">
                <li>• AI Cover Letter Generation</li>
                <li>• LinkedIn Profile Optimization</li>
                <li>• Interview Prep Questions</li>
                <li>• Unlimited Revisions</li>
              </ul>
            </div>
            <div className="bg-pink-50 border-2 border-pink-300 p-3 rounded-lg">
              <h3 className="font-bold text-pink-900 mb-2">Phase 5: B2B Launch (Year 2)</h3>
              <ul className="text-xs space-y-1">
                <li>• University Partnerships</li>
                <li>• Recruiting Agency Tools</li>
                <li>• Team Collaboration</li>
                <li>• Developer API Access</li>
              </ul>
            </div>
            <div className="bg-teal-50 border-2 border-teal-300 p-3 rounded-lg">
              <h3 className="font-bold text-teal-900 mb-2">Business Model</h3>
              <ul className="text-xs space-y-1">
                <li>• Freemium: 1 free/month, $10/month unlimited</li>
                <li>• Pay-Per-Resume: $5 per optimization</li>
                <li>• Enterprise: Custom pricing</li>
                <li>• Breakeven: 2 paying users/month</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Impact */}
        <div className="bg-yellow-50 border-2 border-yellow-300 p-3 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-900 mb-2">Social Impact & Value</h3>
          <div className="grid grid-cols-4 gap-3 text-xs">
            <div>
              <p className="font-semibold text-gray-800">Higher Interview Rates</p>
              <p className="text-gray-700">75% rejection → 25% rejection</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Cost Reduction</p>
              <p className="text-gray-700">$100-500 (writers) → $5-10 (KairosCV)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Time Savings</p>
              <p className="text-gray-700">4-6 hours → 1 minute</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Accessibility</p>
              <p className="text-gray-700">Free tier helps students/underprivileged</p>
            </div>
          </div>
        </div>

        {/* Team & Contact */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-indigo-50 border-2 border-indigo-300 p-3 rounded-lg">
            <h3 className="font-bold text-indigo-900 mb-2">Team Contributions</h3>
            <ul className="text-xs space-y-1">
              <li><strong>Bharath (Lead Developer):</strong></li>
              <li>System architecture, AI integration, pipeline implementation, testing suite, deployment</li>
              <li><strong>[Team Member 2]:</strong> [Contributions]</li>
              <li><strong>[Team Member 3]:</strong> [Contributions]</li>
            </ul>
          </div>
          <div className="bg-gray-100 border-2 border-gray-400 p-3 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">Contact & Resources</h3>
            <ul className="text-xs space-y-1">
              <li><strong>Email:</strong> [Your email]</li>
              <li><strong>GitHub:</strong> [Repository link]</li>
              <li><strong>Live Demo:</strong> kairoscv.onrender.com</li>
              <li><strong>Documentation:</strong> [GitHub repo docs]</li>
            </ul>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">KairosCV: Production-Ready SaaS Product</h2>
          <p className="text-lg mb-3">Solving real problems for millions of job seekers</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <p>✅ Problem Validated</p>
            <p>✅ Solution Built & Deployed</p>
            <p>✅ Ready for Scale</p>
          </div>
          <p className="mt-4 text-xl font-bold">Questions?</p>
        </div>

        {/* Thank You */}
        <div className="text-center mt-4">
          <p className="text-2xl font-bold text-blue-900">Thank You!</p>
          <p className="text-sm text-gray-600">Jain University - Capstone Project CA2 - November 2025</p>
        </div>
      </div>
    </Slide>
  );
}
