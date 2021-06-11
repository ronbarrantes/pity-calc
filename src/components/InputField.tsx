import React from 'react'
import { css } from '@emotion/css'
import { limitErrorMessage } from '../constants/messages'

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
      <>{inputType==='range' && value}</>
    </label>
  )
}

const labelStyle = css`
  border: 1px dashed green;
	padding-bottom: 1em;
	display: block;
	p{
		padding-bottom: .2em;
	}
`

const errorStyle = css`
	color: red;
`

export default InputField