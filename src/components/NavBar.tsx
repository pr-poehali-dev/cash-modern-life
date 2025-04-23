
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Banknote, Wallet, Lock, History } from "lucide-react";

const NavBar = () => {
  return (
    <header className="w-full bg-gradient-to-r from-primary-700 to-primary-500 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-100 transition-colors">
            <span className="flex items-center gap-2">
              <Banknote size={24} />
              Наличные сегодня
            </span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <Link to="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  Главная
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:bg-primary-600 bg-primary-700">
                  Виды денег
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary-500 to-primary-700 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Wallet className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Современные деньги
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Узнайте о разных типах денег и их роли в современном обществе
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Наличные деньги">
                      Преимущества и недостатки использования наличных
                    </ListItem>
                    <ListItem href="/" title="Безналичные расчеты">
                      Банковские карты, переводы и мобильные платежи
                    </ListItem>
                    <ListItem href="/" title="Цифровые валюты">
                      Криптовалюты и цифровые активы нового поколения
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:bg-primary-600 bg-primary-700">
                  История денег
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-secondary-500 to-secondary-700 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <History className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Исторические деньги
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            История развития денежных систем от древности до наших дней
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Товарные деньги">
                      От ракушек и соли до меха и чая
                    </ListItem>
                    <ListItem href="/" title="Металлические деньги">
                      Эволюция монет из драгоценных металлов
                    </ListItem>
                    <ListItem href="/" title="Бумажные деньги">
                      История появления и развития банкнот
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:bg-primary-600 bg-primary-700">
                  Хранение денег
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary-500 to-primary-700 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Lock className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Надежное хранение финансов
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Современные методы сохранения и приумножения капитала
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Банковские вклады">
                      Виды депозитов и их преимущества
                    </ListItem>
                    <ListItem href="/" title="Инвестиции">
                      Финансовые инструменты для долгосрочного хранения
                    </ListItem>
                    <ListItem href="/" title="Наличное хранение">
                      Правила и риски хранения наличных дома
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavBar;
