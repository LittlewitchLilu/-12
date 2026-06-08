import React from 'react';
import { Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clock className="w-6 h-6 text-amber-600" />
          <span className="font-serif text-lg font-bold text-gray-900">
            Дарья Финенко
          </span>
        </div>
        
        <p className="text-sm text-gray-500 mb-6">
          &copy; {new Date().getFullYear()} Твой хранитель времени. Все права защищены.
        </p>
        
        <div className="flex justify-center gap-8">
          <a href="#" className="text-xs font-bold text-gray-400 hover:text-amber-600 transition-colors uppercase tracking-widest">Политика конфиденциальности</a>
          <a href="#" className="text-xs font-bold text-gray-400 hover:text-amber-600 transition-colors uppercase tracking-widest">Договор оферты</a>
        </div>
      </div>
    </footer>
  );
}
