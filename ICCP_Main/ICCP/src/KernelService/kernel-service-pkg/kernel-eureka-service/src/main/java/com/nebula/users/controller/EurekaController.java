package com.nebula.users.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EurekaController {
        @RequestMapping("/greeting")
        public String greeting(@RequestParam(value="name", defaultValue="World") String name) {
            return name;
        }
}
