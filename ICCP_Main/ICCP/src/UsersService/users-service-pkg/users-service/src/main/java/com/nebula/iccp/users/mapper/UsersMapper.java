package com.nebula.iccp.users.mapper;

import com.nebula.iccp.users.pojo.Users;

import java.util.List;


/**
 * @author guorui
 * @since 2016-01-22 22:17
 */
public interface UsersMapper {
	
    public List<Users> findUsers();

}
