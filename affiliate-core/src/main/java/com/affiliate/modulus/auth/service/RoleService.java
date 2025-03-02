package com.affiliate.modulus.auth.service;

import com.affiliate.modulus.auth.dto.request.RoleRequest;
import com.affiliate.modulus.auth.dto.response.RoleResponse;

import java.util.List;

public interface RoleService {
    RoleResponse create(RoleRequest request);
    void delete(String id);
    List<RoleResponse> getAll();
}
