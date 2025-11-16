import Slide from "../Slide";

export default function Slide1() {
  return (
    <Slide className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="text-center space-y-8">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight">
            KairosCV
          </h1>
          <p className="text-3xl font-light italic">
            AI-Powered Resume Optimization Platform
          </p>
        </div>

        {/* Tagline */}
        <div className="py-6">
          <p className="text-2xl font-medium bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg inline-block">
            "Transform Any Resume into ATS-Optimized Perfection"
          </p>
        </div>

        {/* Team Information */}
        <div className="space-y-6 pt-8">
          <div className="space-y-2">
            <p className="text-xl font-semibold">Team Members:</p>
            <p className="text-lg">Bharath (Lead Developer)</p>
            <p className="text-lg">[Add other team member names]</p>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold">Guide:</p>
            <p className="text-lg">[Faculty Guide Name]</p>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold">Institution:</p>
            <p className="text-lg">Jain University</p>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold">Date:</p>
            <p className="text-lg">November 2025</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="pt-6">
          <span className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
            MVP - Production Ready
          </span>
        </div>
      </div>

      {/* Speaker Notes */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/30 backdrop-blur-sm text-white text-sm p-4 rounded-lg">
        <p className="font-semibold mb-2">Speaker Notes:</p>
        <p>
          "Good morning/afternoon. We are presenting KairosCV, an AI-powered platform that solves
          a critical problem faced by 75% of job seekers - having their resumes rejected by
          Applicant Tracking Systems before reaching human recruiters."
        </p>
      </div>
    </Slide>
  );
}
