import { useState } from "react";


export const TwitterFollowCard = ({userName = 'dessconocido', name, initialisFollowing}) => {


    const [isFollowing, setisFollowing] = useState(initialisFollowing);

    const imageSrc = `https://unavatar.io/${userName}`;
    const texto = isFollowing ? 'Siguiendo': 'Seguir'
    const botonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
      setisFollowing(!isFollowing);
    }

  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        src={imageSrc} alt="foto de perfil" />
        <div className='tw-followCard-info '>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
        </header>
        <aside>
            <button className={botonClassName} onClick={handleClick}>
              <span className='tw-followCard-text'>{texto}</span>
              <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}
