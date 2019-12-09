import {eventBus} from "./eventService.js";

class CounterService {
    constructor() {
        this.onInit();
    }

    onInit() {
        this.addListeners();
    }

    addListeners() {
        eventBus.subscribe("changedData", (data) => {
            const res = this.countTasks(data);
            eventBus.publish('countedTasks', res);
        })
    }

    countTasks(taskList) {

        let [doneNum, notDoneNum] = [0, 0];

        console.log(taskList);
        taskList.forEach((item) => {
           if(item.completed) {
               doneNum ++;
           } else {
               notDoneNum ++;
           }
        });

        return {
            allNum: taskList.length,
            doneNum: doneNum,
            notDoneNum: notDoneNum
        };
    }




}

export const counterService = new CounterService();