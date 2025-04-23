
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bank, LineChart, Home, ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";

const StorageSection = () => {
  return (
    <section id="money-storage" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Хранение денежных средств</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выбор способа хранения денег зависит от ваших целей, срока хранения и отношения к риску.
            Рассмотрим основные варианты и их особенности.
          </p>
        </div>

        <Tabs defaultValue="bank" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="bank" className="py-3 flex gap-2 items-center justify-center">
              <Bank className="h-4 w-4" />
              <span>Банковские вклады</span>
            </TabsTrigger>
            <TabsTrigger value="invest" className="py-3 flex gap-2 items-center justify-center">
              <LineChart className="h-4 w-4" />
              <span>Инвестиции</span>
            </TabsTrigger>
            <TabsTrigger value="home" className="py-3 flex gap-2 items-center justify-center">
              <Home className="h-4 w-4" />
              <span>Хранение дома</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="bank" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Депозит до востребования</CardTitle>
                  <CardDescription>Доступ к деньгам в любой момент</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Процентная ставка</span>
                      <Badge variant="outline" className="bg-gray-100">0.1% - 1%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ликвидность</span>
                      <Badge className="bg-green-500">Высокая</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Риск</span>
                      <Badge className="bg-blue-500">Низкий</Badge>
                    </div>
                    <div className="flex items-center text-sm">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      <span>Застрахован государством</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Идеально для создания резервного фонда и краткосрочных целей.
                  </p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Срочный депозит</CardTitle>
                  <CardDescription>Фиксированный срок хранения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Процентная ставка</span>
                      <Badge variant="outline" className="bg-gray-100">3% - 7%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ликвидность</span>
                      <Badge className="bg-yellow-500">Средняя</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Риск</span>
                      <Badge className="bg-blue-500">Низкий</Badge>
                    </div>
                    <div className="flex items-center text-sm">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      <span>Застрахован государством</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Подходит для среднесрочных целей (1-3 года).
                  </p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Накопительный счет</CardTitle>
                  <CardDescription>Гибкий доступ с процентами</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Процентная ставка</span>
                      <Badge variant="outline" className="bg-gray-100">2% - 4%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ликвидность</span>
                      <Badge className="bg-green-500">Высокая</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Риск</span>
                      <Badge className="bg-blue-500">Низкий</Badge>
                    </div>
                    <div className="flex items-center text-sm">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      <span>Застрахован государством</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Оптимальный баланс между доходностью и доступностью.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="invest" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Облигации</CardTitle>
                  <CardDescription>Долговые ценные бумаги</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Доходность</span>
                      <Badge variant="outline" className="bg-gray-100">5% - 10%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ликвидность</span>
                      <Badge className="bg-yellow-500">Средняя</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Риск</span>
                      <Badge className="bg-yellow-500">Средний</Badge>
                    </div>
                    <div className="flex items-center text-sm">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Зависит от эмитента и рейтинга</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Стабильный доход в виде купонов и возврат номинала при погашении.
                  </p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Акции</CardTitle>
                  <CardDescription>Доля в компании</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Потенциальная доходность</span>
                      <Badge variant="outline" className="bg-gray-100">10% - 20%+</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ликвидность</span>
                      <Badge className="bg-green-500">Высокая</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Риск</span>
                      <Badge className="bg-red-500">Высокий</Badge>
                    </div>
                    <div className="flex items-center text-sm">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                      <span>Высокая волатильность</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Долгосрочный рост капитала и возможность получения дивидендов.
                  </p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Недвижимость</CardTitle>
                  <CardDescription>Материальный актив</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Доходность</span>
                      <Badge variant="outline" className="bg-gray-100">4% - 8%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Ликвидность</span>
                      <Badge className="bg-red-500">Низкая</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Риск</span>
                      <Badge className="bg-yellow-500">Средний</Badge>
                    </div>
                    <div className="flex items-center text-sm">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      <span>Материальный актив с ростом стоимости</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Пассивный доход от аренды и потенциальный рост капитала.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="home" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Хранение наличных дома</h3>
                    <p className="text-gray-700 mb-6">
                      Домашнее хранение наличных остается популярным, но требует особой осторожности и соблюдения ряда правил.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Преимущества</h4>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li className="flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Мгновенный доступ к средствам</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Независимость от банковской системы</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Полная конфиденциальность</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Риски</h4>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li className="flex items-center">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>Угроза кражи или ограбления</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>Риск потери при пожаре или стихийном бедствии</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>Обесценивание средств из-за инфляции</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button className="flex items-center gap-2">
                        Узнать больше о безопасном хранении
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gray-100 rounded-lg p-6">
                      <h4 className="text-lg font-medium mb-4">Рекомендации по домашнему хранению</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-primary-600 font-bold mr-2">1.</span>
                          <span>Используйте сейф, желательно встроенный в стену или пол и прикрепленный к неподвижной конструкции</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 font-bold mr-2">2.</span>
                          <span>Не храните все деньги в одном месте, распределите их по нескольким тайникам</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 font-bold mr-2">3.</span>
                          <span>Установите систему домашней безопасности с сигнализацией и видеонаблюдением</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 font-bold mr-2">4.</span>
                          <span>Храните дома только необходимый минимум наличных средств для текущих расходов</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 font-bold mr-2">5.</span>
                          <span>Рассмотрите возможность страхования имущества, включая наличные деньги</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 font-bold mr-2">6.</span>
                          <span>Не рассказывайте посторонним о наличии дома крупных сумм наличных</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StorageSection;
