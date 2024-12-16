import { Button } from '@mui/material'
import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

interface Props{
    onClose:()=>void
}

const SittingComponent = (props: Props) => {

    const {onClose} = props
  return (
    <>
        <div className='sitting-title'>
            <Button sx={{minWidth: '0'}} onClick={onClose}><ArrowBackRoundedIcon sx={{fontSize: '2rem'}} /></Button>
        </div>
    </>
  )
}

export default SittingComponent