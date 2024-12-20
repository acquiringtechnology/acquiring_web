import { collection, addDoc, setDoc, updateDoc, query, doc, where, getDoc, deleteDoc, getDocs, orderBy, startAt, endAt } from "firebase/firestore";
import { Toast } from "@/services/toast";
import { getFirestore  ,Timestamp} from "firebase/firestore";
("Thank you. Our team will contact you soon.");

export const createDocument = async (collectionName, body) => {
  try {
    if (!collectionName) {
      let message = "Something went wrong";
      Toast({ message, type: "error" });
    }
    body ={
        ...body,
        createdBy:[
            {
                date: Timestamp.fromDate(new Date()),
                userId: "guest",
            }
        ]
    }
    // Add the document to the 'posts' collection
    const docRef = await addDoc(collection(getFirestore(), collectionName), body);
    console.log("Document successfully written with ID: ", docRef.id);
    const data ={
        status:true,
        data:{
            ...body,
            id:docRef.id
        }
    }
    return data;
  } catch (error) {
    let message = "Something went wrong";
    Toast({ message, type: "error" });
    console.error("Error adding document: ", error);
  }
};
