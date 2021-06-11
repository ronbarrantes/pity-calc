import React, { useEffect, useState } from 'react'
import { isNumeric, totalWishes } from '../utils/helpers'
import { pageMessage, wishMessage } from '../constants/messages'
import InputField from './InputField'
import ResultMessage from './ResultMessage'
import { mainColors } from '../constants/colors'
import { css } from '@emotion/css'
interface IValues {
	wishes: string;
	page: string;
}

const App = (): JSX.Element => {
  const [values, setValues] = useState<IValues>({ page: '', wishes: '1' })
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
      <form className={formStyle}>
        <InputField
          title={pageMessage}
          name={'page'}
          value={values.page}
          inputType={'number'}
          min={'1'}
          max={'16'}
          handleChange={handleChange}
        />

        <InputField
          title={wishMessage}
          name={'wishes'}
          value={values.wishes}
          inputType={'range'}
          min={'1'}
          max={'6'}
          handleChange={handleChange}
          isInLimit={isInLimit}
        />

        <ResultMessage
          isAllowed={isAllowed}
          isInLimit={isInLimit}
          wishResult={wishResult}
        />
      </form>
	  </div>
  )
}

const appStyle = css`
	background-color: ${mainColors.bg};

	width: 100vw;
	display: grid;
	/* min-height: 100vh; */
  justify-content: center;
  align-content: center;
`

const formStyle = css`
  background-color: ${mainColors.main};
  display: grid;
  /* gap: 1rem; */
  grid-template-rows: 4rem 1fr 5rem;
`
export default App
