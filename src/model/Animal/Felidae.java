package model.Animal;

public class Felidae extends Animal {
    public Felidae(int age, int weight) {
        super(age, weight);
    }

    void makeSound() {
        System.out.println("Meow meow!");
    }
}
