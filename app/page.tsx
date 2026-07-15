const products = [
  { no: "01", title: "Арматура", text: "Для монолитного и промышленного строительства" },
  { no: "02", title: "Листовой прокат", text: "Горячекатаный, холоднокатаный и оцинкованный лист" },
  { no: "03", title: "Рулонная сталь", text: "Рулоны для производства, профилирования и обработки" },
  { no: "04", title: "Трубы и профиль", text: "Круглые трубы, профильная сталь и сортовой прокат" },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="Zhetysu Bayi Steel — на главную">
          <span className="brandMark">ZB</span>
          <span><b>ZHETYSU BAYI</b><small>STEEL</small></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#catalog">Продукция</a><a href="#partner">О компании</a><a href="#quality">Качество</a>
        </nav>
        <a className="headerCta" href="#request">Получить предложение <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="heroPhoto" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow"><i /> Официальный дистрибьютор Jingye Steel Group</p>
          <h1>НАДЁЖНАЯ СТАЛЬ.<br/><em>СИЛЬНЫЕ ПРОЕКТЫ.</em></h1>
          <p className="lead">Поставляем металл напрямую от крупного производителя — для строительства, производства и инфраструктурных проектов Казахстана.</p>
          <div className="heroActions">
            <a className="button primary" href="#catalog">Смотреть продукцию <span>→</span></a>
            <a className="button ghost" href="#partner">Почему мы</a>
          </div>
        </div>
        <div className="heroStats">
          <div><strong>01</strong><span>Прямой контракт<br/>с производителем</span></div>
          <div><strong>02</strong><span>Контроль качества<br/>каждой поставки</span></div>
          <div><strong>03</strong><span>Поставка под задачу<br/>и спецификацию</span></div>
        </div>
      </section>

      <section className="catalog section" id="catalog">
        <div className="sectionHead">
          <div><p className="kicker">Каталог</p><h2>МЕТАЛЛ ДЛЯ<br/>ВАШЕГО ПРОЕКТА</h2></div>
          <p>Основные позиции Jingye Steel Group. Подберём марку стали, стандарт, размер и объём под техническое задание.</p>
        </div>
        <div className="productGrid">
          {products.map((p) => <article className="product" key={p.no}>
            <span>{p.no}</span><h3>{p.title}</h3><p>{p.text}</p><b>↗</b>
          </article>)}
        </div>
      </section>

      <section className="partner" id="partner">
        <div className="partnerImage"><img src="/images/steel.webp" alt="Производство стали на заводе Jingye Steel Group" /></div>
        <div className="partnerCopy">
          <p className="kicker light">Производитель</p>
          <h2>СТАЛЬ JINGYE.<br/><em>ПОСТАВКА ИЗ ПЕРВЫХ РУК.</em></h2>
          <p>Jingye Steel Group — крупная металлургическая группа и поставщик комплексных стальных решений. Продукция производителя применяется в строительстве, машиностроении и инфраструктурных проектах по всему миру.</p>
          <div className="facts"><div><b>ISO 9001</b><span>Система качества</span></div><div><b>ISO 14001</b><span>Экологический стандарт</span></div></div>
          <a className="textLink" href="https://www.hebeijingyesteel.com/about_us.html" target="_blank" rel="noreferrer">О производителе <span>↗</span></a>
        </div>
      </section>

      <section className="quality section" id="quality">
        <div className="qualityImage"><img src="/images/plant.jpg" alt="Продукция Jingye Steel Group: трубы, рулоны и листовой прокат" /></div>
        <div className="qualityCopy"><p className="kicker">Наш подход</p><h2>НЕ ПРОСТО МЕТАЛЛ.<br/>ПРЕДСКАЗУЕМЫЙ РЕЗУЛЬТАТ.</h2>
          <div className="steps"><div><b>01</b><span><strong>Уточняем задачу</strong>Марка стали, ГОСТ, размеры, объём и сроки.</span></div><div><b>02</b><span><strong>Комплектуем поставку</strong>Подбираем продукцию завода под спецификацию.</span></div><div><b>03</b><span><strong>Сопровождаем до получения</strong>Документы, логистика и контроль поставки.</span></div></div>
        </div>
      </section>

      <section className="request" id="request">
        <p className="kicker light">Коммерческое предложение</p>
        <h2>ЕСТЬ СПЕЦИФИКАЦИЯ?<br/><em>РАССЧИТАЕМ ПОСТАВКУ.</em></h2>
        <p>Передайте нам список позиций — подготовим предложение по ассортименту, объёму и срокам.</p>
        <a className="button white" href="mailto:info@zhetysubayisteel.kz?subject=Запрос%20коммерческого%20предложения">Отправить запрос <span>→</span></a>
      </section>

      <footer><div className="brand footerBrand"><span className="brandMark">ZB</span><span><b>ZHETYSU BAYI</b><small>STEEL</small></span></div><p>Официальный дистрибьютор<br/>Jingye Steel Group в Казахстане</p><p className="footerNote">Сталь для сильных проектов.</p></footer>
    </main>
  );
}
