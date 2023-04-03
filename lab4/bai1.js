// Tạo class Student
class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  
    // Phương thức lấy tên đầy đủ
    getFullname() {
      return this.last_name + ' ' + this.first_name;
    }
  
    // Phương thức tính số tuổi hiện tại theo năm
    getCurrentAgeByYear() {
      const today = new Date();
      const birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const months = today.getMonth() - birthDate.getMonth();
      if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  
    // Phương thức tính số tuổi hiện tại theo ngày
    getCurrentAgeByDay() {
      const today = new Date();
      const birthDate = new Date(this.dob);   
      const diffTime = Math.abs(today - birthDate);// Math.abs trả về giá trị tuyệt đối
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));// làm tròn lên
      return diffDays;
    }
  }
  
  // Tạo danh sách sinh viên
  const students = [
    new Student(1, 'John', 'Smith', 1, 'john.smith@gmail.com', '0123456789', '1990/05/01'),
    new Student(2, 'Mary', 'Johnson', 1, 'mary.johnson@gmail.com', '0123456789', '1993/07/20'),
    new Student(3, 'David', 'Williams', 2, 'david.williams@gmail.com', '0123456789', '1992/03/29'),
    new Student(4, 'Emma', 'Taylor', 2, 'emma.taylor@gmail.com', '0123456789', '1995/10/10'),
    new Student(5, 'Jessica', 'Miller', 1, 'jessica.miller@gmail.com', '0123456789', '1991/12/05')
  ];
  
  // Sắp xếp danh sách sinh viên theo thứ tự từ thấp đến cao theo số tuổi (tính theo ngày)
  students.sort(function(a, b) {
    return a.getCurrentAgeByDay() - b.getCurrentAgeByDay();
  });
  
  // In ra danh sách sinh viên theo thứ tự từ thấp đến cao theo số tuổi (tính theo ngày)
  students.forEach(function(student) {
    console.log(student.getFullname() + ': ' + student.getCurrentAgeByYear() + ' years old (' + student.getCurrentAgeByDay() + ' days old)');
  })
  
  // In ra thông tin từ BOM về width và height của màn hình
  console.log('Width: ' + window.innerWidth + ', Height: ' + window.innerHeight);
  
  