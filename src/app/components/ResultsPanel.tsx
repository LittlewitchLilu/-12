import React, { useRef, useState } from 'react';
import { Scale, SCALES } from '../data';
import { ArrowLeft, CheckCircle2, AlertCircle, Info, Star, TrendingUp, TrendingDown, Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ResultsPanelProps {
  answers: Record<number, number>;
  onReset: () => void;
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ answers, onReset }) => {
  const captureRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!captureRef.current) return;
    
    try {
      setIsDownloading(true);
      // Small delay to ensure any fonts or styles are fully rendered
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(captureRef.current, {
        scale: 2, // Higher quality
        backgroundColor: '#ffffff',
        useCORS: true,
      });
      
      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.href = image;
      link.download = `Результаты_диагностики_${new Date().toLocaleDateString('ru-RU').replace(/\./g, '_')}.png`;
      link.click();
    } catch (error) {
      console.error('Failed to capture image:', error);
    } finally {
      setIsDownloading(false);
    }
  };
  const scores = Object.values(answers);
  const totalScore = scores.reduce((sum, score) => sum + score, 0);
  const averageScore = Number((totalScore / 10).toFixed(1));

  let levelText = '';
  let levelColor = '';
  let levelBg = '';

  if (averageScore < 3) {
    levelText = 'Крайне низкий уровень адаптации';
    levelColor = 'text-red-600';
    levelBg = 'bg-red-50 border-red-200';
  } else if (averageScore < 5) {
    levelText = 'Низкий уровень адаптации';
    levelColor = 'text-orange-600';
    levelBg = 'bg-orange-50 border-orange-200';
  } else if (averageScore < 7) {
    levelText = 'Средний уровень адаптации';
    levelColor = 'text-yellow-600';
    levelBg = 'bg-yellow-50 border-yellow-200';
  } else if (averageScore < 9) {
    levelText = 'Высокий уровень адаптации';
    levelColor = 'text-green-600';
    levelBg = 'bg-green-50 border-green-200';
  } else {
    levelText = 'Очень высокий уровень адаптации';
    levelColor = 'text-emerald-600';
    levelBg = 'bg-emerald-50 border-emerald-200';
  }

  const getSummaryText = (avg: number) => {
    if (avg < 3) return 'Требуется немедленное и комплексное вмешательство специалистов. Ребенок испытывает серьезные трудности в адаптации к школьной среде.';
    if (avg < 5) return 'Необходима систематическая коррекционная работа. Адаптация протекает с осложнениями, требуется поддержка психолога и педагогов.';
    if (avg < 7) return 'Процесс адаптации протекает в пределах нормы, но есть отдельные сферы, требующие внимания и точечной поддержки.';
    if (avg < 9) return 'Ребенок успешно адаптирован. Рекомендуется поддерживать текущий уровень взаимодействия и поощрять самостоятельность.';
    return 'Отличная адаптация. Ребенок полностью освоился в школьной среде, демонстрирует высокий уровень самостоятельности и социальных навыков.';
  };

  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);

  const strengths = SCALES.filter(s => answers[s.id] === maxScore && answers[s.id] >= 7);
  const weaknesses = SCALES.filter(s => answers[s.id] === minScore && answers[s.id] < 7);

  const getSkillFeedback = (score: number) => {
    if (score < 5) return { text: 'Данная сфера требует дополнительного внимания и коррекционной поддержки.', icon: <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />, textColor: 'text-red-700' };
    if (score <= 7) return { text: 'Навык сформирован частично и развивается в соответствии с возрастными возможностями.', icon: <Info className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />, textColor: 'text-yellow-700' };
    return { text: 'Навык сформирован на хорошем уровне и соответствует возрастным ожиданиям.', icon: <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />, textColor: 'text-green-700' };
  };

  const today = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date());

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Кнопка скачивания */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 mb-6 shadow-sm">
        <div className="text-slate-600 text-sm">
          Результат оформлен в виде единого бланка. Вы можете сохранить его как изображение.
        </div>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors w-full sm:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
        >
          {isDownloading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Download className="w-5 h-5" />
          )}
          {isDownloading ? 'Сохранение...' : 'Скачать как картинку'}
        </button>
      </div>

      {/* Единая карточка для скриншота */}
      <div 
        ref={captureRef}
        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 mb-8" 
        id="results-capture"
      >
        
        {/* Заголовок */}
        <div className="text-center mb-8 pb-6 border-b border-slate-100">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Отчет по результатам диагностики</h2>
          <p className="text-slate-500 mb-2">Шкала оценки социопсихологической адаптированности (Е.Л. Инденбаум)</p>
          <div className="text-sm text-slate-400 font-medium">Дата проведения: {today}</div>
        </div>

        {/* Сводные показатели */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-center items-center text-center">
            <div className="text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Сумма</div>
            <div className="text-2xl font-bold text-slate-800">{totalScore}</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-center items-center text-center">
            <div className="text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Ср. балл</div>
            <div className="text-2xl font-bold text-blue-600">{averageScore}</div>
          </div>
          <div className={`col-span-2 rounded-xl border ${levelBg} p-4 flex flex-col justify-center items-center text-center`}>
            <div className="text-xs font-medium uppercase tracking-wider mb-1 opacity-80 text-slate-800">Уровень адаптированности</div>
            <div className={`text-lg md:text-xl font-bold leading-tight ${levelColor}`}>{levelText}</div>
          </div>
        </div>

        {/* Общий вывод */}
        <div className="mb-8 p-5 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 leading-relaxed">
          <strong className="text-slate-900 block mb-1">Общее заключение:</strong>
          {getSummaryText(averageScore)}
        </div>

        {/* Таблица результатов */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Детальные результаты по шкалам</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-3 pl-4 text-sm font-semibold text-slate-700 border-r border-slate-200 w-12 text-center">№</th>
                  <th className="p-3 text-sm font-semibold text-slate-700 border-r border-slate-200 w-1/3">Шкала оценки</th>
                  <th className="p-3 text-sm font-semibold text-slate-700 border-r border-slate-200 w-20 text-center">Балл</th>
                  <th className="p-3 pr-4 text-sm font-semibold text-slate-700">Интерпретация результата</th>
                </tr>
              </thead>
              <tbody>
                {SCALES.map((scale, index) => {
                  const score = answers[scale.id];
                  const feedback = getSkillFeedback(score);
                  return (
                    <tr key={scale.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 pl-4 text-sm text-slate-500 border-r border-slate-100 text-center">{index + 1}</td>
                      <td className="p-3 text-sm font-medium text-slate-800 border-r border-slate-100 leading-tight">{scale.title}</td>
                      <td className="p-3 text-sm font-bold text-slate-900 border-r border-slate-100 text-center">{score}</td>
                      <td className={`p-3 pr-4 text-sm leading-tight flex gap-2 ${feedback.textColor}`}>
                        {feedback.icon}
                        <span>{feedback.text}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Сильные стороны и зоны развития */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-md font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              Сильные стороны
            </h3>
            {strengths.length > 0 ? (
              <ul className="space-y-2">
                {strengths.map(s => (
                  <li key={s.id} className="flex items-start gap-2 text-sm text-slate-700 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                    <Star className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-tight">{s.title} ({answers[s.id]} б.)</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500 italic p-2">Ярко выраженных сильных сторон не выявлено.</p>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-md font-bold text-slate-800 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              Зоны развития
            </h3>
            {weaknesses.length > 0 ? (
              <ul className="space-y-2">
                {weaknesses.map(s => (
                  <li key={s.id} className="flex items-start gap-2 text-sm text-slate-700 bg-red-50/50 p-2.5 rounded-lg border border-red-100">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-tight">{s.title} ({answers[s.id]} б.)</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500 italic p-2">Критических зон развития не выявлено.</p>
            )}
          </div>
        </div>

      </div>

      <div className="flex justify-center pb-12">
        <button
          onClick={onReset}
          className="flex items-center gap-2 bg-slate-200 text-slate-700 hover:bg-slate-300 px-6 py-3 rounded-xl font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Вернуться и пройти заново
        </button>
      </div>
    </div>
  );
};
