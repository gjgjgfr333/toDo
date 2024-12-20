import {makeAutoObservable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IDataStore {
    name: string,
    mode: string,
    description: string,
    photo: string | null,
    postId: string,
    dataCreate: string
}

export class DataStore {
    private currentData: IDataStore[] = [];

    constructor() {
        makeAutoObservable(this);
        this.loadData()

        this.setPostData = this.setPostData.bind(this);
        this.deletePostData = this.deletePostData.bind(this);
        this.deleteAllPostsData = this.deleteAllPostsData.bind(this);
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

    get getPostData() {
        return this.currentData;
    }

    async setPostData(data: IDataStore) {
        this.currentData?.push(data)
        await this.saveData();
    }

    async deletePostData(postId: string) {
        const data = this.currentData

        this.currentData = data.filter(post => post.postId !== postId);
        await this.saveData();
    }

    async deleteAllPostsData() {
        this.currentData = []
        await this.saveData();
    }
}