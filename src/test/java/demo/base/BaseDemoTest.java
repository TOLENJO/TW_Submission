package demo.base;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BaseDemoTest {

    @Test
    public void should_return_hello_world() {
        BaseDemo baseDemo = new BaseDemo();

        String expected = "Hello World";

        assertEquals(expected, baseDemo.print());
    }

    @Test
    public void should_return_sum() {
        BaseDemo baseDemo = new BaseDemo();

        int expected = 10;

        assertEquals(expected, baseDemo.sum(5, 5));
    }

    @Test
    public void should_return_sum_despite_negative() {
        BaseDemo baseDemo = new BaseDemo();

        int expected = -300;

        assertEquals(expected, baseDemo.sum(-150, -150));
    }
}
