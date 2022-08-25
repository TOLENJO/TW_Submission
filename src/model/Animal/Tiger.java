package model.Animal;

public class Tiger extends Felidae {
    public Tiger(int age, int weight) {
        super(age, weight);
    }

    public void doTheMeow() {
        makeSound();
    }
}
