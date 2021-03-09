import React, { useEffect, useState } from 'react'
import { isNumeric, totalWishes } from '../utils/helpers'
import { pageMessage, wishMessage, numOfWishesToPity, currNumOfWishes, pleaseEnterNum } from '../constants/messages'
import { css } from '@emotion/css'

interface IValues {
	wishes: string;
	page: string;
}

interface IInputField {
	title: string;
	name: string
	value: string;
	isInLimit?: boolean;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: IInputField): JSX.Element => {
  const { title, name, value, handleChange: onChangeHandle, isInLimit } = props
  const isInLimitExist = isInLimit !== undefined
  return (
    <label className={labelStyle}>
      <p>{title}</p>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChangeHandle}
      /> {isInLimitExist
					&& !isInLimit
					&& <span className={errorStyle}>{`Should be between 1 and 6`}</span>}
    </label>
  )
}

interface IResultMessage {
	isAllowed: boolean;
	isInLimit: boolean;
	wishResult: number;
}

const ResultMessage = (props: IResultMessage): JSX.Element => {
  const { isAllowed, isInLimit, wishResult } = props
  return (
    <>
      <p>
        {isAllowed && isInLimit
          ? currNumOfWishes.replace('$1', `${wishResult}`)
          : pleaseEnterNum}
      </p>{isAllowed && isInLimit && <p>{numOfWishesToPity.replace('$1', `${90-wishResult}`)}

      </p>}
    </>)
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
        <InputField
          title={pageMessage}
          name={'page'}
          value={values.page}
          handleChange={handleChange}
        />

        <InputField
          title={wishMessage}
          name={'wishes'}
          value={values.wishes}
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
