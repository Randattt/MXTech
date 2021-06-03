import classes from './Navigation.module.scss'
import classNames from 'classnames'
import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Navigation(props) {
  const [scrollNav, setScrollNav] = useState(false)

  const scrollFunc = () => {
    if (window.scrollY >= 700) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc)

    return () => {
      window.removeEventListener('scroll', scrollFunc)
    }
  })

  return (
    <div
      className={
        scrollNav
          ? classNames(classes.Navigation, classes.scrolled)
          : classes.Navigation
      }
    >
      <p className={classes.logo}>
        MXT<span>ech</span>
      </p>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link className={classes.links} smooth to="#job">
            Вакансии
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.links} smooth to="#contacts">
            Контакты
          </Link>
        </li>
      </ul>
      <div
        className={props.isOpen ? classes.burgerOpen : classes.burger}
        onClick={props.menuBundle}
      ></div>
    </div>
  )
}

export default Navigation
