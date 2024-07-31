const FetchApiData = async () => {
  try {
    const apiData = await fetch(
      "https://content-xflix-backend.azurewebsites.net/v1/videos"
    );
    if (!apiData.status) {
      throw new Error(`Error in Fetching API Data:`);
    }
    const apiRes = await apiData.json();
    console.log(apiRes.videos);
  } catch (error) {
    console.error("Throw new Error :", error.message);
  }
};

FetchApiData();

// const promise1 = new Promise((req, res) => {
//   setTimeout(() => {
//     res("Hello Promise 1");
//   }, 1000);
// });

// const promise2 = new Promise((req, res) => {
//   setTimeout(() => {
//     res("Hello Promise 2");
//   }, 2000);
// });

// const promise3 = new Promise((req, res) => {
//   setTimeout(() => {
//     res("Hello Promise 3");
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3]).then((res) => console.log(res));
