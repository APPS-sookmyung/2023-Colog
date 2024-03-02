import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import { useEffect, useState } from "react";

// 시간 불러오는 함수
const Test = () => {
  const [studyTime, setStudyTime] = useState();

  async function getTest() {
    const docRef = doc(db, "studyTime", "month");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setStudyTime(docSnap.data());
    }
  }

  useEffect(() => {
    getTest();
  }, []);

  return <div key={studyTime?.date}>{studyTime?.time}</div>;
};

export default Test;
