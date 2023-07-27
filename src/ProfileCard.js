function ProfileCard({ title, handle, pic }) {
  return (
    <div className="card" className="container is-fluid">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={pic}></img>
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4"> {title} </p>
            <p className="subtitle is-6">{handle} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
