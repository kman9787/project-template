package dev.kash.simpleapi.dto;

public class AuthenticationResponse {
    public final String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }
}
