import './Profile.css';

function Profile(props) {
    return (
        <div className="profile_container">
            <div className="profile_name">{ props.name }</div>
            <div className="profile_picture">
                <img src={ props.picture } alt="profile" className="profile_picture_img" />
            </div>
        </div>
    )
}

export default Profile;