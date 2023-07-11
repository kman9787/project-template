package org.kman.testcode;

import java.util.*;
import java.util.function.Function;
import java.util.stream.IntStream;

public class Main {

    private static final String TEST_VAL = "1";

    private static void doStuff(Multiply multiply) {
        System.out.println(multiply.multiply(100, 2));
    }

    private static void doStuff2(int x, int y, DoStuff action){
        System.out.println(action.perform(x, y));
    }

    private static void doStuff3(String arg) {
        System.out.println("is equal: " + TEST_VAL.equals(arg));
    }


    private static void doStuff4() {
        StringBuilder sb = new StringBuilder("20181231");
        sb.insert(4, "-");
        sb.insert(7, "-");
        System.out.println(sb);
    }

    private static class CustomClass {
        private Date timeStamp;

        public CustomClass(){}

        public CustomClass(Date timeStamp){
            this.timeStamp = timeStamp;
        }

        public void setTimeStamp(Date timeStamp) {
            this.timeStamp = timeStamp;
        }

        public Date getTimeStamp() {
            return timeStamp;
        }
    }

    private static void doStuff5() {
        Date date1 = Calendar.getInstance().getTime();
        Calendar calendar2 = Calendar.getInstance();
        calendar2.set(Calendar.MONTH, Calendar.MAY);
        Date date2 = calendar2.getTime();

        CustomClass customObj1 = new CustomClass(date2);
        CustomClass customObj2 = new CustomClass(date1);

        List<CustomClass> customClassList = new ArrayList<>();
        customClassList.add(customObj1);
        customClassList.add(customObj2);

        System.out.println("Date 1: " + customObj1.getTimeStamp());
        System.out.println("Date 2: " + customObj2.getTimeStamp());

        CustomClass customObj = customClassList.stream().max(Comparator.comparing(CustomClass::getTimeStamp)).get();

        System.out.println("customObj: " + customObj.getTimeStamp());
    }

    public static void main(String[] args) {
	// write your code here
        doStuff5();

    }


    @FunctionalInterface
    interface  Multiply {
        int multiply(int x, int y);
    }

    interface DoStuff {
        int perform(int x, int y);
    }
}
