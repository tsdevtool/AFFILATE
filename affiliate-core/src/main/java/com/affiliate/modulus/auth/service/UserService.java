package com.affiliate.modulus.auth.service;

import com.affiliate.modulus.auth.dto.request.UserCreationRequest;
import com.affiliate.modulus.auth.dto.request.UserUpdateRequest;
import com.affiliate.modulus.auth.dto.response.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserCreationRequest request);
    UserResponse getMyInfo();
    UserResponse updateUser(String id, UserUpdateRequest request);
    void deleteUser(String id);
    List<UserResponse> getAllUsers();
    UserResponse getUser(String id);
}
