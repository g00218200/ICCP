package com.nebula.iccp.dashboard;

import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class WebApplication extends SpringBootServletInitializer {
	
	private static final Logger logger = Logger.getLogger(WebApplication.class.getName());

    public static void main(String[] args) throws Exception {
    	logger.info("spring boot application begin to start.");
        SpringApplication.run(WebApplication.class, args);
    }

}
