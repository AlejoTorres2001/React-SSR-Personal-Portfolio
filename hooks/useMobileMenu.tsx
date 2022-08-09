import { useState } from 'react'

const useMobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return [showMobileMenu, setShowMobileMenu]
}

export default useMobileMenu
