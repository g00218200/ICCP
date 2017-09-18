package com.nebula.iccp.dashboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {

    @RequestMapping("/index")
    public String index(ModelMap map){
        map.addAttribute("host","www.jianshu.com");
        return "index";
    }

}
