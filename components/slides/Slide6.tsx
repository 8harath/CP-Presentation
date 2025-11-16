import Slide from "../Slide";

export default function Slide6() {
  return (
    <Slide>
      <div className="p-0 space-y-4 md:space-y-6">
        {/* Title */}
        <div className="inline-block bg-black px-4 py-3 md:px-8 md:py-4 neo-brutal-shadow">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Implementation
          </h1>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl">
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-xl md:text-3xl font-bold text-black mb-2">5</p>
            <p className="text-lg text-black">PDF Extraction Methods</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-xl md:text-3xl font-bold text-black mb-2">90+</p>
            <p className="text-lg text-black">Edge Cases Handled</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-xl md:text-3xl font-bold text-black mb-2">800+</p>
            <p className="text-lg text-black">Lines Normalization Logic</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-4 max-w-5xl">
          <p className="text-lg md:text-2xl font-bold text-black">Core Technologies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">Multi-Strategy Extraction</p>
              <p className="text-sm text-gray-700">Tries 5 parsers, selects best result with confidence scoring</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">Vision OCR Fallback</p>
              <p className="text-sm text-gray-700">Gemini Vision for scanned/image-based PDFs</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">Duplicate Detection</p>
              <p className="text-sm text-gray-700">Levenshtein distance with 85% similarity threshold</p>
            </div>
            <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-4 md:p-6">
              <p className="text-base md:text-xl font-bold text-black mb-2">Type-Safe Templates</p>
              <p className="text-sm text-gray-700">Handlebars with null safety and XSS protection</p>
            </div>
          </div>
        </div>

        {/* Code Quality */}
        <div className="grid grid-cols-6 gap-4 max-w-6xl">
          <div className="bg-black neo-brutal-shadow-sm p-4 text-center">
            <p className="text-lg md:text-2xl font-bold text-white">85%+</p>
            <p className="text-xs text-white mt-1">Coverage</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-4 text-center">
            <p className="text-lg md:text-2xl font-bold text-white">90+</p>
            <p className="text-xs text-white mt-1">Tests</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-4 text-center">
            <p className="text-lg md:text-2xl font-bold text-white">100%</p>
            <p className="text-xs text-white mt-1">TypeScript</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-4 text-center">
            <p className="text-lg md:text-2xl font-bold text-white">5K+</p>
            <p className="text-xs text-white mt-1">LOC</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-4 text-center">
            <p className="text-lg md:text-2xl font-bold text-white">90+</p>
            <p className="text-xs text-white mt-1">Edge Cases</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-4 text-center">
            <p className="text-lg md:text-2xl font-bold text-white">0</p>
            <p className="text-xs text-white mt-1">Vulnerabilities</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
