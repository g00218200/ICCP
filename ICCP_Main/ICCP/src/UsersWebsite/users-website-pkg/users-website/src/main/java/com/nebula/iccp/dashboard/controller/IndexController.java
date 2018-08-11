package com.nebula.iccp.dashboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class IndexController {

    @RequestMapping("/index")
    public String index(ModelMap map){
        map.addAttribute("host","www.jianshu.com");

        return "index";
    }

    @RequestMapping("/home")
    public @ResponseBody String home(ModelMap map){
        map.addAttribute("host","www.jianshu.com");
        return "该休息一会了！";
    }

}
