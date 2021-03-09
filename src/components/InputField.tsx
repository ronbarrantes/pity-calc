import React from 'react'
import { css } from '@emotion/css'
import { limitErrorMessage } from '../constants/messages'

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
        type="number"
        name={name}
        value={value}
        onChange={onChangeHandle}
      /> {isInLimitExist
			&& !isInLimit
			&& <span className={errorStyle}>{limitErrorMessage}</span>}
    </label>
  )
}

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

export default InputField