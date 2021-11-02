import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from '../../components/Card'
import FormControl from '../../components/FormControl'

import './style.scss'

const END_POINT = 'http://localhost:4000/personas'

const Home = () => {

  const [data, setData] = useState([])
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [ciudad, setCiudad] = useState('')

  useEffect(() => {
    getPersons()
  }, [])

  const getPersons = async () => {
    try {
      const response = await axios.get(`${END_POINT}`)
      const personas = response.data.map((person) => ({
        ...person,
        edit: true
      }))
      console.log('response', personas)
      setData(personas)
    } catch (error) {
      console.log(error)
    }
  }

  const cleanForm = () => {
    setNombre('')
    setApellido('')
    setEdad('')
    setCiudad('')
  }

  const sendPerson = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${END_POINT}`, {
        nombre,
        apellidos,
        edad,
        ciudad,
      })
      cleanForm()
      getPersons()
    } catch (error) {
      console.log(error)
    }
  }

  const onChange = (e, cb) => {
    const { target: { value } } = e
    cb(value)
  }

  const onChangeData = () => {

  }

  return (
    <div className="p_home__wrapper">
      <h3>Formulario</h3>
      <form className="p_home_form" onSubmit={sendPerson}>
        <FormControl
          label="Nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => onChange(e, setNombre)}
        />
        <FormControl
          label="Apellido"
          name="apellidos"
          value={apellidos}
          onChange={(e) => onChange(e, setApellido)}
        />
        <FormControl
          label="Edad"
          name="edad"
          value={edad}
          onChange={(e) => onChange(e, setEdad)}
        />
        <FormControl
          label="Ciudad"
          name="ciudad"
          value={ciudad}
          onChange={(e) => onChange(e, setCiudad)}
        />
        <input type="submit" value="Guardar" />
      </form>
      <div className="p_home__wrapper_card">
        {
          data.length > 0 &&
          data.map((person) => (
            <Card
              onChange={onChange}
              label1={{ label: "Nombres", value: person.nombre }}
              label2={{ label: "Apellidos", value: person.apellidos }}
              label3={{ label: "Edad", value: person.edad }}
              label4={{ label: "Ciudad", value: person.ciudad }}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
