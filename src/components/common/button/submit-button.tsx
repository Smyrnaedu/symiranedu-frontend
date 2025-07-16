import { swAlert } from '@/helpers/swal';
import React from 'react'
import { Button, ButtonProps } from 'react-bootstrap'

const SubmitButton:React.FC<ButtonProps> = (props) => {

     const handleSubmit = async () => {
        
  };

  return (
     <Button {...props} onClick={handleSubmit}>
      <i className="pi pi-sign-out"></i>&nbsp; Logout
    </Button>

  )
}

export default SubmitButton