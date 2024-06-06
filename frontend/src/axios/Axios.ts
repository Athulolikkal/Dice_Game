import axios from "axios";
import { findRandomIndex } from "../helpers/findRandomIndex";

const Base_Url = "http://localhost:3000";
const instance = axios.create({
  baseURL: Base_Url,
});

export const checkResult = async (
  totalPoint: number,
  betPoint: number,
  betType: string,
  setFirstDisc: React.Dispatch<React.SetStateAction<number>>,
  setSecondDisc: React.Dispatch<React.SetStateAction<number>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const randomNumber = await findRandomIndex();
    console.log(randomNumber, "random number");
    if (randomNumber !== undefined) {
        const checkThedice =await instance.post('/getresult',{totalPoint,betPoint,betType,randomNumber})
        console.log(checkThedice);
      setFirstDisc(randomNumber[0]);
      setSecondDisc(randomNumber[1]);

    }
    setLoading(false);
    return { status: true };
  } catch (err) {
    console.log(err);
  }
};
