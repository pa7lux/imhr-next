import { NextPage } from "next"
import cn from 'classnames'
import AboutStyles from '../styles/About.module.css';
import Head from "next/head";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="imhr.top — про проєкт"
        />
        <title>imhr.top — про проєкт</title>
      </Head>
      <section className={cn(AboutStyles.about)}>
        <h1 className={cn(AboutStyles.about_heading) + " text-type-h1"}>Про проект</h1>
        <p className={cn(AboutStyles.about_lead) + " text-type-lead"}>Ми&nbsp;команда підлітків із&nbsp;України. Нині ми&nbsp;в&nbsp;Грузії. Нас звуть Віка, Макс, Саша та&nbsp;Катя. Ми&nbsp;приїхали до&nbsp;Тбілісі з&nbsp;Києва, Одеси, Херсона і&nbsp;зібрали невелику редакцію, щоб розповісти наші історії та&nbsp;підтримати інших українських підлітків у&nbsp;різних частинах світу.</p>
        <p className={cn(AboutStyles.about_paragraph) + " text-type-p"}>Бути підлітком важко, особливо у&nbsp;історичний час. Тому ми&nbsp;хочемо писати про&nbsp;те, що&nbsp;нас турбує, про&nbsp;те, що&nbsp;нам цікаво, і&nbsp;про&nbsp;те, що&nbsp;допомагає нам справлятися з&nbsp;усім цим. Ми&nbsp;сподіваємося, що&nbsp;наші історії допоможуть комусь відчути себе менш самотньо. І&nbsp;будемо раді тим, хто захоче приєднатися до&nbsp;нас.</p>

        <div className={cn(AboutStyles.image_grid) + " mt-2"}>
          <img
            src="./images/name/sasha.jpg"
            alt=""
            className={cn(AboutStyles.image_grid_picture) + " box-radius"}
          />
          <img
            src="./images/name/vika.jpg"
            alt=""
            className={cn(AboutStyles.image_grid_picture) + " box-radius"}
          />
          <img
            src="./images/name/maks-vika.jpg"
            alt=""
            className={cn(AboutStyles.image_grid_picture) + " box-radius"}
          />
          <img
            src="./images/name/maks.jpg"
            alt=""
            className={cn(AboutStyles.image_grid_picture) + " box-radius"}
          />
          <img
            src="./images/name/pes.jpg"
            alt=""
            className={cn(AboutStyles.image_grid_picture) + " box-radius"}
          />
          <img
            src="./images/name/kate.jpg"
            alt=""
            className={cn(AboutStyles.image_grid_picture) + " box-radius"}
          />
        </div>
        
        <h2 className={cn(AboutStyles.about_second_heading) + " text-type-h2"}>Проект курують</h2>
        <p className={cn(AboutStyles.about_paragraph) + " text-type-p"}>Саша Патлух, Ліза Марантіді, Олексій Гармаш, Юля Міоцен, Вадим Матвєєв.</p>
        
        <h2 className={cn(AboutStyles.about_second_heading) + " text-type-h2"}>Говоримо дякую</h2>
        <p className={cn(AboutStyles.about_paragraph) + " text-type-p"}>Маші Ярової та&nbsp;Гоші Снєгірю за&nbsp;наданий простір для проведення занять. Леоніду Марантіді та&nbsp;Лізі Кочергіній за&nbsp;відео та&nbsp;фото. Проектам &laquo;<a className="link" href="https://choosetohelp.ge/">Choose to&nbsp;help</a>&raquo; та&nbsp;&laquo;<a className="link" href="https://t.me/volunteerstbilisi" target="_blank">Волонтери Тбілісі</a>&raquo; за&nbsp;інформаційну підтримку.</p>

        <h2 className={cn(AboutStyles.about_second_heading) + " text-type-h2"}>Якщо вам є&nbsp;що&nbsp;сказати</h2>
        <p className={cn(AboutStyles.about_paragraph) + " text-type-p"}>Ми&nbsp;будемо раді, якщо нам напишуть українські підлітки, які зараз розкидані країнами через війну. Ми&nbsp;з&nbsp;радістю просто побалакаємо або опублікуємо вашу історію.</p>
        <p className={cn(AboutStyles.about_paragraph) + " text-type-p"}>Чекаемо вас у&nbsp;<a href="https://t.me/+tiiH3XpLUB03YWFi" target="_blank" className="link">телеграм-чаті</a>.</p>
      </section>
    </>
    
  )
}

export default about