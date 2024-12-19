export function formatDate(date: Date | string | number): string {
  const parsedDate = new Date(date); // Chuyển đổi đối tượng đầu vào thành đối tượng Date
  const year = parsedDate.getFullYear();
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0"); // Thêm số 0 nếu tháng < 10
  const day = parsedDate.getDate().toString().padStart(2, "0"); // Thêm số 0 nếu ngày < 10
  const hours = parsedDate.getHours().toString().padStart(2, "0"); // Thêm số 0 nếu giờ < 10
  const minutes = parsedDate.getMinutes().toString().padStart(2, "0"); // Thêm số 0 nếu phút < 10
  const seconds = parsedDate.getSeconds().toString().padStart(2, "0"); // Thêm số 0 nếu giây < 10

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // Trả về chuỗi với định dạng yyyy-MM-dd HH:mm:ss
}
