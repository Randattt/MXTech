import classes from './Connect.module.scss'

import React, { useState } from 'react'
import classNames from 'classnames'

function Connect() {
  // const [isOpen, setisOpen] = useState(false)
  const [Cards, setCards] = useState(() => {
    return [
      {
        id: 1,
        open: false,
        search: 'All world',
        name: 'QA Engineer',
        salary: '90',
      },
      {
        id: 2,
        open: false,
        search: 'All world',
        name: 'PHP | Golang разработчик',
        salary: '70',
      },
      {
        id: 3,
        open: false,
        search: 'All world',
        name: 'Go Developer',
        salary: '80',
      },
      {
        id: 4,
        open: false,
        search: 'All world',
        name: 'Senior Frontend Developer (React)',
        salary: '150',
      },
    ]
  })

  const openHandler = (num) => {
    const cards = [...Cards]
    const card = cards[num - 1]

    if (Cards[num - 1].open) {
      cards.map((card) => {
        return (card.open = false)
      })
    } else {
      cards.map((card) => {
        return (card.open = false)
      })

      card.open = !card.open
    }

    cards[num - 1] = card
    setCards([...cards])
  }
  return (
    <div className={classes.Connect} id="job">
      <h2 className={classes.title}>Готов к нам присоединиться?</h2>
      <ul className={classes.list}>
        {Cards.map((card) => {
          return (
            <React.Fragment key={`${card.id}-${card.name}`}>
              <li
                className={
                  card.open
                    ? classNames(classes.item, classes.open)
                    : classNames(classes.item)
                }
                onClick={openHandler.bind(this, card.id)}
              >
                <div className={classes.itemTop}>
                  <p className={classes.search}>{card.search}</p>
                  <p className={classes.name}>{card.name}</p>
                  <p className={classes.salary}>{card.salary} 000 ₽</p>
                </div>
                <div className={classes.itemBottom}>
                  <p className={classes.itemText}>
                    Ищем опытного backend-разработчика (PHP c опытом работы в
                    высоконагруженных проектах) для создания и поддержки
                    продуктовых сервисов нашей компании. Тебе предстоит
                    разрабатывать и поддерживать go-сервисы команды, активно
                    участвовать в переносе legacy кода с PHP на Go, принимать
                    участие во всех архитектурных решениях.{' '}
                  </p>
                  <ul className={classes.itemList}>
                    <li className={classes.itemItems}>Go.1.13</li>
                    <li className={classes.itemItems}>MySQL</li>
                    <li className={classes.itemItems}>Redis</li>
                    <li className={classes.itemItems}>RabbitMQ</li>
                    <li className={classes.itemItems}>Kafka</li>
                    <li className={classes.itemItems}>PHP7</li>
                    <li className={classes.itemItems}>Git</li>
                  </ul>
                </div>
              </li>
              <hr></hr>
              <div></div>
            </React.Fragment>
          )
        })}
      </ul>
      <p className={classes.text} id="contacts">
        Направляй своё резюме с указанием вакансии и кратким сопроводительным
        письмом на почту
      </p>
      <a className={classes.mail} href="mailto:cv@mxtech.ru">
        cv@mxtech.ru
      </a>
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
      <p className={classes.rights}>© 2017-2021 MXTech</p>
    </div>
  )
}

export default Connect
