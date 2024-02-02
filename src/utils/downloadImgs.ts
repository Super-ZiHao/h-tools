
function groupArrayIntoChunks(arr: any[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

/** 批量下载 */
function downloadImgs(base64: string[]) {
  let downloadedImages = 1;
  let currentChunkIndex = 0;
  const chunkSize = 5; // 每5个图片进行一次下载

  console.log("downloadImgs",base64)
  function downloadImage(base64Image: string) {
    // 创建一个a标签用于下载
    let a = document.createElement('a');
    console.log(base64Image, '12312312')
    a.href = base64Image;
    a.download = `image_${downloadedImages}.png`; // 设置下载的文件名
    document.body.appendChild(a); // 添加a标签到body中
    a.click(); // 模拟点击下载
    document.body.removeChild(a); // 移除a标签
    downloadedImages++; // 增加下载图片的数量
    
    // 检查是否达到了下载限制
    if (downloadedImages >= chunkSize) {
      // 达到了下载限制，可以在这里进行处理，比如提示用户
      console.log('已达下载限制，无法再下载更多图片。');
    }
  }

  const newBase64 = groupArrayIntoChunks(base64, chunkSize)


  const timer = setInterval(() => {
    newBase64[currentChunkIndex].forEach(downloadImage);
    currentChunkIndex += 1;
    if (currentChunkIndex > newBase64.length - 1) {
      clearInterval(timer);
    }
  }, 1000)
}

export default downloadImgs;