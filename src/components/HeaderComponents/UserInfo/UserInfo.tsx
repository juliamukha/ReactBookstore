import './UserInfo.scss';



export default function UserInfo({ userName }: { userName: string }) {
  function getUserLogo(userName: string): string {
    let userLogo = userName[0] + userName[userName.indexOf(' ') + 1];
    return userLogo;
  }

  return (
    <>
      <div className='user-info'>
        <p className='user-info__logo'>{getUserLogo(userName)}</p>
        <p className='user-info__name'>{userName}</p>
      </div>
    </>
  );
}
