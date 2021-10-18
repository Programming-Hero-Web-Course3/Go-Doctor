import React, { createContext, useState } from "react";
import useCourses from "../hooks/useCourses.js";
import useFirebase from "../hooks/useFirebase.js";
export const AuthContext = createContext();
const AuthProvider = (props) => {
  const allContext = useFirebase();
  const [courses] = useCourses();
  const [selectedCourse, setSelectedCourse] = useState([]);
  function addToCart(key) {
    const isHave = selectedCourse.find((course) => course.key === key);
    if (isHave) {
      alert("Already Added!");
    } else {
      const matchingCourse = courses.find((course) => course.key === key);
      const newSelectedCourse = [matchingCourse, ...selectedCourse];
      setSelectedCourse(newSelectedCourse);
    }
  }

  function removeItem(key) {
    const removed = selectedCourse.filter((course) => course.key !== key);
    setSelectedCourse(removed);
  }

  const data = {
    contexts: allContext,
    addToCart,
    selectedCourse,
    removeItem,
    setSelectedCourse,
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
