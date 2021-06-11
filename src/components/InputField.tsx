import React from 'react'
import { css } from '@emotion/css'
import { limitErrorMessage } from '../constants/messages'
import { mainColors } from '../constants/colors'

interface IInputField {
	title: string;
	name: string
	value: string;
  min?: string;
  max?: string;
  inputType?: string;
	isInLimit?: boolean;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: IInputField): JSX.Element => {
  const {
    title, name,
    inputType, value,
    min, max,
    handleChange: onChangeHandle, isInLimit } = props
  const isInLimitExist = isInLimit !== undefined
  return (
    <label className={labelStyle}>
      <p>{title}</p>
      <span>{inputType==='number' && 'Page number '}</span>
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={onChangeHandle}
        min={min}
        max={max}
        // step={1}
      /> {isInLimitExist
			&& !isInLimit
			&& <span className={errorStyle}>{limitErrorMessage}</span>}
      <span>{inputType==='range' && value}</span>
    </label>
  )
}

const labelStyle = css`
	display: block;
  border: 1px solid ${mainColors.border};
  margin: 0 .6em;
  padding: .5rem;
  /* margin: 1px */

	p, span{
    margin: .2rem 0;
    font-size: 1.2rem;
	}
`

const errorStyle = css`
	color: red;
`

export default InputField