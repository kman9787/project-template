package org.kman.testcode;

public class MathOperation {

    public static int add(int x, int y) {
        return x + y;
    }

    public static int subtract(int x, int y) {
        return x - y;
    }

    public static int multiply(int x, int y) {
        return x * y;
    }

    public static int devide(int x, int y) {
        if (y == 0) return 0;
        return x / y;
    }
}
