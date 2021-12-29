import { Box, styled } from '@material-ui/core'
import React from 'react'
const StyledWellcomeMessage=styled(Box)({
    marginBottom:1,
})
interface wellcomeMessageProps{
    position:string,
    country?:string,
}
const WellcomeMessage = ({position,country="vietnam"}:wellcomeMessageProps) => {
    return (
        <StyledWellcomeMessage >
            wellcome { position} from { country }
        </StyledWellcomeMessage>
    )
}

export default WellcomeMessage
