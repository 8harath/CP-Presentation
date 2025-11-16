import Slide from "../Slide";

export default function Slide9() {
  return (
    <Slide>
      <div className="p-0 space-y-4 md:space-y-6">
        {/* Title */}
        <div className="inline-block bg-black px-4 py-3 md:px-8 md:py-4 neo-brutal-shadow">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Testing & Results
          </h1>
        </div>

        {/* Test Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl">
          <div className="bg-white neo-border neo-brutal-shadow-lg p-8 text-center">
            <p className="text-5xl font-bold text-black mb-2">90+</p>
            <p className="text-lg text-black">Total Tests</p>
          </div>
          <div className="bg-white neo-border neo-brutal-shadow-lg p-8 text-center">
            <p className="text-5xl font-bold text-black mb-2">85%</p>
            <p className="text-lg text-black">Coverage</p>
          </div>
          <div className="bg-white neo-border neo-brutal-shadow-lg p-8 text-center">
            <p className="text-5xl font-bold text-black mb-2">100%</p>
            <p className="text-lg text-black">Type Safety</p>
          </div>
          <div className="bg-white neo-border neo-brutal-shadow-lg p-8 text-center">
            <p className="text-5xl font-bold text-black mb-2">0</p>
            <p className="text-lg text-black">Vulnerabilities</p>
          </div>
        </div>

        {/* Test Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl">
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-base md:text-xl font-bold text-black mb-3">Edge Case Handler</p>
            <p className="text-xl md:text-3xl font-bold text-black">42 tests</p>
            <p className="text-sm text-gray-600 mt-2">Date normalization, duplicate detection, text cleanup</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-base md:text-xl font-bold text-black mb-3">Template Renderer</p>
            <p className="text-xl md:text-3xl font-bold text-black">28 tests</p>
            <p className="text-sm text-gray-600 mt-2">Null safety, HTML escaping, section rendering</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-base md:text-xl font-bold text-black mb-3">Enhanced Parser</p>
            <p className="text-xl md:text-3xl font-bold text-black">27 tests</p>
            <p className="text-sm text-gray-600 mt-2">Contact extraction, experience parsing</p>
          </div>
        </div>

        {/* Performance */}
        <div className="space-y-4 max-w-5xl">
          <p className="text-lg md:text-2xl font-bold text-black">Performance Metrics</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
              <p className="text-lg md:text-2xl font-bold text-white">85-95%</p>
              <p className="text-xs text-white mt-2">Parsing Accuracy</p>
              <p className="text-xs text-green-400 mt-1">✓ Target: 80%</p>
            </div>
            <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
              <p className="text-lg md:text-2xl font-bold text-white">30-45s</p>
              <p className="text-xs text-white mt-2">Processing Time</p>
              <p className="text-xs text-green-400 mt-1">✓ Target: &lt;60s</p>
            </div>
            <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
              <p className="text-lg md:text-2xl font-bold text-white">90%</p>
              <p className="text-xs text-white mt-2">Data Quality</p>
              <p className="text-xs text-green-400 mt-1">✓ Target: 85%</p>
            </div>
            <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
              <p className="text-lg md:text-2xl font-bold text-white">99.9%</p>
              <p className="text-xs text-white mt-2">Uptime</p>
              <p className="text-xs text-green-400 mt-1">✓ Production</p>
            </div>
            <div className="bg-black neo-brutal-shadow-sm p-6 text-center">
              <p className="text-lg md:text-2xl font-bold text-white">300-400MB</p>
              <p className="text-xs text-white mt-2">Memory Peak</p>
              <p className="text-xs text-green-400 mt-1">✓ &lt;512MB</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
