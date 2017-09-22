package com.nebula.iccp.security.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class SecurityController {
	
    @RequestMapping("/toHomePage")
    public String toHomePage(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "homePage";
    }

    
    @RequestMapping("/toGreeting")
    public String toGreeting(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "/system/greeting";
    }

}
