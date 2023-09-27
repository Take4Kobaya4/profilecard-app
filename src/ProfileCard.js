function ProfileCard({title, handle, image}){
  // returnする前に定数として定義
  
  return (
    <div>
    <img src={image} alt="pda logo"/>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
