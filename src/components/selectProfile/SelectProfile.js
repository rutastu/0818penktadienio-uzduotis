import './selectProfile.css'
import Avatar from './Avatar.png'
import Plus from './Plus.png'


const SelectProfile = () => {
  return (
    <div className="centeredContainer">
    <div class="container">
      <h1>Who's watching?</h1>
        <ul>
          <li className='user'>
            <div className='wholeAvatar'>
              <img src={Avatar} className="userAvatar" alt="avatar" />
              <span>User</span>
            </div>
          </li>
          <li className='user'>
            <div className='wholeAvatar'>
              <img src={Plus} className="addProfile" alt="plus" />
              <span>Add Profile</span>
            </div>
          </li>
        </ul>
    </div>
    </div>
  )
}

export default SelectProfile