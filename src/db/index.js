import firebase from './fire';

const db = firebase.database();


function updateStartTime(session, start_time) {
    db.ref(`/${session}/`).set({'start_time': start_time});
}

function getStartTime(session) {
    return new Promise((resolve, reject) => {
        db.ref(`/${session}/`).once('value')
        .then((snapshot) => {
            resolve(snapshot.val().start_time);
        })
        .catch(e => reject("error"));
    });
}

export default {};
