package com.affiliate.modulus.auth.mapper;

import com.affiliate.modulus.auth.dto.request.UserCreationRequest;
import com.affiliate.modulus.auth.dto.request.UserUpdateRequest;
import com.affiliate.modulus.auth.dto.response.UserResponse;
import com.affiliate.modulus.auth.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);

    UserResponse toUserResponse(User user);

    @Mapping(target = "roles", ignore = true)
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
