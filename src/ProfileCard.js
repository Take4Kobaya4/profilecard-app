function ProfileCard({title, handle, image}){
  // returnする前に定数として定義
  
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo"/>
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">

        </div>
        <p className="title is-4">Title is {title}</p>
        <p className="subtitle is-6">Handle is {handle}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
