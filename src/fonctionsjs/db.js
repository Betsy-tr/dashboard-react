import { firestore } from '../../firebase'
import { doc , getDoc , query , getDocs , addDoc , collection} from 'firebase/firestore'


export const getOneById = async (collectionName , id) => {

    const oneData = doc(firestore , collectionName , id)

    const snapShot = await getDoc(oneData)

    return snapShot.exists ? snapShot.data() : null ;

}

export const getAll = async (collectionName) => {

    const rq = query(collection(firestore, collectionName))
    
    const snapShot = await getDocs(rq) 

    if (!(snapShot.empty)) { 

      const dataTemp = snapShot.docs.map(item=>{
        return{ id: item.id , ...item.data() }
      })

      return dataTemp 
      
    }else{

        return [] 
    }

}

export const addDataToCollection = async (collectionName, data) =>{

    return await addDoc(collection(firestore, collectionName), data)
}