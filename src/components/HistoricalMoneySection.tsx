
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const HistoricalMoneySection = () => {
  return (
    <section id="historical-money" className="py-16 bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">История денег: от древности до наших дней</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Деньги прошли долгий путь эволюции, меняя формы и материалы. Каждый этап развития денег 
            отражал технологические и социальные изменения общества.
          </p>
        </div>

        <Tabs defaultValue="commodity" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="commodity" className="py-3">Товарные деньги</TabsTrigger>
            <TabsTrigger value="metal" className="py-3">Металлические</TabsTrigger>
            <TabsTrigger value="paper" className="py-3">Бумажные</TabsTrigger>
          </TabsList>
          
          <TabsContent value="commodity" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Первые формы денег</h3>
                    <p className="text-gray-700 mb-4">
                      Товарные деньги – первая форма денег в истории человечества. Они представляли собой 
                      предметы, имеющие собственную ценность, которые одновременно использовались как средство обмена.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Ракушки каури</strong> – широко использовались в Африке, Азии и Океании</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Соль</strong> – ценный товар, от которого происходит слово "salary" (зарплата)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Скот</strong> – использовался многими народами как мера богатства</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Меха</strong> – служили валютой в северных регионах</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Чай</strong> – прессованные блоки чая использовались как валюта в Азии</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-200 rounded-lg overflow-hidden w-full h-64 flex items-center justify-center">
                      <img 
                        src="/placeholder.svg" 
                        alt="Товарные деньги древности" 
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="metal" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Эра металлических монет</h3>
                    <p className="text-gray-700 mb-4">
                      Металлические деньги стали революционным этапом в развитии финансовых систем. 
                      Они были компактными, долговечными и имели стандартизированную ценность.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-secondary-600 mr-2">•</span>
                        <span><strong>Лидийские монеты</strong> – первые официальные монеты (VII век до н.э.)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary-600 mr-2">•</span>
                        <span><strong>Золотые монеты</strong> – использовались для крупных транзакций</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary-600 mr-2">•</span>
                        <span><strong>Серебряные монеты</strong> – более распространены для повседневных расчетов</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary-600 mr-2">•</span>
                        <span><strong>Медные монеты</strong> – служили для мелких покупок</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary-600 mr-2">•</span>
                        <span><strong>Биметаллические системы</strong> – сочетали золото и серебро</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-200 rounded-lg overflow-hidden w-full h-64 flex items-center justify-center">
                      <img 
                        src="/placeholder.svg" 
                        alt="Металлические монеты" 
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="paper" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Появление бумажных денег</h3>
                    <p className="text-gray-700 mb-4">
                      Бумажные деньги изначально появились как расписки за хранение драгоценных металлов, 
                      но постепенно превратились в независимую форму валюты.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Китайские банкноты</strong> – первые в мире (династия Сун, X-XIII века)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Золотой стандарт</strong> – банкноты, обеспеченные золотом</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Фиатные деньги</strong> – современные необеспеченные валюты</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Бреттон-Вудская система</strong> – послевоенная валютная система</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        <span><strong>Защита от подделок</strong> – эволюция защитных механизмов</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-200 rounded-lg overflow-hidden w-full h-64 flex items-center justify-center">
                      <img 
                        src="/placeholder.svg" 
                        alt="Бумажные деньги разных эпох" 
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            История денег продолжает эволюционировать с появлением цифровых валют и 
            технологии блокчейн, показывая постоянную адаптацию денежных систем к технологическим и социальным изменениям.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoricalMoneySection;
