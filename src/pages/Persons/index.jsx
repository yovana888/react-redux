import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { list } from '../../actions/persons/list'
import { list2 } from '../../actions/pets/list'
const Persons = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(list())
    dispatch(list2())
  }, [dispatch])

  const person = useSelector((store) => store.person)
  
  const pet = useSelector((store) => store.pet) 
  return (
    <>
      <div>
      Persons:
      <ul>
        {!person.loading && person.data.length > 0 ?
          person.data.map((d) => (
            <li>{`${d.nombres} ${d.apellidos}`}</li>
          ))
        : <h4>Loading ..!</h4>}
      </ul>
      </div>
      <div>
          Mascotas:
          <ul>
            {!pet.loading2 && pet.data2.length > 0 ?
              pet.data2.map((d) => (
                <li>{`${d}`}</li>
              ))
            : <h4>Loading ..!</h4>}
          </ul>
      </div>
    </>
  )
}

export default Persons
