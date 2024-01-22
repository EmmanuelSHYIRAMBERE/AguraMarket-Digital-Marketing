import { create } from "zustand";

export const ZustandStore = create((set)=>({
    pictures:[],

    addPictures:()=> set((state, item)=>({pictures:[...pictures, item]})),
    putPictures:()=> set((items) =>({pictures:items}))

}))