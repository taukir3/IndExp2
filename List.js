import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Remove_item, Increase_Qty } from "./Action";

const List = () => {
 useEffect(()=>{
  
 })

  let total_price = "";
  const AddData = useSelector((state) => state.Reducer.AddQty);
  console.log("AddData", AddData);
  const TotalProduct_Qty = useSelector((state) => state.Reducer.product_Qty);
  console.log("TotalProduct_Qty", TotalProduct_Qty);

  // unique data iterating====================
  const uniData = AddData.reduce((finalData, item) => {
    let obj = finalData.find((elem) => elem.id === item.id);
    if (obj) {
      return finalData;
    }
    return finalData.concat([item]);
  }, []);
  console.log("uniData", uniData);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid mt-4 block">
      <div className="">Useeffect</div>
        <div className=" CalCulation_block p-2">
          <p className="h5 ">Your Total Product : {uniData.length}</p>
          <p>
            Total Price :
            {
              (total_price = uniData
                .reduce((acc, tp) => (acc += tp.price), 0)
                .toFixed(2))
            }
            $
          </p>
        </div>
        {/* Data iterating================= */}
        <div className=" p-2 " style={{ width: 700 }}>
          {uniData.map((item) => {
            return (
              <>
                <div
                  className="shadow mb-2 p-4 d-flex w-100"
                  style={{ width: 300 }}
                  key={item.id}
                >
                  <div className="">
                    <img width="150" src={item.image} />
                  </div>
                  <div className="card-body mx-2  ">
                    <h6>
                      {item.title}, Rating:{item.rating.rate}
                    </h6>
                    <p>{item.description}</p>
                    <h6>Price : {item.price}$</h6>
                    <div className="d-flex ">
                      <button
                        className="btn btn-danger btn_remove"
                        onClick={() => dispatch(Remove_item(item.id))}
                      >
                        Remove
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() => dispatch(Remove_item(item.id))}
                      >
                        Buy Now
                      </button>
                      <p className="mx-2 border border-2 p-2">
                        Total Price: {item.price * item.p_Qty} $
                      </p>
                      <p className="mx-2 border border-2 p-2">
                        Quantity: {item.p_Qty}
                      </p>
                      <button
                        className="btn btn-secondary"
                        onClick={() => dispatch(Increase_Qty(item.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;