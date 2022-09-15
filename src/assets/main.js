const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCyb-fn8k1rt8YM2Sf6HhElg&part=snippet%2Cid&order=date&maxResults=26";

const content = null || document.getElementById("content");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b654d84340mshcd145eafb0e4d58p18f139jsncbc764bc8172",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `   
    ${videos.items
      .map(
        (video) => `
    <div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-cyan-50">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
            </h3>
        </div>
    </div>
    `
      )
      .slice(0, 12)
      .join("")} 
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
