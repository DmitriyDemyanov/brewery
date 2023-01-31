export const sendRequestOnServer = (payload) => {
  console.log('P: ', payload);
  return new Promise((resolve) => {
    const response = { Status: 'OK' };
    setTimeout(() => resolve(response), 5000);
  });
};
