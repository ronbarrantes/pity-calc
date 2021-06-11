import React from 'react'
import { css } from '@emotion/css'
import { numOfWishesToPity, currNumOfWishes, pleaseEnterNum, passedPity } from '../constants/messages'

interface IResultMessage {
	isAllowed: boolean;
	isInLimit: boolean;
	wishResult: number;
}

const ResultMessage = (props: IResultMessage): JSX.Element => {
  const { isAllowed, isInLimit, wishResult } = props

  const wishMessage = (wishResult: number): string => {
    const currWish = 90-wishResult

    if(currWish > 0)
      return numOfWishesToPity.replace('$1', `${currWish}`)

    else
      return passedPity
  }

  return (
    <>
      <p>
        {isAllowed && isInLimit
          ? currNumOfWishes.replace('$1', `${wishResult}`)
          : pleaseEnterNum}
      </p>
      {isAllowed && isInLimit && <p>{wishMessage(wishResult)}</p>}
    </>)
}

const resultMessageStyle = css`
  border: 1px dashed green;
	padding-bottom: 1em;
	display: block;
	p{
		padding-bottom: .2em;
	}
`

export default ResultMessage