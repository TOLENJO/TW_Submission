package model;
import model.Animal.Tiger;
import model.Printer.Printer;
import model.Printer.ColoredPrinter;

import java.awt.*;

public class Main {
    public static void main(String[] args) {
        printPapers();
    }

    private static void showStudents() {
        Student[] students = { new Student("Sehun", 28, 'm'),
                               new Student("Chanyeol", 29, 'm') };

        System.out.println("Printing info of new students...");
        for (Student x : students) {
            System.out.println("\nName: " + x.getName() + "\nID number: " + x.getIdNo()
                    + "\nAge: " + x.getAge() + "\nGender: " + x.getGender());
        }
    }

    private static void makeTigerMeow() {
        Tiger tiger = new Tiger(3, 78);
        tiger.doTheMeow();
    }

    private static void printPapers() {
        //Uses the parent class method
        Printer basicPrinter = new Printer("HP");
        basicPrinter.printPaper();

        //Uses the subclass method in which it overridden the parent method
        ColoredPrinter coloredPrinter = new ColoredPrinter();
        coloredPrinter.printPaper();
    }
}
