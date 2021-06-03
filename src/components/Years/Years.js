import classes from './Years.module.scss'

import React from 'react'

function Years() {
  return (
    <div className={classes.Years}>
      <div className={classes.container}>
        <div className={classes.left}>
          <h3 className={classes.title}>За 4 года на рынке </h3>
          <p className={classes.text}>
            мы создали успешные продукты, стабильно приносящие прибыль и кратно
            растущие от месяца к месяцу, мы не зависим от потрясений локального
            рынка
          </p>
        </div>
        <div className={classes.img}></div>
      </div>
    </div>
  )
}

export default Years
