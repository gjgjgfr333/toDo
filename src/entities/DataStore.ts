import {makeAutoObservable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface IDataStore {
    name: string,
    mode: string,
    description: string,
    photo: string | null,
    postId: string,
    dataCreate: string
}

export class DataStore {
    private currentData: IDataStore[] = [];
    private isOpenModal: boolean = false;

    constructor() {
        makeAutoObservable(this);
        this.loadData()

        this.setData = this.setData.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.deleteAllPosts = this.deleteAllPosts.bind(this);
        this.setIsOpenModal = this.setIsOpenModal.bind(this);

    }

    get getIsOpenModal(): boolean {
        return this.isOpenModal;
    }

    setIsOpenModal(value: boolean) {
        this.isOpenModal = value;
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

    async deletePost(postId: string) {
        const data = this.currentData

        this.currentData = data.filter(post => post.postId !== postId);
        await this.saveData();
    }

    async deleteAllPosts() {
        this.currentData = []
        await this.saveData();
    }
}