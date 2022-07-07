import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApiData, Add_Item_qty } from "./Action";

const Home = () => {
  const Apidata = useSelector((state) => state.Reducer.items);
  console.log("myApiData", Apidata);
  const dispatch = useDispatch();
  // Fetching API======
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((response) => {
        dispatch(ApiData(response));
      });
    });
  }, []);
  return (
    // data iterating=====
    <>
      <div className="container d-flex flex-wrap justify-content-around mt-5">
        {Apidata.map((item) => (
          <>
            <div
              className="card card_block my-2 shadow p-3"
              style={{ width: 300 }}
              key={item.id}
            >
              <img src={item.image} alt="product image" width="200" />
              <div className="text-capitalize card-body">
                <h5>{item.category}</h5>
                <p>Description : {item.title}</p>
                <p>Price : {item.price} $</p>
                <p>Price : {item.price} $</p>
                <p>Price : {item.price} $</p>
                <div className=" d-flex justify-content-around">
                  <button className="btn btn-primary">order Now</button>
                  <button
                    className="btn btn-info"
                    onClick={() => dispatch(Add_Item_qty(item.id))}
                  >
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Home;
