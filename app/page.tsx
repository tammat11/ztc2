const products = [
  { title: "Арматура", code: "HRB400 · HRB500", img: "/images/plant.jpg", pos: "12% center", text: "Рифлёная и гладкая арматура для жилого, промышленного и инфраструктурного строительства." },
  { title: "Листовой прокат", code: "ГОСТ · ASTM · EN", img: "/images/plant.jpg", pos: "52% center", text: "Горячекатаный, холоднокатаный, оцинкованный лист и сталь специального назначения." },
  { title: "Рулонная сталь", code: "HRC · CRC · GI", img: "/images/plant.jpg", pos: "76% center", text: "Рулоны для металлообработки, профилирования и серийного промышленного производства." },
  { title: "Трубы и профиль", code: "Круглые · профильные", img: "/images/plant.jpg", pos: "0% center", text: "Трубный, сортовой и фасонный прокат для строительных и производственных задач." },
];

const stats = [
  { num: "10+", label: "лет работы Bayi Steel" },
  { num: "50+", label: "клиентов в Казахстане" },
  { num: "ISO", label: "9001 · 14001 сертификаты" },
  { num: "4", label: "категории в наличии на складе" },
];

const advantages = [
  {
    num: "01", tag: "DIRECT PARTNER", title: "Официальный канал", text: "Прямое взаимодействие с Bayi Steel без лишних посредников.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 8l4 4-4 4"/><path d="M3 12h18"/><path d="M7 16l-4-4 4-4"/></svg>,
  },
  {
    num: "02", tag: "QUALITY CONTROL", title: "Заводское качество", text: "Сертификаты и документы на поставляемые партии продукции.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    num: "03", tag: "YOUR SPEC", title: "Подбор по спецификации", text: "Подберём марку стали, стандарт, толщину, размер и объём.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>,
  },
  {
    num: "04", tag: "DELIVERY KZ", title: "Поставка в Казахстан", text: "Сопровождаем заказ от расчёта до получения покупателем.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
];

export default function Home() {
  return <main id="top">
    <div className="topbar">
      <div>Официальный дистрибьютор Jingye Steel и Bayi Steel</div>
      <div><span>Казахстан</span><span>Оптовые поставки металлопроката</span></div>
    </div>
    <header className="siteHeader">
      <a className="brand" href="#top">
        <svg className="brandMark" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="50" height="44" fill="#121417"/>
          <polygon points="8,8 42,8 42,14 18,30 42,30 42,36 8,36 8,30 32,14 8,14" fill="white"/>
          <rect x="0" y="40" width="50" height="4" fill="#dc1f26"/>
        </svg>
        <span><b>ZHETYSU BAYI</b><small>STEEL</small></span>
      </a>
      <nav aria-label="Основная навигация">
        <a href="#catalog">Каталог</a>
        <a href="#about">О компании</a>
        <a href="#advantages">Преимущества</a>
        <a href="#delivery">Поставка</a>
      </nav>
      <a className="navButton" href="#contact">Запросить цену <span aria-hidden="true">→</span></a>
    </header>

    <section className="heroSection">
      <div className="heroBackdrop" />
      <div className="heroAccent" aria-hidden="true" />
      <div className="heroInner">
        <div className="heroText">
          <div className="badge"><span className="badgeDot" aria-hidden="true" />ПРЯМЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ</div>
          <h1>МЕТАЛЛОПРОКАТ<br/>ДЛЯ <em>СИЛЬНЫХ</em><br/>ПРОЕКТОВ</h1>
          <p>Поставляем продукцию Bayi Steel для строительных, производственных и инфраструктурных компаний Казахстана.</p>
          <div className="heroButtons">
            <a className="btn red" href="#contact">Получить предложение <span aria-hidden="true">→</span></a>
            <a className="btn outline" href="#catalog">Перейти в каталог</a>
          </div>
        </div>
        <aside className="quickQuote" aria-label="Быстрый расчёт">
          <div className="quoteCorner" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
          <p className="quoteLabel">Быстрый расчёт</p>
          <h2>Отправьте<br/>спецификацию</h2>
          <p>Рассчитаем стоимость, сроки и предложим подходящую продукцию завода.</p>
          <a href="mailto:info@zhetysubayisteel.kz?subject=Запрос%20на%20расчет" className="quoteLink">
            <span>Отправить запрос</span>
            <span className="quoteLinkArrow" aria-hidden="true">→</span>
          </a>
          <small>Ответим в рабочее время</small>
        </aside>
      </div>
      <div className="heroStrip" aria-label="Ключевые показатели">
        <div><b>BAYI STEEL</b><span>официальный партнёр</span></div>
        <div><b>ISO 9001</b><span>контроль качества</span></div>
        <div><b>ISO 14001</b><span>стандарт производства</span></div>
        <div><b>АЛМАТЫ</b><span>весь ассортимент в наличии</span></div>
      </div>
    </section>

    {/* Stats strip */}
    <div className="statsStrip" aria-label="Показатели компании">
      {stats.map(s => (
        <div className="statItem" key={s.num}>
          <b>{s.num}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>

    <section className="section catalogSection" id="catalog">
      <div className="sectionTitle">
        <div>
          <span className="overline">НАША ПРОДУКЦИЯ</span>
          <h2>Каталог металлопроката</h2>
        </div>
        <p>Весь ассортимент Bayi Steel в наличии на складе в Алматы. Если нужной позиции нет в списке — отправьте спецификацию.</p>
      </div>
      <div className="productCards">
        {products.map((p, i) => (
          <article className="productCard" key={p.title}>
            <div className="productImage">
              <img src={p.img} style={{objectPosition: p.pos}} alt={p.title} loading="lazy" />
              <div className="productImageOverlay">
                <span className="productNum" aria-hidden="true">0{i + 1}</span>
                <span className="productCode">{p.code}</span>
              </div>
            </div>
            <div className="productBody">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <a href="#contact" className="productLink">
                Узнать цену
                <span className="productLinkArrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="catalogFooter">
        <span>Также поставляем: круг, швеллер, двутавр, катанку, рельсы и специальные марки стали</span>
        <a href="#contact">Запросить полный каталог <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section className="aboutSection" id="about">
      <div className="aboutMedia">
        <img src="/images/steel.webp" alt="Металлургическое производство Bayi Steel" />
        <div className="mediaTag"><b>BAYI</b><span>STEEL GROUP</span></div>
      </div>
      <div className="aboutContent">
        <span className="overline light">О ПРОИЗВОДИТЕЛЕ</span>
        <h2>Масштаб завода.<br/><em>Сервис рядом.</em></h2>
        <p className="aboutLead">Zhetysu Bayi Steel — официальный представитель Jingye Steel и Bayi Steel на рынке Казахстана.</p>
        <p>Bayi Steel выпускает арматуру, листовой и рулонный прокат, трубы, профильную и специальную сталь. Продукция используется в строительстве, энергетике, транспорте и машиностроении.</p>
        <div className="certs">
          <div><b>ISO 9001</b><span>Система менеджмента качества</span></div>
          <div><b>ISO 14001</b><span>Экологический менеджмент</span></div>
        </div>
        <a className="aboutLink" href="https://www.hebeijingyesteel.com/about_us.html" target="_blank" rel="noreferrer">
          Официальный сайт производителя <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <section className="section advantagesSection" id="advantages">
      <div className="sectionTitle compact">
        <div>
          <span className="overline">ПОЧЕМУ МЫ</span>
          <h2>Надёжность на каждом этапе</h2>
        </div>
      </div>
      <div className="advantagesGrid">
        {advantages.map(a => (
          <article key={a.num}>
            <span className="advNumber">{a.num}</span>
            <div className="advIcon" aria-hidden="true">{a.icon}</div>
            <small>{a.tag}</small>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
            <i />
          </article>
        ))}
      </div>
    </section>

    <section className="deliverySection" id="delivery">
      <div className="deliveryContent">
        <span className="overline light">КАК МЫ РАБОТАЕМ</span>
        <h2>От заявки<br/>до поставки</h2>
        <p>Берём на себя подбор продукции, коммуникацию с заводом, документы и сопровождение заказа.</p>
        <a className="btn red" href="#contact" style={{marginTop: "32px", alignSelf: "flex-start"}}>Начать работу →</a>
      </div>
      <ol className="timeline" aria-label="Этапы работы">
        <li>
          <span className="timelineNum">01</span>
          <div className="timelineBody"><strong>Заявка</strong><span>Получаем спецификацию или перечень позиций</span></div>
        </li>
        <li>
          <span className="timelineNum">02</span>
          <div className="timelineBody"><strong>Расчёт</strong><span>Согласовываем марку, объём, цену и сроки</span></div>
        </li>
        <li>
          <span className="timelineNum">03</span>
          <div className="timelineBody"><strong>Производство</strong><span>Комплектуем и контролируем заказ на заводе</span></div>
        </li>
        <li>
          <span className="timelineNum">04</span>
          <div className="timelineBody"><strong>Доставка</strong><span>Сопровождаем документы и получение груза</span></div>
        </li>
      </ol>
    </section>

    <section className="ctaSection" id="contact">
      <div className="ctaBg" aria-hidden="true" />
      <div className="ctaInner">
        <div className="ctaText">
          <span className="overline light">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</span>
          <h2>Готовы рассчитать<br/>ваш заказ</h2>
          <p>Отправьте спецификацию — вернёмся с предложением по стоимости, объёму и срокам поставки.</p>
          <div className="ctaTrust">
            <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>Документы на каждую партию</span></div>
            <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>Ответ в рабочее время</span></div>
            <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true"><path d="M17 8l4 4-4 4"/><path d="M3 12h18"/></svg><span>Прямой канал Bayi Steel</span></div>
          </div>
        </div>
        <div className="ctaCard">
          <h3>Что указать<br/>в заявке</h3>
          <ul>
            <li>
              <span className="ctaListNum">1</span>
              <span>Наименование и марка стали</span>
            </li>
            <li>
              <span className="ctaListNum">2</span>
              <span>Размеры и необходимый объём</span>
            </li>
            <li>
              <span className="ctaListNum">3</span>
              <span>Город или адрес поставки</span>
            </li>
          </ul>
          <a className="btn red ctaBtn" href="mailto:info@zhetysubayisteel.kz?subject=Запрос%20коммерческого%20предложения">
            Отправить спецификацию <b aria-hidden="true">→</b>
          </a>
          <div className="ctaEmail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>info@zhetysubayisteel.kz</span>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div className="footerTop">
        <div className="brand invert">
          <svg className="brandMark" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="50" height="44" fill="#121417"/>
            <polygon points="8,8 42,8 42,14 18,30 42,30 42,36 8,36 8,30 32,14 8,14" fill="white"/>
            <rect x="0" y="40" width="50" height="4" fill="#dc1f26"/>
          </svg>
          <span><b>ZHETYSU BAYI</b><small>STEEL</small></span>
        </div>
        <p>Официальный дистрибьютор<br/>Bayi Steel в Казахстане</p>
        <nav className="footerNav" aria-label="Навигация в подвале">
          <a href="#catalog">Каталог</a>
          <a href="#about">О компании</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
      <div className="footerBottom">
        <span>© 2026 Zhetysu Bayi Steel</span>
        <span>Металлопрокат для сильных проектов</span>
      </div>
    </footer>
  </main>;
}
