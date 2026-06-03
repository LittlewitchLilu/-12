import React from 'react';
import { Scale } from '../data';
import { CheckCircle2 } from 'lucide-react';

interface ScaleCardProps {
  scale: Scale;
  value?: number;
  onChange: (value: number) => void;
}

export const ScaleCard: React.FC<ScaleCardProps> = ({ scale, value, onChange }) => {
  return (
    <div className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 ${value ? 'border-green-200 bg-green-50/30 shadow-sm' : 'border-slate-200 bg-white shadow-sm hover:shadow-md'}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          {scale.title}
          {value && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />}
        </h3>
        {value && (
          <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-sm shrink-0 ml-2">
            {value} / 10
          </span>
        )}
      </div>
      <p className="text-slate-600 mb-5 text-sm md:text-base leading-relaxed">
        {scale.description}
      </p>
      
      <div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <button
              key={n}
              onClick={() => onChange(n)}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                ${value === n 
                  ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                }
              `}
              aria-label={`Оценка ${n} для ${scale.title}`}
              aria-pressed={value === n}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-2 px-1 text-xs font-medium text-slate-400">
          <span>Низкий</span>
          <span>Высокий</span>
        </div>
      </div>
    </div>
  );
};
