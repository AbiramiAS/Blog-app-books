import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllUsers } from "../../slice/UsersSlice";
import UserGeoLocation from "./UserGeoLocation";

const UserItem = () => {
  const { userId } = useParams();

  const userDetails = useSelector(selectAllUsers).find(
    (user) => user.id.toString() === userId
  );

  if (!userDetails) {
    return (
      <section>
        <h2>User details not found!</h2>
      </section>
    );
  }

  return (
    <div key="mapper">
      <section>
        <p className="text-2xl text-red-950">Username: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        <p>Phone: {userDetails.phone}</p>
        <p>Website: {userDetails.website}</p>
        <p>Company: {userDetails.company?.name}</p>
        <p>
          Address: {userDetails.address?.suite}, {userDetails.address?.street},{" "}
          {userDetails.address?.city}, {userDetails.address?.zipcode}
        </p>
      </section>

      <UserGeoLocation
        userLongitude={Number(userDetails.address?.geo.lng)}
        userLatitude={Number(userDetails.address?.geo.lat)}
      />
    </div>
  );
};

export default UserItem;
