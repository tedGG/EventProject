package com.boots;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.stream.DoubleStream;

@SpringBootApplication
@EnableSwagger2
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);


        DoubleStream s = DoubleStream.of(1.2,1.4);
        s.peek(System.out::println).filter(x -> x> 2).count();
    }
}
