package org.kman.testcode;

import java.util.function.Function;
import java.util.stream.IntStream;

public class Main {

    private static void doStuff(Multiply multiply) {
        System.out.println(multiply.multiply(100, 2));
    }

    private static void doSuff2(int x, int y, DoStuff action){
        System.out.println(action.perform(x, y));
    }

    public static void main(String[] args) {
	// write your code here
        IntStream.range(1, 10).forEach(System.out::println);
        System.out.println();

        Function<Integer, Integer> func1 = (Integer x) -> x * x;

        System.out.println(func1.apply(100));

        Multiply func2 = (int x, int y) -> x * y;

        System.out.println(func2.multiply(100, 2));

        doStuff((int x, int y) -> x * y);

        doSuff2(100, 200, MathOperation::add);

        doSuff2(100, 200, MathOperation::subtract);

        doSuff2(100, 200, MathOperation::multiply);

        doSuff2(100, 200, MathOperation::devide);



    }


    @FunctionalInterface
    interface  Multiply {
        int multiply(int x, int y);
    }

    interface DoStuff {
        int perform(int x, int y);
    }
}
