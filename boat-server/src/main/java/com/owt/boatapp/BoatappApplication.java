package com.owt.boatapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BoatappApplication {

	public static void main(String[] args) {
		SpringApplication.run(BoatappApplication.class, args);
	}

}
