import {
  ArrowDownRight,
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  Factory,
  FileCheck2,
  Globe2,
  Layers3,
  Ruler,
  Send,
  ShieldCheck,
  Truck,
} from "lucide-react";

const products = [
  { id: "01", title: "Арматура", tag: "REBAR", text: "Для монолитного, промышленного и инфраструктурного строительства.", image: "/images/plant.jpg", position: "8% center", grades: "HRB400 · HRB500" },
  { id: "02", title: "Листовая сталь", tag: "STEEL PLATE", text: "Горячекатаный, холоднокатаный, оцинкованный и специальный лист.", image: "/images/plant.jpg", position: "54% center", grades: "ГОСТ · ASTM · EN" },
  { id: "03", title: "Рулонная сталь", tag: "STEEL COIL", text: "Рулоны для профилирования, обработки и серийного производства.", image: "/images/plant.jpg", position: "78% center", grades: "HRC · CRC · GI" },
  { id: "04", title: "Трубы и профиль", tag: "PIPE & PROFILE", text: "Трубный, сортовой и фасонный прокат под задачи вашего проекта.", image: "/images/plant.jpg", position: "0% center", grades: "КРУГЛЫЕ · ПРОФИЛЬНЫЕ" },
];

const advantages = [
  { icon: Factory, title: "Прямой контракт", text: "Официальный канал поставки продукции Jingye Steel Group." },
  { icon: ShieldCheck, title: "Контроль качества", text: "Сертификаты и документы на каждую поставляемую партию." },
  { icon: Ruler, title: "Точно по ТЗ", text: "Марка стали, стандарт, размер и объём по вашей спецификации." },
  { icon: Truck, title: "Поставка в Казахстан", text: "Сопровождение заказа от расчёта до получения груза." },
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="utilityBar">
          <span>Официальный дистрибьютор Jingye Steel Group</span>
          <div><span>Казахстан</span><span>Оптовые поставки</span></div>
        </div>

        <header className="navShell">
          <a className="brand" href="#top" aria-label="Zhetysu Bayi Steel">
            <span className="brandMark"><i>Z</i><i>B</i></span>
            <span><b>ZHETYSU BAYI</b><small>STEEL</small></span>
          </a>
          <nav aria-label="Главная навигация">
            <a href="#products">Продукция</a>
            <a href="#about">О компании</a>
            <a href="#benefits">Преимущества</a>
            <a href="#process">Поставка</a>
          </nav>
          <a className="navCta" href="#contact">Запросить цену <ArrowRight size={16}/></a>
        </header>

        <div className="heroLayout">
          <div className="heroCopy">
            <div className="heroBadge"><span/><b>ПРЯМЫЕ ПОСТАВКИ ОТ ЗАВОДА</b></div>
            <h1>СТАЛЬ,<br/>НА КОТОРУЮ<br/><em>МОЖНО ОПЕРЕТЬСЯ</em></h1>
            <p>Металлопрокат Jingye Steel Group для строительства, производства и инфраструктурных проектов Казахстана.</p>
            <div className="heroActions">
              <a className="button buttonRed" href="#contact">Получить предложение <ArrowRight size={18}/></a>
              <a className="button buttonLine" href="#products">Смотреть продукцию <ArrowDownRight size={18}/></a>
            </div>
          </div>
          <div className="heroVisual">
            <img src="/images/steel.webp" alt="Металлургическое производство Jingye Steel Group"/>
            <div className="heroVisualLabel"><span>JINGYE STEEL GROUP</span><b>OFFICIAL<br/>DISTRIBUTOR</b></div>
            <div className="heroVisualIndex">01 / 04</div>
          </div>
        </div>

        <div className="heroProof">
          <div><Factory size={22}/><span><b>Прямой контракт</b>без лишних посредников</span></div>
          <div><FileCheck2 size={22}/><span><b>Заводские документы</b>на каждую партию</span></div>
          <div><Globe2 size={22}/><span><b>Международные стандарты</b>ГОСТ, ASTM, EN</span></div>
          <a href="#contact"><span>Рассчитать заказ</span><ArrowRight size={19}/></a>
        </div>
      </section>

      <section className="introSection section">
        <div className="sectionLabel"><span>01</span><b>КТО МЫ</b></div>
        <div className="introGrid">
          <h2>Официальный партнёр<br/>одного из крупнейших<br/><em>производителей стали</em></h2>
          <div className="introText"><p>Zhetysu Bayi Steel поставляет металл напрямую от Jingye Steel Group — от единичной спецификации до комплексного снабжения проекта.</p><a href="#about">Подробнее о компании <ArrowRight size={16}/></a></div>
        </div>
        <div className="trustRow">
          <span>JINGYE</span><i/><span>ISO 9001</span><i/><span>ISO 14001</span><i/><span>ACRS</span><i/><span>CARES</span>
        </div>
      </section>

      <section className="productsSection section" id="products">
        <div className="sectionHeader">
          <div className="sectionLabel lightLabel"><span>02</span><b>ПРОДУКЦИЯ</b></div>
          <div><h2>Металл для<br/>вашего проекта</h2><p>Основные категории продукции Jingye Steel Group. Подберём нужную позицию, даже если её нет в списке.</p></div>
          <a href="#contact">Полный каталог <ArrowRight size={16}/></a>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.id}>
              <div className="productMedia"><img src={product.image} alt={product.title} style={{objectPosition: product.position}}/><span>{product.id}</span><small>{product.tag}</small></div>
              <div className="productContent"><span>{product.grades}</span><h3>{product.title}</h3><p>{product.text}</p><a href="#contact" aria-label={`Запросить цену: ${product.title}`}><span>Запросить цену</span><ChevronRight size={17}/></a></div>
            </article>
          ))}
        </div>
        <div className="productTicker"><Boxes size={20}/><p>Также поставляем: круг, швеллер, двутавр, катанку, рельсы и специальные марки стали</p><a href="#contact">Отправить спецификацию <ArrowRight size={16}/></a></div>
      </section>

      <section className="aboutSection" id="about">
        <div className="aboutPhoto"><img src="/images/factory.webp" alt="Производство листовой стали Jingye Steel Group"/><div className="photoCaption"><span>ПРОИЗВОДСТВЕННАЯ ПЛОЩАДКА</span><b>JINGYE STEEL GROUP</b></div></div>
        <div className="aboutCopy">
          <div className="sectionLabel darkLabel"><span>03</span><b>ПРОИЗВОДИТЕЛЬ</b></div>
          <h2>Масштаб завода.<br/><em>Сервис рядом.</em></h2>
          <p className="aboutLead">Jingye Steel Group — международный производитель комплексных стальных решений.</p>
          <p>Предприятие выпускает арматуру, листовой и рулонный прокат, трубы, профильную и специальную сталь для строительства, энергетики, транспорта и машиностроения.</p>
          <div className="aboutFacts"><div><b>ISO 9001</b><span>Система качества</span></div><div><b>ISO 14001</b><span>Экологический стандарт</span></div><div><b>GLOBAL</b><span>Международные поставки</span></div></div>
          <a href="https://www.hebeijingyesteel.com/about_us.html" target="_blank" rel="noreferrer">Официальный сайт производителя <ArrowRight size={16}/></a>
        </div>
      </section>

      <section className="benefitsSection section" id="benefits">
        <div className="sectionLabel"><span>04</span><b>ПРЕИМУЩЕСТВА</b></div>
        <div className="benefitsTop"><h2>Не просто металл.<br/><em>Предсказуемый результат.</em></h2><p>Мы выстраиваем поставку так, чтобы вы заранее понимали продукт, документы, сроки и маршрут заказа.</p></div>
        <div className="benefitGrid">
          {advantages.map((item, index) => { const Icon = item.icon; return <article key={item.title}><div className="benefitIcon"><Icon size={27} strokeWidth={1.6}/></div><span>0{index+1}</span><h3>{item.title}</h3><p>{item.text}</p><i/></article> })}
        </div>
      </section>

      <section className="processSection" id="process">
        <div className="processIntro"><div className="sectionLabel darkLabel"><span>05</span><b>ПРОЦЕСС</b></div><h2>От заявки<br/>до поставки</h2><p>Одна понятная цепочка — с ответственностью на каждом этапе.</p><a href="#contact">Начать расчёт <ArrowRight size={16}/></a></div>
        <div className="processSteps">
          <div><span>01</span><div><Send size={22}/><h3>Получаем заявку</h3><p>Спецификация, объём и город поставки.</p></div></div>
          <div><span>02</span><div><Layers3 size={22}/><h3>Подбираем продукцию</h3><p>Согласуем марку, стандарт, размер и аналоги.</p></div></div>
          <div><span>03</span><div><Factory size={22}/><h3>Комплектуем заказ</h3><p>Производство, контроль и заводские документы.</p></div></div>
          <div><span>04</span><div><Truck size={22}/><h3>Организуем поставку</h3><p>Сопровождаем груз до получения покупателем.</p></div></div>
        </div>
      </section>

      <section className="contactSection section" id="contact">
        <div className="contactHeadline"><div className="sectionLabel"><span>06</span><b>РАСЧЁТ ЗАКАЗА</b></div><h2>Есть спецификация?<br/><em>Давайте посчитаем.</em></h2><p>Подготовим предложение по продукции, стоимости и срокам поставки.</p></div>
        <div className="contactPanel">
          <span className="contactPanelLabel">ДЛЯ РАСЧЁТА НУЖНО</span>
          <ul><li><Check size={16}/> Наименование и марка стали</li><li><Check size={16}/> Размеры и необходимый объём</li><li><Check size={16}/> Город или адрес поставки</li></ul>
          <a className="button buttonRed" href="mailto:info@zhetysubayisteel.kz?subject=Запрос%20коммерческого%20предложения">Отправить спецификацию <ArrowRight size={18}/></a>
          <small>info@zhetysubayisteel.kz</small>
        </div>
      </section>

      <footer>
        <div className="footerMain"><div className="brand footerBrand"><span className="brandMark"><i>Z</i><i>B</i></span><span><b>ZHETYSU BAYI</b><small>STEEL</small></span></div><p>Официальный дистрибьютор<br/>Jingye Steel Group в Казахстане</p><div className="footerLinks"><a href="#products">Продукция</a><a href="#about">О компании</a><a href="#benefits">Преимущества</a><a href="#contact">Контакты</a></div></div>
        <div className="footerBottom"><span>© 2026 ZHETYSU BAYI STEEL</span><span>МЕТАЛЛ ДЛЯ СИЛЬНЫХ ПРОЕКТОВ</span></div>
      </footer>
    </main>
  );
}
