import React from 'react'
import { numOfWishesToPity, currNumOfWishes, pleaseEnterNum } from '../constants/messages'

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

export default ResultMessage