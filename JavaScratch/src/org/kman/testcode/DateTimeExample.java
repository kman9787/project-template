package org.kman.testcode;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.temporal.TemporalField;
import java.util.Date;
import java.util.TimeZone;
import java.util.stream.Stream;

public class DateTimeExample {

    public static void main(String[] arg) throws InterruptedException {

        System.out.println("================ All Zone ID ==================");

        ZoneId.getAvailableZoneIds().forEach(System.out::println);

        System.out.println("================ All time in Zone ID ==========");

        ZoneId.getAvailableZoneIds().parallelStream().map(s -> LocalDateTime.now(ZoneId.of(s)))
                .forEach(l -> {
                    System.out.println(l.format(DateTimeFormatter.ofPattern("YYYY MMM dd hh:mm:ss")));
                });



        System.out.println(Instant.now());

        System.out.println(ZoneId.systemDefault());

        System.out.println(LocalDateTime.now(Clock.systemDefaultZone()));

        ZoneId zoneId = ZoneId.of("Europe/Paris");

        System.out.println(zoneId);

        System.out.println(LocalDateTime.now(Clock.system(zoneId)));

        Instant i1 = Instant.now();

        Thread.currentThread().sleep(500);

        Instant i2 = Instant.now();

        Duration d = Duration.between(i1, i2);

        System.out.println(d.getSeconds());

        System.out.println(LocalDateTime.now());

        LocalDate dob = LocalDate.of(1987, Month.JULY, 9);
        Period p = Period.between(dob, LocalDate.now());

        LocalDate.from(new Date().toInstant());

        System.out.println(p.getYears());

        LocalDateTime dt = LocalDateTime.now();

        System.out.println(dt.getMonth());

        System.out.println(dt.format(DateTimeFormatter.BASIC_ISO_DATE));

        System.out.println(dt.format(DateTimeFormatter.ofPattern("YYYY MMMM dd")));
    }
}
