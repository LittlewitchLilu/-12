import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      q: "А что если у меня вообще не было опыта на похожих должностях?",
      a: "На предварительном бесплатном созвоне я рассмотрю именно Вашу ситуацию, чтобы понять смогу ли я помочь. Моя задача — найти скрытые навыки, которые можно применить."
    },
    {
      q: "Будет ли запись консультации?",
      a: "Да, обязательно. Она будет персонально Ваша, я не буду её нигде использовать. Вы сможете пересмотреть её в любой момент."
    },
    {
      q: "Какой метод будет использован?",
      a: "Я буду задавать Вам наводящие вопросы и мы пройдем несколько психологических и коучинговых техник. Моя задача — внести ясность, а не донести своё мнение!"
    },
    {
      q: "А вдруг не понравится?",
      a: "У Вас будет целых 20 минут переписки или бесплатного созвона для сонастройки перед основной сессией. Мы убедимся, что подходим друг другу."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-gray-600">Всё, что вы хотели знать о формате работы</p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <Accordion.Item 
              key={idx} 
              value={`item-${idx}`}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors group">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-gray-600 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
