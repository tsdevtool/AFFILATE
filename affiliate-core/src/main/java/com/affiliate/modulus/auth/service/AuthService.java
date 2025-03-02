package com.affiliate.modulus.auth.service;

import com.affiliate.modulus.auth.dto.request.AuthRequest;
import com.affiliate.modulus.auth.dto.request.IntrospectRequest;
import com.affiliate.modulus.auth.dto.request.LogoutRequest;
import com.affiliate.modulus.auth.dto.request.RefreshRequest;
import com.affiliate.modulus.auth.dto.response.AuthResponse;
import com.affiliate.modulus.auth.dto.response.IntrospectResponse;
import com.affiliate.modulus.auth.entity.User;
import com.affiliate.modulus.auth.service.impl.AuthServiceImpl;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jwt.SignedJWT;

import java.text.ParseException;
import java.util.Date;

public interface AuthService {
    IntrospectResponse introspect(IntrospectRequest request) throws JOSEException, ParseException;
    AuthResponse authenticate(AuthRequest request);
    void logout(LogoutRequest request) throws ParseException, JOSEException;
    AuthResponse refreshToken(RefreshRequest request) throws ParseException, JOSEException;
}
