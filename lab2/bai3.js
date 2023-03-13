   // Nhập họ tên và giới tính từ người dùng
   let hoTen = prompt("Nhập vào họ và tên:");
   let gioiTinh = prompt("Nhập vào giới tính (Nam/Nữ):");

   // Tách chuỗi họ và tên thành 3 phần họ, tên đệm, tên riêng
   let hten = hoTen.split(" ");
   let ho = hten[0];
   let tenDem = hten.slice(1, hten.length - 1).join(" ");
   let ten = hten[hten.length - 1];

   // In ra 3 giá trị họ, tên đệm, tên riêng
   console.log("Họ: " + ho);
   console.log("Tên đệm: " + tenDem);
   console.log("Tên: " + ten);

   // Thay đổi tên đệm dựa trên giới tính
   if (gioiTinh.toLowerCase("nam")) {
       tenDem = "Văn";
   } else if (gioiTinh.toLowerCase("nữ")) {
       tenDem = "Vẽ";
   } else {
       console.log("giới tính không hợp lệ ");
   }

   // Tạo tên mới bằng cách ghép các phần tên lại với nhau

   // In ra kết quả tên mới
   console.log("Họ và tên mới :" + ho + " " + tenDem + " " + ten);