import { useContext } from "react";
import GlobalContext from "../util/GlobalContext";

export default function Info() {
  const context = useContext(GlobalContext);
  const data = context.arrUsers;
  console.log(data);
  return (
    <>
      <div className="table-responsive-md">
        <table className="table table-bordered table-hover table-striped table-info">
          <thead>
            <tr className="tr">
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Gender</th>
              <th scope="col">Role</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              console.log(item, i);
              return (
                <tr key={i}>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.username}</td>
                  <td>{item.gender}</td>
                  <td>{item.role}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
