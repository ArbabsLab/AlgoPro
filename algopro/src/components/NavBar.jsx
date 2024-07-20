import React, {useState} from 'react'


export default function NavBar() {
  const [isVisible, setVisible] = useState(false)

  const ExpandMenu = (event) => {
    setVisible(!isVisible)
  }

  return (
    <nav className='navbar'>
        <a href="#" className='site-title'>AlgoPro</a>
        <ul>
            <li>
                <a href='#'>Sort</a>
            </li>
            <li>
                <a href='#'>Traverse</a>
            </li>
        </ul>
    </nav>
  )
}
