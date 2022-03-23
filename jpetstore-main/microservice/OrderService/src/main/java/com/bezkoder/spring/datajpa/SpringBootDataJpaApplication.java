package com.bezkoder.spring.datajpa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;  

@SpringBootApplication
public class SpringBootDataJpaApplication extends SpringBootServletInitializer{
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(SpringBootDataJpaApplication.class);
    }

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDataJpaApplication.class, args);
	}

}
