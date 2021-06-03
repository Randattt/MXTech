import classes from './Values.module.scss'

import React from 'react'
import boat from './img/boat.png'

function Values() {
  return (
    <div className={classes.Values}>
      <div className={classes.container}>
        <h2 className={classes.title}>Наши ценности</h2>
        <div className={classes.down}>
          <div className={classes.img_container}>
            <img src={boat} alt="изображение лодки"></img>
          </div>
          <div className={classes.first}>
            <h3 className={classes.smallerTitle}>100% удаленная работа</h3>
            <p className={classes.text}>
              Мы считаем, что люди должны работать в том месте,
              где им максимально комфортно, а не там где есть офис. Поэтому
              с момента основания мы являемся приверженцами удалённой работы.
              Все сотрудники работают в удобном для себя месте, а сэкономленные
              на арненде офисов средства мы используем для тимбилдингов
              в приятных местах
            </p>
          </div>
          <div className={classes.second}>
            <h3 className={classes.smallerTitle}>
              Отсутствие жесткой иерархии
            </h3>
            <p className={classes.text}>
              Любой член нашей команды может открыто высказаться по любому
              вопросу, непосредственно повлиять на принимаемые решение и даже
              на вектор развития компании. SCRUM для нас не формальность —
              мы действительно работаем по нему
            </p>
          </div>
          <div className={classes.third}>
            <h3 className={classes.smallerTitle}>
              Возможности и ответственность
            </h3>
            <p className={classes.text}>
              Мы поощряем инициативу и даём возможности роста.
              У нас не получиться раствориться в коллективе — каждый член
              команды на виду, у каждого большие возможности и ответственность,
              каждый влияет на конечный результат и разделяет наш успех
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values
