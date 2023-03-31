import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";
import { modificationState } from "../models/modificationState";
import { todoModel } from "../models/todo";


export class ModificationStores implements modificationState {
    open: boolean;
    data: todoModel;

    constructor() {
        this.open = false;
        this.data = {entityId: '',
        name: '',
        description: '',
        createdAt: new Date(),
        done: false,
        favorited: false}
        makeObservable(this, {
            open: observable,
            data: observable,
            changeOpenState: action
        })
    }

    changeOpenState(state: boolean) {
        this.open = state
        console.log(this.open)
    }
}

const ModificationStoresContext = createContext(new ModificationStores());

export default ModificationStoresContext;