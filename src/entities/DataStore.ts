import {makeAutoObservable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface IDataStore {
    name: string,
    mode: string,
    description: string,
    photo: string | null
}

export class DataStore {
    private currentData: IDataStore[] = [];

    constructor() {
        makeAutoObservable(this);
        this.loadData()

        this.setData = this.setData.bind(this);
    }

    async loadData() {
        try {
            const storedData = await AsyncStorage.getItem("storedData");

            // Если данные существуют, парсим их и сохраняем в currentData
            if (storedData) {
                this.currentData = JSON.parse(storedData);
            }
        } catch (error) {
            console.error("Ошибка загрузки данных из AsyncStorage", error);
        }
    }

    async saveData() {
        try {
            // Преобразуем данные в строку JSON и сохраняем в AsyncStorage
            await AsyncStorage.setItem("storedData", JSON.stringify(this.currentData));
        } catch (error) {
            console.error("Ошибка сохранения данных в AsyncStorage", error);
        }
    }

    get getData() {
        return this.currentData;

    }

    async setData(data: IDataStore) {
        this.currentData?.push(data)
        await this.saveData();
    }
}