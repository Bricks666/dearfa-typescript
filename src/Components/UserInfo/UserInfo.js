import AboutUser from "../AboutUser/AboutUser";
import Picture from "../Picture/Picture";
import "./UserInfo.css";

function UserInfo(props) {
  return (
    <div className={props.className + " user-info"}>
      <h2 className="user-info__full-name">Цыганков Кирилл</h2>
      <Picture
        className="user-info__photo"
        oneXUrl=""
        twoXUrl=""
        alt="Ваша аватарка"
      />
      <AboutUser className="user-info__about-user" />
    </div>
  );
}

export default UserInfo;
