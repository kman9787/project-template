package org.kman.testcode;

import java.util.function.BiConsumer;
import java.util.function.BiFunction;

public class Main3 {


    public static void main(String[] args){

        int[] someNumbers = {1, 2, 3, 4};
        int key = 0;

        process(someNumbers, key, wrapper((k, v) -> System.out.println(k / v)));

    }

    private static void process(int[] someNumbers, int key, BiConsumer<Integer, Integer> consumer) {
        for (int i: someNumbers){
            consumer.accept(i, key);
        }
    }

    private static BiConsumer<Integer, Integer> wrapper(BiConsumer<Integer, Integer> consumer){
        return (v, k) -> {
            try {
                consumer.accept(v, k);
            } catch (Exception e) {
                System.out.println("Exception occur");
            }
        };
    }
}
