
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, CreditCard, Coins } from "lucide-react";

const MoneyTypesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Виды денег в современном мире</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Сегодня существует несколько основных видов денег, каждый со своими преимуществами и недостатками.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Banknote className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle>Наличные деньги</CardTitle>
              </div>
              <CardDescription>Традиционный способ оплаты</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Не требуют электричества и интернета</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Полная анонимность платежей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Защита от кибератак и хакеров</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✗</span>
                  <span>Риск кражи или потери</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✗</span>
                  <span>Подвержены инфляции при хранении</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Безналичные расчеты</CardTitle>
              </div>
              <CardDescription>Банковские карты и переводы</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Удобство и скорость операций</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Возможность отслеживать расходы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Защита от кражи (блокировка карты)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✗</span>
                  <span>Зависимость от технической инфраструктуры</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✗</span>
                  <span>Комиссии за некоторые операции</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>Цифровые валюты</CardTitle>
              </div>
              <CardDescription>Криптовалюты и CBDC</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Глобальная доступность без границ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Защита от инфляции (для некоторых криптовалют)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Потенциал инвестиционного роста</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✗</span>
                  <span>Высокая волатильность курса</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✗</span>
                  <span>Сложность использования для обычных пользователей</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MoneyTypesSection;
