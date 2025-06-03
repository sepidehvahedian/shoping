import { useParams } from "react-router-dom";
const Profile = () => {
  const { name,id } = useParams();
  return <p>This is Profile page of {name} - {id}</p>;
};
export default Profile;
