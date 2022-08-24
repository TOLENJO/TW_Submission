package model;

public class Main {
    public static void main(String[] args) {
        Student[] students = { new Student("Sehun", 28, 'm'),
                               new Student("Chanyeol", 29, 'm') };

        System.out.println("Printing info of new students...");
        for (Student x : students) {
            System.out.println("\nName: " + x.getName() + "\nID number: " + x.getIdNo()
                    + "\nAge: " + x.getAge() + "\nGender: " + x.getGender());
        }
    }
}
