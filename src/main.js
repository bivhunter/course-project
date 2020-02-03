import './css/style.css';
import { MainComponent } from "./js/components/MainComponent.js";
import { LoginService } from './js/services/LoginService.js';
import { initDB } from "./js/store/DB.js";


if (module.hot) {
    module.hot.accept();
}

console.log('init');

const loginService = new LoginService();

loginService.addUser({
    username: "user1",
    email: "email1",
    password: "1"
});


  /*  .
    then(res => console.log('res', res)).
    catch(res => console.log('error', res));*/


//let dbService;

//initDB().then(() => console.log('initDB'));
/*async function initDB(  ) {


    dbService = new DbService( db );

    await dbService.add( {
        text: "todo1",
        completed: false,
        _creator: 1
    } );

    await dbService.add( {
        text: "todo1",
        completed: false,
        _creator: 1
    } );

    const res = await dbService.getAll();
    console.log( res )

};*/
//initDB();







/*
const application = new MainComponent({
    anchor : document.body
});
*/
