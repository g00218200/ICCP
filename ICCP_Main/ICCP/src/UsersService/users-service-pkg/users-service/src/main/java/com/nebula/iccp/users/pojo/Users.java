package com.nebula.iccp.users.pojo;

import java.io.Serializable;

/**
 * 用户信息
 *
 * @author guorui
 * @since 2016-01-31 21:39
 */

public class Users{
    private int userid;
    private String username;
    private String userpwd;
    private String realname;
    private int gender;
    private String mail;
    private int age;
    private String education;

    public int getUserid() {
        return userid;
    }

    public String getUsername() {
        return username;
    }

    public String getUserpwd() {
        return userpwd;
    }

    public String getRealname() {
        return realname;
    }

    public int getGender() {
        return gender;
    }

    public String getMail() {
        return mail;
    }

    public int getAge() {
        return age;
    }

    public String getEducation() {
        return education;
    }

    public String getOrigin() {
        return origin;
    }

    public String getAddress() {
        return address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setUserpwd(String userpwd) {
        this.userpwd = userpwd;
    }

    public void setRealname(String realname) {
        this.realname = realname;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    private String origin;
    private String address;
    private String telephone;
}
