import classes from './Welcome.module.scss'
import { HashLink as Link } from 'react-router-hash-link'

import React, { useState, useEffect } from 'react'

function Welcome() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <section className={classes.Welcome}>
      <div style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
        <h1 className={classes.title}>
          Разрабатываем и поддерживаем финтех продукты для глобальных рынков
          с 2017 года
        </h1>
        <p className={classes.slogan}>
          Нашими продуктами пользуются тысячи пользователей по всему миру
        </p>
        <Link className={classes.button} smooth to={'#contacts'}>
          Стать членом команды
        </Link>
      </div>
    </section>
  )
}

export default Welcome
