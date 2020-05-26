import {decorate, observable} from "mobx";

class ToDo {

    id = Math.random();
    //

    @observable
    title = "ddd";

    @observable
    finished = true;

    //
    constructor(props) {
        //

    }
}

//


class ToDo001 {

    id = Math.random();
    //
    title = "wsl";
    //
    finished = true;

    //
    constructor(props) {
    }

}

//

decorate(ToDo001, {
    //
    title: observable,
    finished: observable
})