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
    <div className={resultMessageStyle}>
      <p>
        {isAllowed && isInLimit
          ? currNumOfWishes.replace('$1', `${wishResult}`)
          : pleaseEnterNum}
      </p>
      {isAllowed && isInLimit && <p>{wishMessage(wishResult)}</p>}
    </div>
  )
}

const resultMessageStyle = css`
  border: 1px dashed green;
	padding-bottom: 1em;
	display: block;
	p{
		padding-bottom: .2em;
    width: 15rem;
	}
`

export default ResultMessage