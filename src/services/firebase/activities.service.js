import { get, ref, update, push, remove } from "firebase/database";
import db from "./firebase.config.js";

const refActivities = ref(db, "/activities");

const getAllActivities = () => {
  return get(refActivities);
};

const updateActivityValue = (key, newValue) => {
  const updates = {
    [key + "/value"]: newValue
  };

  return update(refActivities, updates);
};

const createActivity = (activityData) => {
  return push(refActivities, activityData);
};

const updateActivity = (key, activityData) => {
  const updates = {
    [key]: activityData
  }
  return update(refActivities, updates);
};

const deleteActivity = (key) => {
  const activityRef = ref(db, `/activities/${key}`);
  return remove(activityRef);
};

export default { getAllActivities, updateActivityValue, createActivity, updateActivity, deleteActivity};
