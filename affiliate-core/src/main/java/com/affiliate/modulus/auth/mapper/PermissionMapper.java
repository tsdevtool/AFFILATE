package com.affiliate.modulus.auth.mapper;

import com.affiliate.modulus.auth.dto.request.PermissionRequest;
import com.affiliate.modulus.auth.dto.response.PermissionResponse;
import com.affiliate.modulus.auth.entity.Permission;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PermissionMapper {
    Permission toPermission(PermissionRequest request);
    PermissionResponse toPermissionResponse(Permission permission);
}
