const iState={
    items:[],
    AddQty:[],
    product_Qty:0,
    pr_price:0
};
export const Reducer = (state=iState,action)=>{
    switch(action.type){
        case "Api_To_Store":
            const {type,data}=action
            let tData=data.map((item)=>{
                let p_Qty=1
                let  t_price=0
                return {...item,p_Qty:p_Qty,t_price:t_price}
            })
            return {
                ...state,
                items:tData
                    }
        case "Add_Qty":
            const TotalQty=state.items.filter((elem)=>elem.id===action.id)
                return {
                    ...state,
                    AddQty:[...state.AddQty,...TotalQty]
                        }
            
        case "Remove_Product":
            const RemoveQty=state.AddQty.filter((elem)=>elem.id!==action.id)
                return{
                     ...state,
                     AddQty:RemoveQty
                       }
        case "Inc_numQty" :
            // const ProductQty=state.AddQty.find((elem)=>elem.id===action.payload)
            const Product_index=state.AddQty.findIndex((elem)=>elem.id===action.payload)
            const Pr_qty=state.AddQty.find((elem)=>elem.id===action.payload)
            Pr_qty.p_Qty+=1
            state.AddQty[Product_index]=Pr_qty
            
            return {
                ...state,
                product_Qty:Pr_qty
            }             

        default:return state
        }
    };

