import { db } from "../services/firebase-config";
import {collection, getDoc, getDocs, addDoc, updateDoc,deleteDoc, doc, where, query} from "firebase/firestore"

const usersCollectionRef = collection(db,"users");
class UsersDataService{
    addUsers = (newUsers) => {
        return addDoc(usersCollectionRef,newUsers);
    }
    upateUsers = (id,updateReq) =>{
        const usersDoc = doc(db,"users",id);
        return updateDoc(usersDoc,updateReq);
    }
    deleteUsers = (id) => {
        const usersDoc = doc(db,"users",id);
        return deleteDoc(usersDoc)
    }
    getAllUsers = () =>{
        return getDocs(usersCollectionRef);
    }

    getUsers = (id) => {
        const usersDoc = doc(db,"users", id);
        return getDoc(usersDoc);
    }
    getUsersByType = (type) =>{
        const usersDoc = query(usersCollectionRef,where("user_type", "==" , type));
        return getDocs(usersDoc);
    }
    
}

export default new UsersDataService();