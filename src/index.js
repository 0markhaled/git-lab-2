import "./css/styles.css";
import getUsers from '.js/usersFetch';
import templateUser from './hbs/user.hbs';





let appEl = document.getElementById("app");

// appEl.innerHTML = "<h1>Hello Bob</h1>";
// appEl.innerHTML = "<h1>Hello Boberson</h1>";

window.onload = async () => {
    let cb = json => {
        console.log(json);
        appEl.innerHTML = templateUser()
    };

    getUsers(3, cb);
};


