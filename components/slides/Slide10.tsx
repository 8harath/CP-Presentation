import Slide from "../Slide";

export default function Slide10() {
  return (
    <Slide>
      <div className="p-0 space-y-4 md:space-y-6">
        {/* Title */}
        <div className="inline-block bg-black px-4 py-3 md:px-8 md:py-4 neo-brutal-shadow">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Conclusion
          </h1>
        </div>

        {/* Achievements */}
        <div className="bg-white neo-border neo-brutal-shadow-lg p-6 max-w-4xl">
          <p className="text-2xl md:text-4xl font-bold text-black mb-8 text-center">
            Production-Ready SaaS Platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="text-center">
              <p className="text-5xl font-bold text-black">✓</p>
              <p className="text-lg text-black mt-2">Problem Validated</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-black">✓</p>
              <p className="text-lg text-black mt-2">Solution Deployed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-black">✓</p>
              <p className="text-lg text-black mt-2">Tests Comprehensive</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-black">✓</p>
              <p className="text-lg text-black mt-2">Ready to Scale</p>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="space-y-4 max-w-5xl">
          <p className="text-lg md:text-2xl font-bold text-black">Implementation Roadmap</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-black mb-2">Phase 1</p>
              <p className="text-sm text-gray-700">Connect App to Supabase</p>
              <p className="text-sm text-gray-700">DB Schema + Migrations</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-black mb-2">Phase 2</p>
              <p className="text-sm text-gray-700">Add User Authentication</p>
              <p className="text-sm text-gray-700">Email + OAuth Login</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-black mb-2">Phase 3</p>
              <p className="text-sm text-gray-700">Store Resume Data</p>
              <p className="text-sm text-gray-700">History + Versioning</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-lg font-bold text-black mb-2">Phase 4</p>
              <p className="text-sm text-gray-700">3 Free Trials / User</p>
              <p className="text-sm text-gray-700">Paid Upgrade After Limit</p>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl">
          <div className="bg-black neo-brutal-shadow p-8 text-center">
            <p className="text-xl md:text-3xl font-bold text-white mb-2">75% → 25%</p>
            <p className="text-sm text-white">ATS Rejection Rate</p>
          </div>
          <div className="bg-black neo-brutal-shadow p-8 text-center">
            <p className="text-xl md:text-3xl font-bold text-white mb-2">$500 → $5</p>
            <p className="text-sm text-white">Cost Per Resume</p>
          </div>
          <div className="bg-black neo-brutal-shadow p-8 text-center">
            <p className="text-xl md:text-3xl font-bold text-white mb-2">6h → 1min</p>
            <p className="text-sm text-white">Time Savings</p>
          </div>
        </div>

        {/* Thank You */}
        <div className="bg-white neo-border neo-brutal-shadow-lg p-6 max-w-3xl mx-auto text-center">
          <p className="text-5xl font-bold text-black mb-4">Thank You</p>
          <p className="text-xl text-gray-700">Jain University • November 2025</p>
          <p className="text-lg md:text-2xl font-bold text-black mt-8">Questions?</p>
        </div>
      </div>
    </Slide>
  );
}
