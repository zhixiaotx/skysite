import React, { useState } from 'react';
import { Sparkles, Terminal, Cpu, CheckCircle, RefreshCw } from 'lucide-react';

export const Playground: React.FC = () => {
  const [domain, setDomain] = useState<string>('AI Productivity');
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedResult, setGeneratedResult] = useState<{
    title: string;
    stack: string[];
    architecture: string;
    milestones: string[];
  } | null>({
    title: "Context-Aware Knowledge Graph Assistant",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Gemini 2.5 Flash", "Vector DB"],
    architecture: "Client-side SPA with secure serverless proxy endpoints routing contextual embeddings to Gemini API.",
    milestones: [
      "Set up state management & local caching",
      "Integrate server-side Gemini API prompt orchestration",
      "Build interactive graph visualization canvas",
      "Deploy optimized bundle to cloud run container"
    ]
  });

  const ideas: Record<string, { title: string; stack: string[]; architecture: string; milestones: string[] }> = {
    "AI Productivity": {
      title: "Context-Aware Knowledge Graph Assistant",
      stack: ["React 19", "TypeScript", "Tailwind CSS", "Gemini API", "Vector DB"],
      architecture: "Client-side SPA with secure serverless proxy endpoints routing contextual embeddings to Gemini API.",
      milestones: [
        "Set up state management & local caching",
        "Integrate server-side Gemini API prompt orchestration",
        "Build interactive graph visualization canvas",
        "Deploy optimized bundle to cloud run container"
      ]
    },
    "Developer Tools": {
      title: "Zero-Config Cloud API Mocking Suite",
      stack: ["Node.js", "Express", "TypeScript", "Docker", "Vite"],
      architecture: "High-performance Express backend with dynamic route interception and OpenAPI parser.",
      milestones: [
        "Create modular Express router for proxying mocks",
        "Build real-time log inspector dashboard",
        "Add automated schema validation",
        "Publish package to npm registry"
      ]
    },
    "Design Systems": {
      title: "Token-Driven Accessible Design System",
      stack: ["React", "Radix UI", "Tailwind CSS", "Storybook", "Framer Motion"],
      architecture: "Component library utilizing headless primitives styled with tokenized Tailwind utility classes.",
      milestones: [
        "Define semantic color & typography tokens",
        "Build core accessible primitives (Dialog, Tabs, Dropdown)",
        "Write comprehensive documentation & examples",
        "Publish version 1.0 to npm"
      ]
    }
  };

  const handleGenerate = (selectedDomain: string) => {
    setDomain(selectedDomain);
    setLoading(true);
    setTimeout(() => {
      setGeneratedResult(ideas[selectedDomain] || ideas["AI Productivity"]);
      setLoading(false);
    }, 600);
  };

  return (
    <section id="playground" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase block mb-2">Interactive Playground</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            Sky's AI Architecture Sparker
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
            Test drive an interactive AI concept generator showcasing how Sky architects scalable, AI-driven web applications.
          </p>
        </div>

        {/* Playground Container */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-6 md:p-10 shadow-xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">Select Domain</span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Choose a product category</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.keys(ideas).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleGenerate(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    domain === cat
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Result Area */}
          {loading ? (
            <div className="py-16 flex flex-col items-center justify-center text-center">
              <RefreshCw className="w-8 h-8 text-neutral-400 animate-spin mb-4" />
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Synthesizing architecture & blueprint...</p>
            </div>
          ) : generatedResult ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-200/70 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 inline-block mb-2">
                    {domain} Concept
                  </span>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {generatedResult.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready for implementation</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech Stack */}
                <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <h5 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-neutral-500" />
                    Recommended Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {generatedResult.stack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4 leading-relaxed">
                    {generatedResult.architecture}
                  </p>
                </div>

                {/* Milestones */}
                <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <h5 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-neutral-500" />
                    Execution Milestones
                  </h5>
                  <ul className="space-y-3">
                    {generatedResult.milestones.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ) : null}

        </div>

      </div>
    </section>
  );
};
