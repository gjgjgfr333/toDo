import {createContext, useContext} from "react";
import {DataStore} from "@/src/entities/DataStore";

export class RootStore {
    dataStore: DataStore;

    constructor() {
        this.dataStore = new DataStore();
    }
}

export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext)