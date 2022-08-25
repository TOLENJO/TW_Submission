package model.Printer;

public class Printer {
    private String printerBrand;

    protected Printer() { }
    public Printer(String printerBrand) {
        this.printerBrand = printerBrand;
    }

    public void printPaper() {
        if (this.printerBrand != null) {
            System.out.println("Using printer: " + this.printerBrand);
        }
        System.out.println("Now printing papers...");
    }

    public String getPrinterBrand() {
        return printerBrand;
    }

    public void setPrinterBrand(String printerBrand) {
        this.printerBrand = printerBrand;
    }
}
