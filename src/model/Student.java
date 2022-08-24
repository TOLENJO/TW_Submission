package model;

public class Student {
    private String name;
    private int age;
    private char gender;
    private String idNo;

    Student(String name, int age, char gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.idNo = "2022-100" +age;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo;
    }


}
