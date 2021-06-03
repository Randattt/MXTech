import classes from './Stack.module.scss'

import React from 'react'

function Stack() {
  return (
    <div className={classes.Stack}>
      <h2 className={classes.title}>Наш технологический стек</h2>
      <div className={classes.container}>
        <div>
          <h3 className={classes.titles}>Языки программирования</h3>
          <ul className={classes.list}>
            <li className={classes.item}>Java</li>
            <li className={classes.item}>Dart</li>
            <li className={classes.item}>JavaScript</li>
          </ul>
        </div>
        <div>
          <h3 className={classes.titles}>DevOps</h3>
          <ul className={classes.list}>
            <li className={classes.item}>Docker</li>
            <li className={classes.item}>Kubernetis</li>
            <li className={classes.item}>Cloud servers</li>
          </ul>
        </div>
        <div>
          <h3 className={classes.titles}>Фронтэнд</h3>
          <ul className={classes.list}>
            <li className={classes.item}>ReactJS</li>
            <li className={classes.item}>Angular</li>
          </ul>
        </div>
        <div>
          <h3 className={classes.titles}>Базы данных</h3>
          <ul className={classes.list}>
            <li className={classes.item}>Redis</li>
            <li className={classes.item}>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Stack
