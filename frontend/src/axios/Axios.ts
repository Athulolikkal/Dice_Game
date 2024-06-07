import axios from "axios";
import { findRandomIndex } from "../helpers/findRandomIndex";
// import { delay } from "../helpers/delay";

const Base_Url = "http://localhost:3000";
const instance = axios.create({
  baseURL: Base_Url,
});

export const delay = (ms: any) =>
  new Promise((resolve) => setTimeout(resolve, ms));

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
    if (randomNumber !== undefined && randomNumber.length === 2) {
      //invoking the backend to finding-out the result
      const checkThedice = await instance.post("/getresult", {
        totalPoint,
        betPoint,
        betType,
        randomNumber,
      });

      //if error came?
      if (checkThedice.data.error) {
        //if not enough total points
        if (checkThedice.data.notEnoughtotalpoint) {
          setLoading(false);
          return {
            status: false,
            notEnoughtTotalPoints: true,
            message: "not enough total points",
          };
        }
        setLoading(false);
        return { status: false, error: true, message: "something went wrong" };
      } else {
        //if there is no error then changing the value
        const startTime = Date.now();

        while (Date.now() - startTime < 2000) {
          const newRandomNumber = await findRandomIndex();
          setFirstDisc(newRandomNumber[0]);
          setSecondDisc(newRandomNumber[1]);
          await delay(100);
        }
        const result: any = {};
        result.addedPoint = checkThedice.data.plusamount;
        result.totalPoint = checkThedice.data.updatedTotal;
        result.minPoint = checkThedice.data.minAmount;
        result.isBet = checkThedice.data.bet;
        result.status = true;
        result.message = checkThedice.data.message;

        setFirstDisc(randomNumber[0]);
        setSecondDisc(randomNumber[1]);
        await delay(1000);
        setLoading(false);
        return result;
      }
    }
    //if random numbers came as undefined
    setLoading(false);
    return {
      status: false,
      error: true,
      message: "not able to find the random numbers",
    };
  } catch (err) {
    console.log(err);
    setLoading(false);
    return { status: false, error: true, message: "something went wrong" };
  }
};
