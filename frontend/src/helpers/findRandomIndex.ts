const getRandomNumber = () => {
  return Math.ceil(Math.random() * 6);
};

export const findRandomIndex = async (
  setFirstDisc: React.Dispatch<React.SetStateAction<number>>,
  setSecondDisc: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const firstDiscNumber = await getRandomNumber();
    const secondDiscNumber = await getRandomNumber();
    setFirstDisc(firstDiscNumber - 1);
    setSecondDisc(secondDiscNumber - 1);
    console.log(firstDiscNumber, secondDiscNumber);
  } catch (err) {
    console.log(err);
  }
};
