package com.nebula.iccp.users.controller;

import com.nebula.iccp.users.pojo.Users;
import com.nebula.iccp.users.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users-service")
public class UsersController {

    @Autowired
    private DiscoveryClient discoveryClient;

    @Autowired
    private UsersService usersService;

    @RequestMapping("/query/users")
    @ResponseBody
    public List<Users> queryUsers(@RequestParam(value="username", defaultValue="admin") String name) {
        return usersService.findUsers();
    }

    @RequestMapping("/service-instances/{applicationName}")
    public List<ServiceInstance> serviceInstancesByApplicationName(
            @PathVariable String applicationName) {
        return this.discoveryClient.getInstances(applicationName);
    }
}
