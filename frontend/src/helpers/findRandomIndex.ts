const getRandomNumber = () => {
  return Math.floor(Math.random() * 6);
};

export const findRandomIndex = async () => {
  try {
    const firstDiscNumber = getRandomNumber();
    const secondDiscNumber = getRandomNumber();
    
    return [firstDiscNumber, secondDiscNumber];
  } catch (err) {
    console.log(err);
  }
};
