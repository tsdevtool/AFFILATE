package com.affiliate.modulus.auth.controller;

import com.affiliate.dto.ApiResponse;
import com.affiliate.modulus.auth.dto.request.AuthRequest;
import com.affiliate.modulus.auth.dto.request.IntrospectRequest;
import com.affiliate.modulus.auth.dto.request.LogoutRequest;
import com.affiliate.modulus.auth.dto.request.RefreshRequest;
import com.affiliate.modulus.auth.dto.response.AuthResponse;
import com.affiliate.modulus.auth.dto.response.IntrospectResponse;
import com.affiliate.modulus.auth.service.AuthService;
import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthController {
    AuthService authenticationService;

    @PostMapping("/token")
    ApiResponse<AuthResponse> authenticate(@RequestBody AuthRequest request) {
        var data = authenticationService.authenticate(request);
        return ApiResponse.<AuthResponse>builder().data(data).build();
    }

    @PostMapping("/introspect")
    ApiResponse<IntrospectResponse> authenticate(@RequestBody IntrospectRequest request)
            throws ParseException, JOSEException {
        var data = authenticationService.introspect(request);
        return ApiResponse.<IntrospectResponse>builder().data(data).build();
    }

    @PostMapping("/refresh")
    ApiResponse<AuthResponse> authenticate(@RequestBody RefreshRequest request)
            throws ParseException, JOSEException {
        var data = authenticationService.refreshToken(request);
        return ApiResponse.<AuthResponse>builder().data(data).build();
    }

    @PostMapping("/logout")
    ApiResponse<Void> logout(@RequestBody LogoutRequest request) throws ParseException, JOSEException {
        authenticationService.logout(request);
        return ApiResponse.<Void>builder().build();
    }
}
