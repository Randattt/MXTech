import classes from './Products.module.scss'

import React from 'react'
import points from './img/points.png'
function Products() {
  return (
    <section className={classes.Products}>
      <div className={classes.container_left}>
        <img className={classes.points} src={points} alt="points"></img>

        <h2 className={classes.title}>Наши продукты</h2>
        <ul>
          <li className={classes.item}>
            Платёжный шлюз для приёма платежей в криптовалюте
          </li>
          <li className={classes.item}>
            Брокерское решение для ритейл инвесторов и трейдеров
          </li>
          <li className={classes.item}>
            Инвестиционная программа для ритейл инвесторов
          </li>
        </ul>
      </div>
      <div className={classes.container_right}>
        <img className={classes.points2} src={points} alt="points"></img>

        <h2 className={classes.title}>Наша экспертиза</h2>
        <ul>
          <li className={classes.item}>
            Разработка высоконагруженных финтех решений любой сложности
          </li>
          <li className={classes.item}>
            Разработка blockchain решений, смарт-контрактов на базе открытых
            протоколов
          </li>
          <li className={classes.item}>
            PR сопровождение и маркетинг финтех продуктов на глобальном рынке
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Products
