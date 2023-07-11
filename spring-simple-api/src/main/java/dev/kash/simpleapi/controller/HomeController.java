package dev.kash.simpleapi.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HomeController {

    private static final Logger LOG = LoggerFactory.getLogger(HomeController.class);

    @GetMapping("/hello")
    @PreAuthorize("hasAnyAuthority('SCOPE_USER', 'SCOPE_ADMIN')")
    public ResponseEntity<?> home(Principal principal){
        Map jsonObject = new HashMap<String, String>();
        jsonObject.put("message", "Hello " + principal.getName());
        return ResponseEntity.ok(jsonObject);
    }

    @GetMapping("/admin-hello")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public ResponseEntity<?> adminHome(Principal principal){
        Map jsonObject = new HashMap<String, String>();
        jsonObject.put("message", "Hello " + principal.getName());
        return ResponseEntity.ok(jsonObject);
    }
}
