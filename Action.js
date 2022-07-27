export const ApiData=(data)=>{
    return {
        type: "Api_To_Store",
        data:data
    }
}
export const Add_Item_qty =(id)=>{
    return {
        type:"Add_Qty",
        id
    }

}
 export const Remove_item =(id)=>{
    return{
        type:"Remove_Product",
        id:id
    }
 }
 export const Increase_Qty=(id)=>{
    return {
        type :"Inc_numQty",
        payload:id
    }
 }
