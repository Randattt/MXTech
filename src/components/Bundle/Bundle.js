import classes from './Bundle.module.scss'
import { HashLink as Link } from 'react-router-hash-link'

import React from 'react'

function Bundle(props) {
  return (
    <div
      className={props.isOpen ? classes.BundleOpen : classes.Bundle}
      onClick={props.menuBundle}
    >
      <ul className={classes.list}>
        <li className={classes.item} onClick={props.menuBundle}>
          <Link className={classes.links} smooth to="#job">
            Вакансии
          </Link>
        </li>
        <li className={classes.item} onClick={props.menuBundle}>
          <Link className={classes.links} smooth to="#contacts">
            Контакты
          </Link>
        </li>
      </ul>
      <ul className={classes.socialList}>
        <li className={classes.socialItem}>
          <a
            className={classes.socialLinks}
            href="https://ru-ru.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            FB
          </a>
        </li>
        <li className={classes.socialItem}>
          <a
            className={classes.socialLinks}
            href="https://vk.com/roomaanoov"
            target="_blank"
            rel="noreferrer"
          >
            VK
          </a>
        </li>
        <li className={classes.socialItem}>
          <a
            className={classes.socialLinks}
            href="https://github.com/Randattt"
            target="_blank"
            rel="noreferrer"
          >
            GH
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Bundle
