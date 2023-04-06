const ProfilePictureComponent = ({user}) => {
    return (
        <>
            <button className="profile-pic" onClick="document.getElementById('choose-profile-picture').click();">
                <img className="profile-picture larger float-left" alt = "" 
                //  style={{width: '70%', height: 'auto'}}
                 src={user.image} alt="" />
                <input type="file" id="choose-profile-picture" />
            </button>
        </>
    )
}

export default ProfilePictureComponent;