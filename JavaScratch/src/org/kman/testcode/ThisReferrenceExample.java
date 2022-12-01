package org.kman.testcode;

import java.util.function.Consumer;

public class ThisReferrenceExample {

    public void doProcess(int i, Consumer consumer){
        consumer.accept(i);
    }

    public void execute() {
        doProcess(10, i -> {
            System.out.println("Value of i is " + i);
            System.out.println(this);
        });
    }

    public static void main(String[] args){
        ThisReferrenceExample thisReferrenceExample = new ThisReferrenceExample();

        thisReferrenceExample.doProcess(20, i -> {
            System.out.println("Value of i is " + i);
            //System.out.println(this); //Does not work
        });

        System.out.println("===================================================");

        thisReferrenceExample.execute();

    }
}
