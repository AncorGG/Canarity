import { get, ref, update, push, remove } from "firebase/database";
import db from "./firebase.config.js";

const refActivities = ref(db, "/activities");
//works
const getAllActivities = () => {
  return get(refActivities);
};
//works
const updateActivityValue = (key, newValue) => {
  const updates = {
    [key + "/value"]: newValue
  };

  return update(refActivities, updates);
};
//works
const createActivity = (activityData) => {
  return push(refActivities, activityData);
};
//works
const updateActivity = (key, activityData) => {
  const updates = {
    [key]: activityData
  }
  return update(refActivities, updates);
};
//doesnt work
const deleteActivity = (key) => {
  const activityRef = ref(db, `/activities/${key}`);
  return remove(activityRef);
};


export default { getAllActivities, updateActivityValue, createActivity, updateActivity, deleteActivity};
