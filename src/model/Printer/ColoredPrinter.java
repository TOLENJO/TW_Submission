package model.Printer;

public class ColoredPrinter extends Printer {

    @Override
    public void printPaper() {
        System.out.println("Using printer: Epson L870");
        System.out.println("Now printing colored papers...");
    }
}
