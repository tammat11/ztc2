const products = [
  { title: "Арматура", code: "HRB400 · HRB500", img: "/images/plant.jpg", pos: "12% center", text: "Рифлёная и гладкая арматура для жилого, промышленного и инфраструктурного строительства." },
  { title: "Листовой прокат", code: "ГОСТ · ASTM · EN", img: "/images/plant.jpg", pos: "52% center", text: "Горячекатаный, холоднокатаный, оцинкованный лист и сталь специального назначения." },
  { title: "Рулонная сталь", code: "HRC · CRC · GI", img: "/images/plant.jpg", pos: "76% center", text: "Рулоны для металлообработки, профилирования и серийного промышленного производства." },
  { title: "Трубы и профиль", code: "Круглые · профильные", img: "/images/plant.jpg", pos: "0% center", text: "Трубный, сортовой и фасонный прокат для строительных и производственных задач." },
];

const advantages = [
  ["01", "Официальный канал", "Прямое взаимодействие с Jingye Steel Group без лишних посредников."],
  ["02", "Заводское качество", "Сертификаты и документы на поставляемые партии продукции."],
  ["03", "Подбор по спецификации", "Подберём марку стали, стандарт, толщину, размер и объём."],
  ["04", "Поставка в Казахстан", "Сопровождаем заказ от расчёта до получения покупателем."],
];

export default function Home() {
  return <main id="top">
    <div className="topbar"><div>Официальный дистрибьютор Jingye Steel Group</div><div><span>Казахстан</span><span>Оптовые поставки металлопроката</span></div></div>
    <header className="siteHeader">
      <a className="brand" href="#top"><span className="brandIcon">ZB</span><span><b>ZHETYSU BAYI</b><small>STEEL</small></span></a>
      <nav aria-label="Основная навигация"><a href="#catalog">Каталог</a><a href="#about">О компании</a><a href="#advantages">Преимущества</a><a href="#delivery">Поставка</a></nav>
      <a className="navButton" href="#contact">Запросить цену <span>→</span></a>
    </header>

    <section className="heroSection">
      <div className="heroBackdrop" />
      <div className="heroInner">
        <div className="heroText">
          <div className="badge"><span>●</span> ПРЯМЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ</div>
          <h1>МЕТАЛЛОПРОКАТ<br/>ДЛЯ <em>СИЛЬНЫХ</em><br/>ПРОЕКТОВ</h1>
          <p>Поставляем продукцию Jingye Steel Group для строительных, производственных и инфраструктурных компаний Казахстана.</p>
          <div className="heroButtons"><a className="btn red" href="#contact">Получить предложение <span>→</span></a><a className="btn outline" href="#catalog">Перейти в каталог</a></div>
        </div>
        <aside className="quickQuote">
          <div className="quoteIcon">↗</div><p className="quoteLabel">Быстрый расчёт</p><h2>Отправьте<br/>спецификацию</h2><p>Рассчитаем стоимость, сроки и предложим подходящую продукцию завода.</p>
          <a href="mailto:info@zhetysubayisteel.kz?subject=Запрос%20на%20расчет">Отправить запрос <span>→</span></a>
          <small>Ответим в рабочее время</small>
        </aside>
      </div>
      <div className="heroStrip"><div><b>JINGYE</b><span>официальный партнёр</span></div><div><b>ISO 9001</b><span>контроль качества</span></div><div><b>ISO 14001</b><span>стандарт производства</span></div><div><b>KZ</b><span>поставка по Казахстану</span></div></div>
    </section>

    <section className="section catalogSection" id="catalog">
      <div className="sectionTitle"><div><span className="overline">НАША ПРОДУКЦИЯ</span><h2>Каталог металлопроката</h2></div><p>Основные категории продукции Jingye Steel Group. Если нужной позиции нет в списке — отправьте спецификацию.</p></div>
      <div className="productCards">{products.map((p, i) => <article className="productCard" key={p.title}>
        <div className="productImage"><img src={p.img} style={{objectPosition:p.pos}} alt={p.title}/><span>0{i+1}</span></div>
        <div className="productBody"><small>{p.code}</small><h3>{p.title}</h3><p>{p.text}</p><a href="#contact">Узнать цену <b>→</b></a></div>
      </article>)}</div>
      <div className="catalogFooter"><span>Также поставляем: круг, швеллер, двутавр, катанку, рельсы и специальные марки стали</span><a href="#contact">Запросить полный каталог →</a></div>
    </section>

    <section className="aboutSection" id="about">
      <div className="aboutMedia"><img src="/images/steel.webp" alt="Металлургическое производство Jingye Steel Group"/><div className="mediaTag"><b>JINGYE</b><span>STEEL GROUP</span></div></div>
      <div className="aboutContent"><span className="overline light">О ПРОИЗВОДИТЕЛЕ</span><h2>Масштаб завода.<br/><em>Сервис рядом.</em></h2><p className="aboutLead">Zhetysu Bayi Steel представляет продукцию Jingye Steel Group на рынке Казахстана.</p><p>Jingye Steel Group выпускает арматуру, листовой и рулонный прокат, трубы, профильную и специальную сталь. Продукция используется в строительстве, энергетике, транспорте и машиностроении.</p>
        <div className="certs"><div><b>ISO 9001</b><span>Система менеджмента качества</span></div><div><b>ISO 14001</b><span>Экологический менеджмент</span></div></div>
        <a className="aboutLink" href="https://www.hebeijingyesteel.com/about_us.html" target="_blank" rel="noreferrer">Официальный сайт производителя <span>↗</span></a>
      </div>
    </section>

    <section className="section advantagesSection" id="advantages">
      <div className="sectionTitle compact"><div><span className="overline">ПОЧЕМУ МЫ</span><h2>Надёжность на каждом этапе</h2></div></div>
      <div className="advantagesGrid">{advantages.map(a=><article key={a[0]}><span>{a[0]}</span><div className="advIcon">◆</div><h3>{a[1]}</h3><p>{a[2]}</p></article>)}</div>
    </section>

    <section className="deliverySection" id="delivery">
      <div className="deliveryContent"><span className="overline light">КАК МЫ РАБОТАЕМ</span><h2>От заявки<br/>до поставки</h2><p>Берём на себя подбор продукции, коммуникацию с заводом, документы и сопровождение заказа.</p></div>
      <div className="timeline"><div><b>01</b><span><strong>Заявка</strong>Получаем спецификацию или перечень позиций</span></div><div><b>02</b><span><strong>Расчёт</strong>Согласовываем марку, объём, цену и сроки</span></div><div><b>03</b><span><strong>Производство</strong>Комплектуем и контролируем заказ на заводе</span></div><div><b>04</b><span><strong>Доставка</strong>Сопровождаем документы и получение груза</span></div></div>
    </section>

    <section className="contactSection" id="contact">
      <div><span className="overline">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</span><h2>Рассчитаем ваш заказ</h2><p>Отправьте спецификацию — подготовим предложение по стоимости, объёму и срокам поставки.</p></div>
      <div className="contactCard"><span>Для расчёта отправьте:</span><ul><li>наименование и марку стали</li><li>размеры и необходимый объём</li><li>город или адрес поставки</li></ul><a className="btn red" href="mailto:info@zhetysubayisteel.kz?subject=Запрос%20коммерческого%20предложения">Отправить спецификацию <b>→</b></a><small>info@zhetysubayisteel.kz</small></div>
    </section>

    <footer><div className="footerTop"><div className="brand invert"><span className="brandIcon">ZB</span><span><b>ZHETYSU BAYI</b><small>STEEL</small></span></div><p>Официальный дистрибьютор<br/>Jingye Steel Group в Казахстане</p><div className="footerNav"><a href="#catalog">Каталог</a><a href="#about">О компании</a><a href="#contact">Контакты</a></div></div><div className="footerBottom"><span>© 2026 Zhetysu Bayi Steel</span><span>Металлопрокат для сильных проектов</span></div></footer>
  </main>;
}
