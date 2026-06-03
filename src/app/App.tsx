import React, { useState, useEffect } from 'react';
import { ScaleId, SCALES } from './data';
import { ScaleCard } from './components/ScaleCard';
import { ResultsPanel } from './components/ResultsPanel';
import { ClipboardList, BrainCircuit, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleScoreChange = (scaleId: ScaleId, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [scaleId]: score
    }));
  };

  const isComplete = Object.keys(answers).length === SCALES.length;

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prevent default form submission if any
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isComplete) {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 md:p-2.5 rounded-lg md:rounded-xl">
              <BrainCircuit className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div>
              <h1 className="font-bold text-lg md:text-xl leading-none text-slate-800">ПсихоДиагностика</h1>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Методика Е.Л. Инденбаум</p>
            </div>
          </div>
          {/* Progress indicator */}
          {!showResults && (
            <div className="flex items-center gap-3">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-medium text-slate-700">Заполнено шкал</span>
                <span className="text-xs text-slate-500">{Object.keys(answers).length} из {SCALES.length}</span>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="50%" cy="50%" r="40%"
                    className="stroke-blue-600 transition-all duration-500 ease-out"
                    strokeWidth="10%" fill="none"
                    strokeDasharray="100"
                    strokeDashoffset={100 - (Object.keys(answers).length / SCALES.length) * 100}
                  />
                </svg>
                <span className="text-xs md:text-sm font-bold text-slate-700 relative z-10">
                  {Object.keys(answers).length}
                </span>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-6 pt-8 md:pt-12">
        {!showResults ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 mb-8 md:mb-10">
              <div className="flex items-start gap-4">
                <ClipboardList className="w-8 h-8 text-blue-500 shrink-0 mt-1 hidden md:block" />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">Шкала оценки социопсихологической адаптированности</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Оцените ребенка по каждой из 10 шкал, выбрав значение от 1 (навык совершенно не сформирован) до 10 (навык сформирован полностью, превосходит ожидания). 
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="font-medium text-slate-700 w-full mb-1">Ориентир для оценки:</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">1-3: Слабо</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">4-6: Частично</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">7-10: Хорошо</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {SCALES.map((scale) => (
                <ScaleCard
                  key={scale.id}
                  scale={scale}
                  value={answers[scale.id]}
                  onChange={(val) => handleScoreChange(scale.id as ScaleId, val)}
                />
              ))}

              <div className="sticky bottom-6 md:bottom-10 pt-8 pb-4 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent flex justify-center z-10">
                <button
                  type="submit"
                  disabled={!isComplete}
                  className={`
                    relative overflow-hidden group flex items-center justify-center gap-3 w-full md:w-auto md:min-w-[320px] py-4 px-8 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg
                    ${isComplete 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/25 hover:-translate-y-1' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    }
                  `}
                >
                  {isComplete ? (
                    <>
                      <CheckCircle2 className="w-6 h-6 animate-in zoom-in" />
                      Получить результаты
                    </>
                  ) : (
                    `Осталось заполнить: ${SCALES.length - Object.keys(answers).length}`
                  )}
                  {isComplete && (
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <ResultsPanel answers={answers} onReset={handleReset} />
        )}
      </main>
    </div>
  );
}
