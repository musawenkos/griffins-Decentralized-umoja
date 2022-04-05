import { db } from "../services/firebase-config";
import {collection, getDoc, getDocs, addDoc, updateDoc,deleteDoc, doc} from "firebase/firestore"

const requestCollectionRef = collection(db,"request");
class RequestDataService{
    addRequest = (newRequest) => {
        return addDoc(requestCollectionRef,newRequest);
    }
    upateRequest = (id,updateReq) =>{
        const requestDoc = doc(db,"request",id);
        return updateDoc(requestDoc,updateReq);
    }
    deleteRequest = (id) => {
        const requestDoc = doc(db,"request",id);
        return deleteDoc(requestDoc)
    }
    getAllRequest = () =>{
        return getDocs(requestCollectionRef);
    }

    getRequest = (id) => {
        const requestDoc = doc(db,"request", id);
        return getDoc(requestDoc);
    }
}

export default new RequestDataService();