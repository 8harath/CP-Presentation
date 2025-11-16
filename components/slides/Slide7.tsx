import Slide from "../Slide";

export default function Slide7() {
  return (
    <Slide>
      <div className="p-0 space-y-4 md:space-y-6">
        {/* Title */}
        <div className="inline-block bg-black px-4 py-3 md:px-8 md:py-4 neo-brutal-shadow">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Demo
          </h1>
        </div>

        {/* Before/After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-6xl">
          {/* Before */}
          <div className="space-y-4">
            <p className="text-lg md:text-2xl font-bold text-black">Before</p>
            <div className="bg-white neo-border-thin neo-brutal-shadow p-6 font-mono text-sm space-y-2">
              <p className="font-bold">John Doe</p>
              <p>john@email.com</p>
              <p className="mt-3 font-bold">EXPERIENCE</p>
              <p>Google Inc</p>
              <p>Software Engineer, Jan 2020 - Present</p>
              <p>• Worked on team projects</p>
              <p>• Fixed bugs</p>
              <p>• Helped with features</p>
            </div>
          </div>

          {/* After */}
          <div className="space-y-4">
            <p className="text-lg md:text-2xl font-bold text-black">After</p>
            <div className="bg-white neo-border-thin neo-brutal-shadow p-6 font-mono text-sm space-y-2">
              <p className="font-bold">JOHN DOE</p>
              <p>john@email.com | +1234567890 | linkedin.com/in/johndoe</p>
              <p className="mt-3 font-bold">PROFESSIONAL SUMMARY</p>
              <p className="text-xs">Results-driven Software Engineer with 5+ years building scalable apps...</p>
              <p className="mt-3 font-bold">EXPERIENCE</p>
              <p className="font-semibold">Software Engineer • Jan 2020 - Present</p>
              <p>Google Inc</p>
              <p className="text-xs">• Architected microservices handling 10M+ daily requests, improving reliability by 35%</p>
              <p className="text-xs">• Resolved 150+ bugs, reducing incidents by 40% for 2M+ users</p>
            </div>
          </div>
        </div>

        {/* Key Improvements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl">
          <div className="bg-black neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-lg font-bold text-white">Action Verbs Added</p>
            <p className="text-sm text-white mt-1">"Worked" → "Architected"</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-lg font-bold text-white">Metrics Quantified</p>
            <p className="text-sm text-white mt-1">10M+ requests, 35% improvement</p>
          </div>
          <div className="bg-black neo-brutal-shadow-sm p-4 md:p-6">
            <p className="text-lg font-bold text-white">Professional Summary</p>
            <p className="text-sm text-white mt-1">Auto-generated from experience</p>
          </div>
        </div>

        {/* Processing Time */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-4xl">
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6 flex-1 text-center">
            <p className="text-xl md:text-3xl font-bold text-black">32s</p>
            <p className="text-sm text-gray-600 mt-1">Well-formatted PDF (95% confidence)</p>
          </div>
          <div className="bg-white neo-border-thin neo-brutal-shadow-sm p-6 flex-1 text-center">
            <p className="text-xl md:text-3xl font-bold text-black">58s</p>
            <p className="text-sm text-gray-600 mt-1">Scanned PDF with OCR (80% confidence)</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
