//nhap gia tri can tinh
let num1 = parseInt(prompt("nhap gia tri 1:"));
let num2 = parseInt(prompt("nhap gia tri 2:"));

let phepTinh=prompt("nhập phép tính(+,-,*,/):");
let ketQua;
switch (phepTinh) {
    case "+":
        ketQua=num1+num2;
        break;
    case "-":
        ketQua=num1-num2;
        break;
    case "*":
        ketQua=num1*num2;
        break;
    case "/":
        ketQua=num1/num2;
        break;
    default:
        console.log("khong hop le");
        break;
}
//in ket qua
alert("ket qua :"+ketQua);

