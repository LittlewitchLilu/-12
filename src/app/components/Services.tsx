import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Video, Clock, MessageSquare, Target, Search } from 'lucide-react';

export function Services() {
  const features = [
    {
      title: 'Структурирование резюме',
      desc: 'Помогу подсветить сильные стороны и упаковать их так, чтобы они выглядели презентабельно.',
      icon: Search
    },
    {
      title: 'Карьерный вектор',
      desc: 'Поймем вашу траекторию из точки А в точку Б. И проверим, к той ли точке Б вы идете.',
      icon: Target
    },
    {
      title: 'Запись встречи',
      desc: 'Вы получите персональную запись консультации для дальнейшей проработки.',
      icon: Video
    },
    {
      title: 'Проверка ДЗ',
      desc: 'Я лично проверю финальное написание вашего резюме после нашей встречи.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
            Что входит в услугу
          </h2>
          <p className="text-gray-600">
            Для тех, у кого всё сложно. Мы вместе решим вопрос «а кем я всё-таки буду, когда вырасту».
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Package */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="relative">
            <div className="sticky top-28 bg-white p-8 rounded-[2.5rem] border border-amber-200 shadow-xl shadow-amber-900/5">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span className="text-sm font-bold text-gray-500 uppercase">90 минут</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Индивидуальный разбор</h3>
              </div>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold text-gray-900">2000</span>
                <span className="text-xl font-bold text-gray-500">₽</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-sm text-gray-600 font-medium">Что включено:</p>
                <div className="space-y-3">
                  {['Диагностика ситуации', 'Проработка резюме', 'Траектория развития', 'Запись и поддержка'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a
                href="#contact"
                className="block w-full text-center py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-amber-600 transition-all mb-4"
              >
                Забронировать время
              </a>
              
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <MessageSquare className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-xs text-amber-800 leading-snug">
                  Есть сомнения? Напишите мне для <strong>бесплатного 20-мин созвона</strong> для сонастройки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
