import { db } from './Firebase';

export async function getCol(col) {
  //get collection from firebase

  db.collection(col).onSnapshot((snapshot) => {
    //
  });
}
