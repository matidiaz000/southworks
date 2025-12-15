import { useState } from "react";

interface IUserCard {
  name: string,
  rol: string,
  estado: string,
  avatarURL: string
}

function UserCardComponent({name, rol, estado, avatarURL}: IUserCard) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3 p-3 w-full rounded-lg bg-blue-100" onClick={() => setOpen(!open)}>
      <div className="flex justify-between justify-items-center">
        <span className="text-lg font-bold">{name}</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg>
        </span>
      </div>
      <div className={open ? 'active-class' : 'hidden'}>
        <div>Nombre de la empresa: {rol}</div>
        <div>{estado}</div>
        <div>{avatarURL}</div>
      </div>
    </div>
  )
}

export default UserCardComponent
