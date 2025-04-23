
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, TrendingUp, Home } from "lucide-react";

const StorageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Как правильно хранить деньги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выбор способа хранения денег зависит от ваших целей, потребностей и отношения к риску.
          </p>
        </div>

        <Tabs defaultValue="bank" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="bank" className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" /> Банковские вклады
            </TabsTrigger>
            <TabsTrigger value="invest" className="flex items-center justify-center gap-2">
              <TrendingUp className="h-4 w-4" /> Инвестиции
            </TabsTrigger>
            <TabsTrigger value="cash" className="flex items-center justify-center gap-2">
              <Home className="h-4 w-4" /> Наличные дома
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bank" className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Банковские вклады и счета</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Преимущества</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Гарантированный доход в виде процентов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Защита государством (страхование вкладов)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Легкий доступ к средствам через банкоматы и онлайн-банкинг</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Рекомендации</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Используйте вклады с капитализацией процентов для максимальной выгоды</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Распределите средства между несколькими банками для диверсификации</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Создайте систему вкладов с разными сроками окончания для обеспечения ликвидности</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="invest" className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Инвестиционные инструменты</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Преимущества</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Потенциально высокая доходность, превышающая инфляцию</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Возможность создания пассивного дохода</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Диверсификация рисков через различные активы</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Рекомендации</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Инвестируйте только те деньги, которые не понадобятся в ближайшие 3-5 лет</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Используйте принцип диверсификации: акции, облигации, недвижимость, золото</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Регулярно пересматривайте свой инвестиционный портфель и корректируйте его</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cash" className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Хранение наличных дома</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Преимущества</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Мгновенный доступ к деньгам в любое время</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Независимость от работы банков и финансовых систем</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Полная конфиденциальность ваших финансов</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Рекомендации</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Используйте сейфы, встроенные в стену или вмонтированные в пол</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Храните дома только "резервный фонд" на 3-6 месяцев расходов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">•</span>
                    <span>Обеспечьте защиту от пожара, затопления и других бытовых рисков</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StorageSection;
