class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number,
        dob){
            this.id=id;
            this.first_name=first_name;
            this.last_name=last_name;
            this.class_id=class_id;
            this.email=email;
            this.phone_number=phone_number;
            this.dob=dob;
        }
        getFullname(){
            return this.first_name+" "+this.last_name;
        }
        getAge(){
            let today = new Date();
            let ngaysinh =new Date(this.dob);
            return today.getFullYear() - ngaysinh.getFullYear();
        }
}
   let sv1 = new Student('1','Pham','A','we08304','anhquan2906',0987650987,'1990/12/24');
   let sv2 = new Student('2','Nguyen','B','we08304','quanlkk',56787654,'2004/05/14');
   let sv3 = new Student('3','Le','C','we08304','email3',3454324,'1995/02/24');
   let sv4 = new Student('4','Ho','D','we08304','email4',345665434,'2010/02/15');
   let sv5 = new Student('5','Chau','E','we08304','email5',34567654,'2000/04/26');

console.log(sv4.getAge());