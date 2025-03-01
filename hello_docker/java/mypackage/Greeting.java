package mypackage;

public class Greeting {
    private final String name;

    public Greeting(String name) {
        this.name = name;
    }

    public void sayHello() {
        System.out.println("Hello, " + name + "!");
    }
}
