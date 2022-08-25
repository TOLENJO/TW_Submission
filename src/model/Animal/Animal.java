package model.Animal;

public class Animal {
    private int age;
    private int weight;
    protected boolean running;
    protected boolean eating;

    Animal(int age, int weight) {
        this.age = age;
        this.weight = weight;
    }

    protected void isRunning() {
        if (this.running) {
            System.out.println("The animal is running!");
        } else {
            System.out.println("The animal is not running!"); }
    }
    protected void isEating() {
        if (this.eating) {
            System.out.println("The animal is eating!");
        } else {
            System.out.println("The animal is not eating!"); }
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setRunning(boolean running) {
        this.running = running;
    }

    public void setEating(boolean eating) {
        this.eating = eating;
    }
}

