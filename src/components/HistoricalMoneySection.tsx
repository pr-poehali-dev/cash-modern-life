
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "lucide-react";

const HistoricalMoneySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">История денег: от древности до наших дней</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Деньги прошли долгий путь эволюции от простых товаров до современных цифровых валют.
            Рассмотрим основные исторические формы денег.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <HistoricalMoneyItem 
            title="Товарные деньги" 
            period="12000-3000 лет до н.э." 
            description="Первые деньги появились в форме товаров, которые ценились во всех сообществах. В разных регионах мира использовались различные предметы:"
            position="left"
            items={[
              "Ракушки каури в Африке и Азии",
              "Соль в Древнем Риме и Средиземноморье",
              "Меха в Северной Америке и России",
              "Скот в кочевых племенах",
              "Чай, прессованный в плитки в Китае и Азии"
            ]}
            color="copper"
          />
          
          <HistoricalMoneyItem 
            title="Металлические деньги" 
            period="VII век до н.э. - XIX век" 
            description="Монеты из драгоценных металлов стали следующим этапом эволюции денег, обеспечивая стандартизацию и удобство:"
            position="right"
            items={[
              "Первые официальные монеты из электрума (сплав золота и серебра) в Лидии",
              "Золотые и серебряные монеты в Древней Греции и Риме",
              "Биметаллические системы средневековья",
              "Медные монеты для мелких расчетов",
              "Эра золотого стандарта XIX века"
            ]}
            color="gold"
          />
          
          <HistoricalMoneyItem 
            title="Бумажные деньги" 
            period="VII век - настоящее время" 
            description="Бумажные деньги появились как свидетельства о наличии ценностей в хранилище и постепенно эволюционировали:"
            position="left"
            items={[
              "Первые бумажные деньги в Китае династии Тан",
              "Банкноты как расписки ювелиров в средневековой Европе",
              "Государственные ассигнации XVIII-XIX веков",
              "Отказ от золотого обеспечения в XX веке",
              "Современные защищенные банкноты с множеством степеней защиты"
            ]}
            color="green"
          />
          
          <HistoricalMoneyItem 
            title="Электронные деньги" 
            period="1960-е - настоящее время" 
            description="С развитием компьютерных технологий появились электронные формы денег:"
            position="right"
            items={[
              "Появление первых банковских карт в 1960-х",
              "Развитие систем электронных платежей в 1980-90-х",
              "Интернет-банкинг и онлайн-платежи в 2000-х",
              "Мобильные платежи и бесконтактные карты в 2010-х",
              "Цифровые валюты центральных банков (CBDC) - наши дни"
            ]}
            color="primary"
          />
          
          <HistoricalMoneyItem 
            title="Криптовалюты" 
            period="2009 - настоящее время" 
            description="Децентрализованные цифровые валюты, основанные на блокчейн-технологии:"
            position="left"
            items={[
              "Запуск Bitcoin в 2009 году",
              "Появление альткоинов (Ethereum, Litecoin и др.)",
              "Смарт-контракты и децентрализованные финансы (DeFi)",
              "NFT и токенизация активов",
              "Интеграция криптовалют в традиционную финансовую систему"
            ]}
            color="secondary"
          />
        </div>
      </div>
    </section>
  );
};

interface HistoricalMoneyItemProps {
  title: string;
  period: string;
  description: string;
  items: string[];
  position: "left" | "right";
  color: string;
}

const HistoricalMoneyItem = ({ 
  title, 
  period, 
  description, 
  items, 
  position, 
  color 
}: HistoricalMoneyItemProps) => {
  const colorClasses = {
    primary: "bg-primary-100 border-primary-500",
    secondary: "bg-secondary-100 border-secondary-500",
    gold: "bg-gold-100 border-gold-500",
    silver: "bg-silver-100 border-silver-500",
    copper: "bg-copper-100 border-copper-500",
    green: "bg-green-100 border-green-500"
  };
  
  const dotColorClasses = {
    primary: "bg-primary-500",
    secondary: "bg-secondary-500",
    gold: "bg-gold-500",
    silver: "bg-silver-500",
    copper: "bg-copper-500",
    green: "bg-green-500"
  };
  
  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;
  const selectedDotColor = dotColorClasses[color as keyof typeof dotColorClasses] || dotColorClasses.primary;
  
  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start gap-4 mb-12 ${position === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 relative">
        <div className="hidden md:block absolute top-0 w-4 h-4 rounded-full border-4 border-white z-10 transform -translate-y-1/2 ${selectedDotColor}"
             style={{ [position === 'left' ? 'right' : 'left']: '-2.25rem' }}></div>
        <Card className={`${selectedColor} border-l-4 hover:shadow-md transition-shadow overflow-hidden`}>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">{period}</p>
            <p className="mb-4">{description}</p>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
};

export default HistoricalMoneySection;
