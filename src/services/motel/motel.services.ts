import { collection, getDocs, query, where } from "firebase/firestore";
import {
  getMotelsByEmailRequest,
  getMotelsResonse,
} from "types/motel/MotelsApiRequestResponse";
import { auth, firestore } from "../../../src/config/Firebase";

class MmotelServices {
  constructor() {}

  dbRef = collection(firestore, "motels");

  async getMotels(req: any) {
    const motels: getMotelsResonse[] = [];
    const motelsSnapshot = await getDocs(this.dbRef);
    motelsSnapshot.forEach((doc) => {
      motels.push(doc.data() as getMotelsResonse);
    });
    return motels;
  }

  async getMotelsByEmail(req: getMotelsByEmailRequest) {
    console.log("in service", req.motelEmail);
    const motels: getMotelsResonse[] = [];
    const q = query(
      this.dbRef,
      where("motelEmail", "==", req.motelEmail.toLowerCase())
    );
    const motelsSnapshot = await getDocs(q);
    motelsSnapshot.forEach((doc) => {
      motels.push(doc.data() as getMotelsResonse);
    });
    console.log("motels=> with email = >", motels);
    return motels;
  }
}

module.exports = new MmotelServices();
