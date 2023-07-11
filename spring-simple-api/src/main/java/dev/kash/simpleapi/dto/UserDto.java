package dev.kash.simpleapi.dto;


import dev.kash.simpleapi.model.User;

public class UserDto {

    private long id;
    private String username;
    private String password;
    private String roles;

    public UserDto() {
    }

    public UserDto(long id, String username, String password, String roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    public UserDto(User user) {
        this(user.getId(), user.getUsername(), user.getPassword(), user.getRoles());
    }

    public static UserDto toUserDto(User user){
        return new UserDto(user);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }
}
