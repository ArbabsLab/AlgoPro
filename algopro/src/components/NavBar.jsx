import React, {useState} from 'react'


export default function NavBar() {
  const [isVisible, setVisible] = useState(false)

  const ExpandMenu = (event) => {
    setVisible(!isVisible)
  }

  return (
    <nav className='navbar'>
        <a href="homepage" className='site-title'>AlgoPro</a>
        <ul>
            <li>
                <a href='homepage'>Home</a>
            </li>
            <li>
                <a href='sortpage'>Sort</a>
            </li>
            <li>
                <a href='traversepage'>Traverse</a>
            </li>
        </ul>
    </nav>
  )
}
