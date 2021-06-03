import classes from './Slogan.module.scss'

import React, { useState, useEffect } from 'react'

function Slogan() {
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
    <section className={classes.Slogan}>
      <div
        className={classes.container}
        style={{ transform: `translateX(-${offsetY * 0.3}px)` }}
      >
        <h2 className={classes.title}>Мы 100% продуктовая компания</h2>

        <p className={classes.slogan}>
          Это означает, что мы развиваем и улучшаем разрабатываемые продукты,
          они удовлетворяют реальные потребности тысяч пользователей
        </p>
      </div>
    </section>
  )
}

export default Slogan
