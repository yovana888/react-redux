import React from 'react'

import FormControl from '../FormControl'

import './style.scss'

const Card = ({ onChange, label1, label2, label3, label4 }) => {
  return (
    <div className="c_card__wrapper">
      <form className="c_card__form">
        <FormControl
          onChange={onChange}
          label={label1.label}
          value={label1.value}
        />
        <FormControl
          onChange={onChange}
          label={label2.label}
          value={label2.value}
        />
        <FormControl
          onChange={onChange}
          label={label3.label}
          value={label3.value}
        />
        <FormControl
          onChange={onChange}
          label={label4.label}
          value={label4.value}
        />
      </form>
    </div>
  )
}

export default Card
