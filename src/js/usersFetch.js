export default (num, callback) => {
    let url = "https://randomuser.me/api/?results=" + num;
    let fetchPromise = fetch(url); //sends fetch request
    let letjsonPromise = fetchPromise.then(response => response.json()); //takes fetch reponse, asks to ==>json

    jsonPromise.then(json => callback(json));//when json'd send to cb function


};