
let inventory = [
  { bookCode: "B01", title: "Lap trinh JavaScript", category: "CNTT", price: 120000, totalCopies: 10, availableCopies: 1, shelfLocation: "A1-01", status: "CON SACH" },
  { bookCode: "B02", title: "Cau truc du lieu", category: "CNTT", price: 185000, totalCopies: 8, availableCopies: 5, shelfLocation: "A1-02", status: "CON SACH" },
  { bookCode: "B03", title: "Kinh te vi mo", category: "Kinh te", price: 95000, totalCopies: 12, availableCopies: 12, shelfLocation: "B2-05", status: "CON SACH" },
  { bookCode: "B04", title: "Truyen Kieu", category: "Van hoc", price: 60000, totalCopies: 5, availableCopies: 0, shelfLocation: "C3-01", status: "HẾT SÁCH TRÊN KỆ" }
];

// ===== 1. NHẬP KHO (Create) - dùng push() =====
console.log("=== 1. NHẬP KHO ẤN BẢN MỚI ===");
let newBook = {
  bookCode: "B05",
  title: "Co so du lieu",
  category: "CNTT",
  price: 140000,
  totalCopies: 6,
  availableCopies: 6,
  shelfLocation: "A1-03",
  status: "CON SACH"
};
inventory.push(newBook);
console.log("Đã nhập kho: " + newBook.bookCode + " - " + newBook.title);

// ===== 2. XUẤT MƯỢN SÁCH (Update) =====
console.log("\n=== 2. SINH VIÊN MƯỢN SÁCH B01 ===");
let borrowCode = "B01";

// Mô phỏng 2 lần mượn để thấy trường hợp hết sách
for (let lan = 1; lan <= 2; lan++) {
  let found = false;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].bookCode === borrowCode) {
      found = true;
      // Kiểm tra hợp lệ: không để availableCopies < 0
      if (inventory[i].availableCopies > 0) {
        inventory[i].availableCopies = inventory[i].availableCopies - 1;
        console.log("Lần " + lan + ": Cho mượn thành công. Còn lại: " + inventory[i].availableCopies);
        if (inventory[i].availableCopies === 0) {
          inventory[i].status = "HẾT SÁCH TRÊN KỆ";
        }
      } else {
        console.log("Lần " + lan + ": Không thể mượn, sách đã HẾT SÁCH TRÊN KỆ!");
      }
    }
  }
  if (found === false) {
    console.log("Không tìm thấy sách " + borrowCode);
  }
}

// ===== 3. THANH LÝ SÁCH HỎNG (Delete) - dùng splice() =====
console.log("\n=== 3. THANH LÝ SÁCH HỎNG B04 ===");
let deleteCode = "B04";
let deleteIndex = -1;
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].bookCode === deleteCode) {
    deleteIndex = i;
  }
}
if (deleteIndex !== -1) {
  inventory.splice(deleteIndex, 1);
  console.log("Đã thanh lý sách " + deleteCode);
} else {
  console.log("Không tìm thấy sách " + deleteCode + " để thanh lý");
}

// ===== 4. KIỂM KÊ TÀI SẢN (Read) =====
let totalBooks = 0;     // tổng số lượng sách
let totalValue = 0;     // tổng giá trị kho

console.log("\n┌──────┬──────────────────────┬──────────┬────────────┬──────┬──────┬────────┬──────────────────┐");
console.log("│ Mã   │ Tên sách             │ Thể loại │ Giá        │ Tổng │ Còn  │ Kệ     │ Trạng thái       │");
console.log("├──────┼──────────────────────┼──────────┼────────────┼──────┼──────┼────────┼──────────────────┤");

for (let i = 0; i < inventory.length; i++) {
  let b = inventory[i];
  totalBooks = totalBooks + b.totalCopies;
  totalValue = totalValue + b.totalCopies * b.price;

  console.log(
    "│ " + b.bookCode.padEnd(4) +
    " │ " + b.title.padEnd(20) +
    " │ " + b.category.padEnd(8) +
    " │ " + String(b.price).padStart(10) +
    " │ " + String(b.totalCopies).padStart(4) +
    " │ " + String(b.availableCopies).padStart(4) +
    " │ " + b.shelfLocation.padEnd(6) +
    " │ " + b.status.padEnd(16) + " │"
  );
}

console.log("└──────┴──────────────────────┴──────────┴────────────┴──────┴──────┴────────┴──────────────────┘");
console.log("Tổng số lượng sách  : " + totalBooks + " cuốn");
console.log("Tổng giá trị kho    : " + totalValue + " VNĐ");