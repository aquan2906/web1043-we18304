

    console.log("MENU");
    console.log("1. Tính điểm trung bình (switch case)");
    console.log("2. Tính điểm trung bình (if else)");
    console.log("0. Thoát");
  
    var choice = parseInt(prompt("Vui lòng chọn chức năng"));
  
    switch (choice) {
      case 1:
        // Nhập điểm 4 môn
        var toan = parseFloat(prompt("Nhập điểm Toán"));
        var ly = parseFloat(prompt("Nhập điểm Lý"));
        var hoa = parseFloat(prompt("Nhập điểm Hóa"));
        var sinh = parseFloat(prompt("Nhập điểm Sinh"));
  
        // Gọi hàm tính điểm trung bình bằng switch case
        tinhDiemTrungBinh(toan, ly, hoa, sinh);
        break;
  
      case 2:
        // Nhập điểm 4 môn
        var toan = parseFloat(prompt("Nhập điểm Toán"));
        var ly = parseFloat(prompt("Nhập điểm Lý"));
        var hoa = parseFloat(prompt("Nhập điểm Hóa"));
        var sinh = parseFloat(prompt("Nhập điểm Sinh"));
  
        // Gọi hàm tính điểm trung bình bằng if else
        tinhDiemTrungBinhSwitch(toan, ly, hoa, sinh);
        break;
  
      case 0:
        console.log("Tạm biệt!");
        break;
  
      default:
        console.log("Chức năng không hợp lệ. Vui lòng chọn lại!");
        menu();
        break;
    }
  
  
  function tinhDiemTrungBinhSwitch(toan, ly, hoa, sinh) {
    // kiểm tra điều kiện đầu vào
    if (toan < 0 || toan > 10 || ly < 0 || ly > 10 || hoa < 0 || hoa > 10 || sinh < 0 || sinh > 10) {
      console.log("Điểm không hợp");}
      // tính điểm trung bình cộng 4 môn
    var diem_tb = (toan + ly + hoa + sinh) / 4;
  
   // Xếp loại
   let xepLoai = "";
   switch (true) {
     case diem_tb >= 9 &&  diem_tb <= 10:
       xepLoai = "Giỏi";
       break;
     case  diem_tb >= 7 &&  diem_tb < 9:
       xepLoai = "Khá";
       break;
     case  diem_tb>= 5 && diem_tb < 7:
       xepLoai = "Trung bình";
       break;
     default:
       xepLoai = "Yếu";
       break;
   }
 
   // In kết quả
   console.log("Điểm trung bình: " +  diem_tb.toFixed(2) + " - Xếp loại: " + xepLoai);
 }
    function tinhDiemTrungBinh(toan, ly, hoa, sinh) {
        // kiểm tra điều kiện đầu vào
        if (toan < 0 || toan > 10 || ly < 0 || ly > 10 || hoa < 0 || hoa > 10 || sinh < 0 || sinh > 10) {
          console.log("Điểm không hợp lệ. Vui lòng nhập lại!");
        }
    
      
        // tính điểm trung bình cộng 4 môn
        var diem_tb = (toan + ly + hoa + sinh) / 4;
      
        // xuất kết quả xếp loại
        if (diem_tb >= 9 && diem_tb <= 10) {
          console.log("Giỏi");
        } else if (diem_tb >= 7 && diem_tb < 9) {
          console.log("Khá");
        } else if (diem_tb >= 5 && diem_tb < 7) {
          console.log("Trung bình");
        } else {
          console.log("Yếu");
        }
      }
      