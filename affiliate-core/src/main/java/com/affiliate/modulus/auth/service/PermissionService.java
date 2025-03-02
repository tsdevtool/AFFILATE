package com.affiliate.modulus.auth.service;

import com.affiliate.modulus.auth.dto.request.PermissionRequest;
import com.affiliate.modulus.auth.dto.response.PermissionResponse;

import java.util.List;

public interface PermissionService {
    PermissionResponse create(PermissionRequest request);
    List<PermissionResponse> getAll();
    void delete(String name);
}
