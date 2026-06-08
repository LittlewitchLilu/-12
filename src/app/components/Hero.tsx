import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sparkles } from 'lucide-react';
import mainPhoto from "figma:asset/6OosFAYhuxx9cx9EYKBGPA8Xak4sMB8ffqJoUHCszNN2EORYvb8e_FCbMKh6LvA01F6-87q2C246IlZDOXJWBGE3__1_.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-amber-50/50 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-6">
              
              
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">Карьерные консультации</h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">Карьерные консультации от Дарьи Финенко — эксперта по найму и бизнес-психолога (ВШЭ). Помогаю найти истинную траекторию развития и «упаковать» ваш опыт для рынка.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-200"
              >
                Начать консультацию
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all"
              >
                Бесплатный созвон 20 мин
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <ImageWithFallback 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=100`} 
                      alt="Reviewer" 
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">500+ учеников</p>
                <p className="text-xs text-gray-500 font-medium">пришли в профессию</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-10">
              <ImageWithFallback
                src={mainPhoto}
                alt="Дарья Финенко"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-amber-50 max-w-[200px]"
            >
              <p className="text-xs font-bold text-amber-600 mb-1 uppercase tracking-wider">Гарантия</p>
              <p className="text-sm font-medium text-gray-700">Качественный подбор и адаптация под любой бизнес</p>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-amber-50"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-bold text-gray-900">100+ кейсов</span>
              </div>
              <p className="text-xs text-gray-500">по подбору ассистентов</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
