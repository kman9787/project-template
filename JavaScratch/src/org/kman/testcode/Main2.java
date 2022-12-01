package org.kman.testcode;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class Main2 {

    public static void main(String[] args){


        List<Person> people = Arrays.asList(
                new Person("Kash", "Chet", 34),
                new Person("Lewis", "Carrol", 42),
                new Person("Thomas", "Carlyle", 51),
                new Person("Charlotte", "Bronte", 45),
                new Person("Matthew", "Arnold", 38)
        );

        sortByLName(people);
        filterByLName(people);

        System.out.println("======================================================");

        Collections.sort(people, Comparator.comparing(Person::getlName));

        System.out.println("Print All");
        printConditionally(people, person -> true);

        System.out.println("Print only last name that start with C");
        printConditionally(people, person -> person.getlName().startsWith("C"));

        System.out.println("Print only first name that start with C");
        printConditionally(people, person -> person.getName().startsWith("C"));

        System.out.println("======================================================");

        System.out.println("Print All");
        performConditionally(people, person -> true, System.out::println);

        System.out.println("Print only last name that start with C");
        performConditionally(people, person -> person.getlName().startsWith("C"), person -> System.out.println(person));

        System.out.println("Print only first name that start with C");
        performConditionally(people, person -> person.getName().startsWith("C"), person -> System.out.println(person));
    }


    private static void performConditionally(List<Person> people, Predicate<Person> predicate, Consumer<Person> consumer){
        people.stream().filter(predicate).forEach(consumer);
        System.out.println();
    }

    private static void printConditionally(List<Person> people, Predicate<Person> predicate){
        people.stream().filter(predicate).forEach(System.out::println);
        System.out.println();
    }

    public static void sortByLName(List<Person> people){
        people.stream().sorted(Comparator.comparing(Person::getlName))
                .forEach(System.out::println);

        System.out.println();
    }

    public  static void filterByLName(List<Person> people){
        people.stream().filter(p -> (p.getlName().toUpperCase().startsWith("C")))
                .forEach(System.out::println);

        System.out.println();
    }
}
