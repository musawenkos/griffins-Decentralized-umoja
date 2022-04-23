import { db } from "../services/firebase-config";
import {collection, getDoc, getDocs, addDoc, updateDoc,deleteDoc, doc, query,where} from "firebase/firestore"

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

    getAllRequestByType = (emailTo) =>{
        const requestDoc = query(requestCollectionRef,where("requestEmailTo", "==" , emailTo));
        return getDocs(requestDoc);
    }

    getRequest = (id) => {
        const requestDoc = doc(db,"request", id);
        return getDoc(requestDoc);
    }
    getAllRequestByEmail = (userEmail) =>{
        const requestDoc = query(requestCollectionRef,where("requesterUser", "==" , userEmail));
        return getDocs(requestDoc);
    }
}

export default new RequestDataService();