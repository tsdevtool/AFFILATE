package com.affiliate.modulus.auth.mapper;

import com.affiliate.modulus.auth.dto.request.RoleRequest;
import com.affiliate.modulus.auth.dto.response.RoleResponse;
import com.affiliate.modulus.auth.entity.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RoleMapper {
    @Mapping(target = "permissions", ignore = true)
    Role toRole(RoleRequest request);

    RoleResponse toRoleResponse(Role role);
}
