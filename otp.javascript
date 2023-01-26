const generateOtp = (otpLength) => {
  let otp = "";


  for (let i = 0; i < otpLength; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  // this will return opt as string
  //  return otp;
  // this will return opt as number
  return Number(otp);
};


console.log("generateOtp 3- ", generateOtp(3));
console.log("generateOtp 4- ", generateOtp(4));
console.log("generateOtp 5- ", generateOtp(5));
console.log("generateOtp 6- ", generateOtp(6));


