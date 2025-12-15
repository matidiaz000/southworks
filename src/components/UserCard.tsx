
interface IUserCard {
  name: string,
  rol: string,
  estado: string,
  avatarURL: string
}

function UserCardComponent({name, rol, estado, avatarURL}: IUserCard) {
  return (
    <>
      <h2>USer Card</h2>
      {name}
      {rol}
      {estado}
      {avatarURL}
    </>
  )
}

export default UserCardComponent
