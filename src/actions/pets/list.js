export const PET_LIST = 'PET_LIST'
export const PET_LOADING = 'PET_LOADING'
export const PET_ERROR = 'PET_ERROR'

export const data2 = (data) => ({
  type: PET_LIST,
  data
})

export const loading2 = (loading) => ({
  type: PET_LOADING,
  loading
})

export const error2 = (error) => ({
  type: PET_ERROR,
  error
})

export const list2 = () => {
  return (dispatch) => {
    dispatch(loading2(true))
    dispatch(error2(null))
    fetch(`${process.env.REACT_APP_SERVER}/mascotas`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      dispatch(data2(response))
    })
    .catch((e) => {
      console.log(e)
      dispatch(error2(e))
    })
    .finally(() => dispatch(loading2(false)))
  }
}