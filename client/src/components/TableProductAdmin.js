import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const TableProductAdmin = () => {
  const { allUsers } = useSelector((state) => state.user);
  console.log(allUsers);
  //dispatch getallproducts
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  //useeffect
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="users-list">
   
   <div>
   <h1> Users :</h1>
      {allUsers &&
        allUsers.map((el) => (
          <div key={el}>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">FullName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {" "}
                  <th scope="row">{el.fullName}</th>
                  <td>{el.email}</td>
                  <td>{el.adresse}</td>
                  <td>{el.phone}</td>
                  <td>{el.userRoles}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>   
   <div>
   <div className="list-products">
        <h1> Prodcuts :</h1>
                {products &&
                  React.Children.toArray(
                    products.map((el) => <ProductCard product={el} />)
                  )}
              </div>
     
    </div>
    </div>

  );
};

export default TableProductAdmin;
