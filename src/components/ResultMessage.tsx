import React from 'react'
import { css } from '@emotion/css'
import { numOfWishesToPity, currNumOfWishes, pleaseEnterNum, passedPity } from '../constants/messages'
import { mainColors } from '../constants/colors'

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
  border: 1px solid ${mainColors.border};
  margin: 0 .6em;
  padding: .5rem;
  /* padding: .5rem 2em; */
	display: block;
	p{
    margin: .5rem 0;
    /* vertical-align: 100px; */
    font-size: 1.2rem;
    width: 20rem;
	}
`

export default ResultMessage