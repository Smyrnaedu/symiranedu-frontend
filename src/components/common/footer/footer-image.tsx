import Image from 'next/image'
import React from 'react'

const FooterImage = () => {
  return (
    <Image
    src={`/image/footer-image.jpg`}
    width={1920}
    height={669}
    alt="page-header"    
    />
  )
}

export default FooterImage;