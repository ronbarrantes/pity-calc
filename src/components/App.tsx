import React, { useEffect, useState } from 'react'
import { isNumeric, totalWishes } from '../utils/helpers'
import { pageMessage, wishMessage } from '../constants/messages'
import { css } from '@emotion/css'

interface IValues {
	wishes: string;
	page: string;
}

const App = (): JSX.Element => {
  const [values, setValues] = useState<IValues>({ page: '', wishes: '' })
  const [wishResult, setWishResult] = useState<number>(0)
  const [isAllowed, setIsAllowed] = useState<boolean>(true)
  const [isInLimit, setIsInLimit] = useState<boolean>(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const checkLimit = (wishes: string) => {
    const currWishes = parseInt(wishes) || 1
    const result = currWishes <= 6 && currWishes >= 1
    setIsInLimit(result)
  }

  const resolveResult = (page: string, wishes: string) => {
    const currWishes = parseInt(wishes) || 1
    const currPage = parseInt(page) || 1

    if(!isNumeric(wishes) || !isNumeric(page))
      setIsAllowed(false)
    else
      setIsAllowed(true)

    setWishResult(totalWishes(currPage, currWishes))
  }

  useEffect(() => {
    resolveResult(values.page, values.wishes)
    checkLimit(values.wishes)
  })

  return (
    <div className={appStyle} >
      <form>
        <label className={labelStyle}>
          <p>{pageMessage}</p>
          <input
            type="text"
            name="page"
            value={values.page}
            onChange={handleChange}
          />
        </label>

        <label className={labelStyle}>
          <p>{wishMessage}</p>
          <input
            type="text"
            name="wishes"
            value={values.wishes}
            onChange={handleChange}
          /> {!isInLimit && <span className={errorStyle}>{`Should be between 1 and 6`}</span>}
        </label>

        <p>
          {isAllowed
            ? `You have done ${wishResult} wishes`
            : 'Please enter a number'}
        </p>
      </form>
	  </div>
  )
}

const appStyle = css`
	/* background-color: green; */
	width: 100vw;
	display: grid;
	min-height: 100vh;
	grid-template-rows: 4rem 1fr 3rem;
`

const labelStyle = css`
	padding-bottom: 1em;
	display: block;
	p{
		padding-bottom: .2em;
	}
`

const errorStyle = css`
	color: red;
`
export default App
