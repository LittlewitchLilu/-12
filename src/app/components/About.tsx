import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Briefcase, Users } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Лет опыта', value: '4+', icon: Briefcase },
    { label: 'Кейсов', value: '100+', icon: Award },
    { label: 'Выпускников', value: '500+', icon: Users },
    { label: 'Образование', value: 'ВШЭ', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">Кто я?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Дарья Финенко, эксперт по подбору и адаптации со специализацией бизнес-психолога. Я начинала свой путь как ассистент руководителя, поэтому видела разные бизнесы изнутри и знаю все причины, по которым предприниматели боятся делегировать.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">Мои компетенции</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>Постигала психологию в <strong>ВШЭ</strong> на специальности бизнес-психолога.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>Основала отзывчивое сообщество ассистентов <strong>«Хранители времени»</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>Резидент сообщества <strong>«Опора России»</strong>, спикер и общественный деятель.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>Выступала на площадках Техноград ВДНХ, РЭУ им. Плеханова и «Моя карьера».</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <stat.icon className="w-6 h-6 text-amber-600 mb-4" />
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="prose prose-amber max-w-none text-gray-600 leading-relaxed">
              
              
            </div>
            
            <div className="relative group">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
