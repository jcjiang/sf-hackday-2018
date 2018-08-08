import firebase from './fire';

const db = firebase.database();

const start_time_key = "start_time";
const time_stamp_key = "time_stamp"

function updateStartTime(session, start_time) {
    db.ref(`/${session}/`).set({[start_time_key]: start_time});
}

function getStartTime(session) {
    return new Promise((resolve, reject) => {
        db.ref(`/${session}/`).once('value')
        .then((snapshot) => {
            resolve(snapshot.val()[start_time_key]);
        })
        .catch(e => reject("error"));
    });
}

function addTimeStamp(session, time_Stamp) {
    db.ref(`/${session}/${time_stamp_key}`).push().set({[time_stamp_key]: time_Stamp});
}

function getTimeStamps(session) {
    return new Promise((resolve, reject) => {
        db.ref(`/${session}/`).once('value')
        .then((snapshot) => {
            resolve(snapshot.val());
        })
        .catch(e => reject("error"));
    });
}

function onTimeStampUpdate(func) {
    db.ref().on('value', (snap) => {
        // get children as an array
        var items = [];
        snap.forEach((child) => {
          items.push({
            timestamp: child.val(),
            _key: child.key
          });
        });

        func(items)
      });
}

export default {
    updateStartTime,
    getStartTime,
    addTimeStamp,
    getTimeStamps,
    onTimeStampUpdate
};
