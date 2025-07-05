import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Полная организация",
      description: "От идеи до воплощения",
      icon: "Sparkles",
      details: "Планирование, координация, декор, кейтеринг",
    },
    {
      title: "Поиск площадки",
      description: "Идеальное место для вашего торжества",
      icon: "MapPin",
      details: "Рестораны, усадьбы, отели, необычные локации",
    },
    {
      title: "Декор и флористика",
      description: "Создаем атмосферу вашей мечты",
      icon: "Flower",
      details: "Букеты, композиции, арки, оформление зала",
    },
    {
      title: "Координация дня",
      description: "Безупречное проведение торжества",
      icon: "Clock",
      details: "Контроль всех процессов в день свадьбы",
    },
  ];

  const portfolio = [
    {
      title: "Классическая элегантность",
      description: "Свадьба в усадьбе с бордовыми акцентами",
      image: "/img/0f7b1507-60a9-4b66-a32b-d9877f07a289.jpg",
    },
    {
      title: "Романтический стиль",
      description: "Нежная церемония в ресторане",
      image: "/img/c0676d49-49a9-4427-ab23-22a2737e7644.jpg",
    },
    {
      title: "Современная классика",
      description: "Стильная свадьба в отеле",
      image: "/img/983b6b27-e52a-4c6f-a881-e9740ae7c5a2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div
              className="text-2xl font-bold text-burgundy"
              style={{ fontFamily: "Cormorant, serif" }}
            >
              про чувства
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-burgundy transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-burgundy transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-burgundy transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-burgundy transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-5xl md:text-6xl font-bold text-burgundy mb-6"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                СОЗДАДИМ СВАДЬБУ ВАШЕЙ МЕЧТЫ
              </h1>
            </div>
            <div>
              <img
                src="/img/8bc807eb-84c7-4a35-a3a3-a96ca2b149bc.jpg"
                alt="Элегантная свадебная церемония"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="bg-burgundy hover:bg-burgundy/90 text-white px-8 py-3"
            >
              Начать планирование
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white px-8 py-3"
            >
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold text-burgundy mb-8"
              style={{ fontFamily: "Cormorant, serif" }}
            >
              О нас
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Мы — команда профессионалов с 8-летним опытом в организации
              свадеб. Каждая свадьба для нас — это уникальная история любви,
              которую мы воплощаем в жизнь с особой заботой и вниманием к
              деталям.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-burgundy mb-4">
                  <Icon name="Award" size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-2">
                  200+ свадеб
                </h3>
                <p className="text-gray-600">Успешно проведенных торжеств</p>
              </div>
              <div className="text-center">
                <div className="text-burgundy mb-4">
                  <Icon name="Users" size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-2">
                  Команда мечты
                </h3>
                <p className="text-gray-600">Лучшие специалисты отрасли</p>
              </div>
              <div className="text-center">
                <div className="text-burgundy mb-4">
                  <Icon name="Heart" size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-2">
                  Любовь к деталям
                </h3>
                <p className="text-gray-600">Каждая мелочь имеет значение</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-burgundy text-center mb-12"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader className="text-center">
                  <div className="text-burgundy mb-4">
                    <Icon name={service.icon} size={48} className="mx-auto" />
                  </div>
                  <CardTitle className="text-burgundy text-lg">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-burgundy text-center mb-12"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Портфолио
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-burgundy text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-rose-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl font-bold text-burgundy text-center mb-12"
              style={{ fontFamily: "Cormorant, serif" }}
            >
              Свяжитесь с нами
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-burgundy mb-6">
                  Начните планирование
                </h3>
                <p className="text-gray-600 mb-6">
                  Расскажите нам о вашей мечте, и мы поможем воплотить её в
                  жизнь. Каждая деталь будет продумана до мелочей.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-burgundy" />
                    <span className="text-gray-700">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-burgundy" />
                    <span className="text-gray-700">info@prochuvstva.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-burgundy" />
                    <span className="text-gray-700">
                      Москва, ул. Свадебная, 1
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    className="border-gray-300 focus:border-burgundy"
                  />
                  <Input
                    placeholder="Телефон"
                    className="border-gray-300 focus:border-burgundy"
                  />
                  <Input
                    placeholder="Email"
                    className="border-gray-300 focus:border-burgundy"
                  />
                  <Textarea
                    placeholder="Расскажите о вашей мечте..."
                    rows={4}
                    className="border-gray-300 focus:border-burgundy"
                  />
                  <Button className="w-full bg-burgundy hover:bg-burgundy/90 text-white">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-burgundy text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                про чувства
              </h3>
              <p className="text-rose-200">
                Создаем незабываемые свадьбы с любовью к деталям
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-rose-200">
                <li>Полная организация</li>
                <li>Поиск площадки</li>
                <li>Декор и флористика</li>
                <li>Координация дня</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-rose-200">
                <li>+7 (999) 123-45-67</li>
                <li>info@prochuvstva.ru</li>
                <li>Москва, ул. Свадебная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={24}
                  className="text-rose-200 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  size={24}
                  className="text-rose-200 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Youtube"
                  size={24}
                  className="text-rose-200 hover:text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-rose-200/20 mt-8 pt-8 text-center text-rose-200">
            <p>&copy; 2024 про чувства. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
