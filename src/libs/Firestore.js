import { db } from './Firebase';

export async function getCol(col) {
  //get collection from firebase

  db.collection(col).onSnapshot((snapshot) => {
    //
  });
}

export function getDate(firestoreDate, setDate) {
  const date = new Intl.DateTimeFormat('de-De', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(firestoreDate.toDate());

  setDate(date);
}
